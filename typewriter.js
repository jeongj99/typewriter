const sentence = "hello there from lighthouse labs";

let mSec = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, mSec);
  mSec += 50;
}

setTimeout(() => {
  console.log();
}, mSec);