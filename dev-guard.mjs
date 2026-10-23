// Guard: dev server sirf dev-one.sh se chalega (ALLOW_DEV=1 zaroori hai)
if (process.argv.includes('dev') && process.env.ALLOW_DEV !== '1') {
  console.error('Dev server mat chalao. Server ke liye user khud chalaye: bash ~/dev-one.sh NAAM');
  process.exit(1);
}
