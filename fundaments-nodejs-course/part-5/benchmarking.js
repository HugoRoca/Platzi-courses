let plus = 0;

console.time("all");
console.time("time loop 1");
for (let i = 0; i < 10000; i++) {
  plus += 1;
}
console.timeEnd("time loop 1");

console.time("time loop 2");
for (let i = 0; i < 10000; i++) {
  plus = plus + 1;
}
console.timeEnd("time loop 2");

console.time("time loop 3");
for (let i = 0; i < 10000; i++) {
  plus++;
}
console.timeEnd("time loop 3");

console.time("async");
asynchronism();
console.timeEnd("async");
console.timeEnd("all");

function asynchronism() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`end set time out`);
    }, 1000);
  });
}
