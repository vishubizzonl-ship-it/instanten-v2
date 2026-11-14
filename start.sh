#!/data/data/com.termux/files/usr/bin/bash
# instanten-v2 — ek baar chalao, phir kabhi command nahi.
#
#   bash start.sh              = site chalu + har 1 second GitHub check
#   bash start.sh stop         = band
#   bash start.sh status       = chal rahi hai?
#
# GitHub par naya commit aaya -> 1 second me pull + build + site update.
# Aapko Termux me kuch chalane ki zarurat nahi.
#
# Port: 4322 (compassinstant 4321 par chalti hai, dono saath chal sakti hain)
cd "$(dirname "$0")" || exit 1
SELF="$(pwd)/$(basename "$0")"
RUN=.run
LOG=$RUN/logs/site.log
PORT=${PORT:-4322}
POLL=${POLL:-1}          # har kitne second me GitHub check (default 1)
BRANCH=${BRANCH:-main}
mkdir -p $RUN/logs

ok(){   printf '\033[32m==>\033[0m %s\n' "$*"; }
no(){   printf '\033[31mXX\033[0m %s\n' "$*"; }
warn(){ printf '\033[33m!!\033[0m %s\n' "$*"; }
alive(){ [ -f "$1" ] && kill -0 "$(cat "$1")" 2>/dev/null; }
up(){ curl -fsS -o /dev/null --max-time 3 "http://127.0.0.1:$PORT/" 2>/dev/null; }

# Purane server ko dhoondh kar maaro — pid file par bharosa nahi.
# Sirf ISI folder ka server: compassinstant bhi serve-static.mjs chalati hai
# (port 4321), use chhedna nahi hai — isliye process ka cwd dekh kar decide.
HERE="$(pwd)"
kill_servers(){
  for d in /proc/[0-9]*; do
    c=$( { tr '\0' ' ' < "$d/cmdline"; } 2>/dev/null ) || continue
    [ -n "$c" ] || continue
    case "$c" in
      *serve-static.mjs*)
        case "$c" in *bash*|*start.sh*) continue;; esac
        w=$(readlink "$d/cwd" 2>/dev/null) || continue
        [ "$w" = "$HERE" ] || continue
        kill "$(basename "$d")" 2>/dev/null && warn "purana server band kiya (pid $(basename "$d"))"
        ;;
    esac
  done
}

# Port ka asli maalik kaun hai — /proc/net/tcp se inode nikaal kar fd scan.
port_pid(){
  ph=$(printf '%04X' "$PORT")
  ino=""
  for f in /proc/net/tcp /proc/net/tcp6; do
    [ -r "$f" ] || continue
    ino=$(awk -v p=":$ph" 'NR>1 && $2 ~ p"$" && $4=="0A" {print $10; exit}' "$f" 2>/dev/null)
    [ -n "$ino" ] && break
  done
  [ -n "$ino" ] || return 1
  for d in /proc/[0-9]*; do
    for l in "$d"/fd/*; do
      [ "$(readlink "$l" 2>/dev/null)" = "socket:[$ino]" ] && { basename "$d"; return 0; }
    done
  done
  return 1
}

wait_port_free(){
  for i in $(seq 40); do up || return 0; sleep 0.25; done
  kill_servers; sleep 1
  for i in $(seq 20); do up || return 0; sleep 0.25; done
  if up; then
    holder=$(port_pid) && [ -n "$holder" ] && {
      warn "Port $PORT par pid $holder baitha hai: $(tr '\0' ' ' < /proc/$holder/cmdline 2>/dev/null)"
      kill "$holder" 2>/dev/null; sleep 1
      up && { kill -9 "$holder" 2>/dev/null; sleep 1; }
    }
  fi
  for i in $(seq 20); do up || return 0; sleep 0.25; done
  return 1
}

# --------------------------------------------------------------- node
NODE=""
for c in "$HOME/node22/bin/node" "$PREFIX/bin/node" "$(command -v node)"; do
  [ -n "$c" ] && [ -f "$c" ] || continue
  [ -x "$c" ] || chmod +x "$c" 2>/dev/null
  [ -x "$c" ] || continue
  case "$("$c" -v 2>/dev/null)" in v2[2-9]*|v[3-9][0-9]*) NODE=$c; break;; esac
done
[ -n "$NODE" ] || { no "Node v22+ nahi mila. Chalaye: pkg install nodejs-lts"; exit 1; }
export PATH="$(cd "$(dirname "$NODE")" && pwd):$PATH"
NPM="$(command -v npm)"

# --------------------------------------------------- boot par auto-start
boot_install(){
  mkdir -p "$HOME/.termux/boot" 2>/dev/null || return 0
  cat > "$HOME/.termux/boot/instanten-v2.sh" <<BOOT
#!/data/data/com.termux/files/usr/bin/sh
termux-wake-lock 2>/dev/null
sleep 8
cd "$(pwd)" 2>/dev/null && bash start.sh
BOOT
  chmod +x "$HOME/.termux/boot/instanten-v2.sh" 2>/dev/null
}

# ------------------------------------------------------------ build
# Build hamesha dist.next me, phir swap. Isse purani site build ke dauraan
# bhi chalti rehti hai (aadhi bani hui site kabhi nahi dikhti) aur Astro ka
# stale .prerender chunk error bhi nahi aata.
REL=releases
build_site(){
  mkdir -p "$REL"
  OUT="$REL/$(date +%Y%m%d-%H%M%S)"
  rm -rf "$OUT"
  if [ -f node_modules/astro/bin/astro.mjs ]; then
    "$NODE" node_modules/astro/bin/astro.mjs build --outDir "$OUT" >>$LOG 2>&1
  else
    OUT_DIR="$OUT" "$NPM" run build >>$LOG 2>&1
  fi
  echo "$OUT" > $RUN/lastbuild
}

# dist ek symlink hai -> naye release par atomically switch.
# Isliye deploy ke dauraan site kabhi 404 nahi deti.
swap_dist(){
  OUT=$(cat $RUN/lastbuild 2>/dev/null)
  [ -n "$OUT" ] && [ -d "$OUT" ] || return 1
  ln -sfnT "$OUT" dist.tmp || return 1
  mv -Tf dist.tmp dist || return 1
  # purane releases rakho, 3 se zyada hata do
  ls -1dt "$REL"/* 2>/dev/null | tail -n +4 | xargs -r rm -rf
  return 0
}

# Server chalu karo (port pehle khaali karo, phir 3 koshish).
start_server(){
  alive $RUN/server.pid && kill "$(cat $RUN/server.pid)" 2>/dev/null
  kill_servers
  wait_port_free || { no "Port $PORT khaali nahi hua"; return 1; }
  for try in 1 2 3; do
    PORT=$PORT nohup "$NODE" serve-static.mjs >>$LOG 2>&1 &
    echo $! > $RUN/server.pid
    sleep 1
    up && return 0
  done
  return 1
}

# ------------------------------------------------------------ rebuild
rebuild(){
  [ -d node_modules/astro ] || "$NPM" install --no-audit --no-fund >>$LOG 2>&1

  if ! build_site; then
    rm -rf dist.next
    warn "Build fail — purani site chalu hai  $(date '+%H:%M:%S')"
    return 1
  fi
  swap_dist || { warn "dist swap fail — purani site chalu hai"; return 1; }

  # Server chal raha hai to chalta rehne do: wo har request par dist se file
  # padhta hai, isliye naya build turant dikhne lagta hai (koi downtime nahi).
  if up; then
    ok "Site update ho gayi  $(date '+%H:%M:%S')  ($(git rev-parse --short HEAD 2>/dev/null))"
    return 0
  fi
  if start_server; then
    ok "Site update ho gayi (server dobara chalu)  $(date '+%H:%M:%S')"
  else
    warn "Server start nahi hua — log: $LOG"
  fi
}

case "${1:-}" in
  stop)
    touch $RUN/stop
    alive $RUN/watch.pid  && kill "$(cat $RUN/watch.pid)"  2>/dev/null
    alive $RUN/server.pid && kill "$(cat $RUN/server.pid)" 2>/dev/null
    rm -f $RUN/*.pid $RUN/stop
    ok "Band ho gaya."; exit 0;;
  status)
    up && ok "Chal rahi hai: http://localhost:$PORT/" || no "Band hai."; exit 0;;
  __watch)
    CUR=$(git rev-parse HEAD 2>/dev/null)
    while [ ! -f $RUN/stop ]; do
      sleep "$POLL"
      [ -d .git ] || continue
      R=$(GIT_TERMINAL_PROMPT=0 git ls-remote origin "refs/heads/$BRANCH" 2>/dev/null | cut -f1)
      [ -z "$R" ] && continue                 # net nahi — chup-chaap dobara
      [ "$R" = "$CUR" ] && continue           # kuch naya nahi
      GIT_TERMINAL_PROMPT=0 git fetch -q origin "$BRANCH" 2>/dev/null || continue
      git reset --hard -q FETCH_HEAD 2>/dev/null || continue
      CUR=$R
      rebuild
    done; exit 0;;
esac

ok "Node $("$NODE" -v)"
boot_install

# Koi server pehle se chal raha hai? Ho sakta hai woh PURANE code ka ho — band karo.
if up; then
  warn "Pehle se ek server chal raha hai — taaza code se badal raha hoon…"
  alive $RUN/server.pid && kill "$(cat $RUN/server.pid)" 2>/dev/null
  kill_servers
  if ! wait_port_free; then
    no "Port $PORT chhoot nahi raha. Chalaye: bash start.sh stop"
    exit 1
  fi
fi

# ---------------------------------------------------------- latest code
if [ -d .git ]; then
  ok "GitHub se latest code la raha hoon…"
  if GIT_TERMINAL_PROMPT=0 git fetch -q origin "$BRANCH" && git reset --hard -q FETCH_HEAD; then
    ok "Code $(git rev-parse --short HEAD)"
  else
    warn "GitHub connect nahi hua — jo code hai usse chala raha hoon"
  fi
fi

# -------------------------------------------------------- dependencies
if [ ! -d node_modules/astro ]; then
  ok "Dependencies install (pehli baar, 1-3 min)…"
  "$NPM" install --no-audit --no-fund >>$LOG 2>&1
  if [ ! -d node_modules/astro ]; then
    warn "Install adhura — saaf karke dobara…"
    rm -rf node_modules
    "$NPM" install --no-audit --no-fund >>$LOG 2>&1
  fi
  [ -d node_modules/astro ] || { no "Install fail. Jagah:"; df -h . | tail -1; no "Log: $LOG"; exit 1; }
fi

# --------------------------------------------------------------- build
ok "Build ho raha hai…"
if ! build_site; then
  warn "Build fail — log: $LOG"
  if [ -f dist/index.html ]; then
    warn "Purana build serve kar raha hoon."
  else
    tail -n 20 $LOG; exit 1
  fi
fi
swap_dist || { no "dist swap fail"; exit 1; }

# dist pehli baar asli folder ho sakta hai — symlink me badal do
if [ -d dist ] && [ ! -L dist ]; then
  mkdir -p "$REL"; FIRST="$REL/$(date +%Y%m%d-%H%M%S)"
  mv dist "$FIRST"; ln -sfnT "$FIRST" dist
fi

# --------------------------------------------------------------- serve
if ! start_server; then
  tail -n 20 $LOG; no "Server start nahi hua"; exit 1
fi

command -v termux-wake-lock >/dev/null && termux-wake-lock 2>/dev/null
rm -f $RUN/stop

if alive $RUN/watch.pid; then
  p=$(cat $RUN/watch.pid); [ "$p" != "$$" ] && kill "$p" 2>/dev/null
fi
nohup bash "$SELF" __watch >>$RUN/logs/watch.log 2>&1 & echo $! >$RUN/watch.pid

echo
ok "TAIYAR  →  http://localhost:$PORT/"
ok "Har $POLL second GitHub check — naya commit aaya to khud update"
echo
echo "Ab Termux band kar sakte hain. Aage koi command nahi."
echo "Band karna ho to: bash start.sh stop"
