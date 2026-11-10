#!/data/data/com.termux/files/usr/bin/bash
# instanten-v2 ko Termux (Android) par chalane ke liye.
# Use: bash termux.sh          -> http://localhost:4321/
#      bash termux.sh pull     -> pehle git pull, phir chalaye
set -e

cd "$(dirname "$0")"

if [ "$1" = "pull" ]; then
  echo "-> git pull"
  git pull --ff-only || echo "WARN: pull skip (local changes?)"
fi

if ! command -v node >/dev/null 2>&1; then
  echo "ERROR: Node.js nahi mila. Pehle: pkg install nodejs git -y"
  exit 1
fi

echo "-> node $(node -v) / npm $(npm -v)"

if [ ! -d node_modules ]; then
  echo "-> npm install (pehli baar 2-5 min)"
  npm install --no-audit --no-fund
fi

if ! ls node_modules/@rollup/rollup-android-arm64 >/dev/null 2>&1; then
  case "$(uname -m)" in
    aarch64|arm64) npm install --no-save @rollup/rollup-android-arm64 || true ;;
  esac
fi

echo "-> dev server: http://localhost:4321/"
echo "   band karne ke liye Ctrl+C ya: pkill -f astro"
ALLOW_DEV=1 exec npx astro dev --host 0.0.0.0 --port 4321
