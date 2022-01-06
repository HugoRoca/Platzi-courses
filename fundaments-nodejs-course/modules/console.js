console.info(`console.info`);
console.error(`console.error`);
console.warn(`console.warn`);

let table = [
  { a: 1, b: 2 },
  { a: 3, b: 4 },
];
console.table(table);
console.group("group");
console.info(`console.info`);
console.error(`console.error`);
console.warn(`console.warn`);
console.groupEnd("group");

function function1() {
  console.group("function 1");
  console.log("this is function 1");
  console.log("this is function 1");
  console.log("this is function 1");
  console.log("this is function 1");
  console.log("this is function 1");
  function2();
  console.groupEnd("function 1");
}

function function2() {
  console.group("function 2");
  console.log("this is function 2");
  console.log("this is function 2");
  console.log("this is function 2");
  console.log("this is function 2");
  console.log("this is function 2");
  console.log("this is function 2");
  console.groupEnd("function 2");
}

function1();

console.count("times");
console.count("times");
console.count("times");
console.countReset("times");

console.count("times");
