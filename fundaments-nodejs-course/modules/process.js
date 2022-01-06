// process is global
// const process = require('process');

process.on("beforeExit", () => {
  console.log(`The process will end`);
});

process.on("exit", () => {
  console.log(`The process end`);
});

process.on("uncaughtException", (err, origin) => {
  console.log(`i forgot catch a error`);

  setTimeout(() => {
    console.log(`i am a console`);
  }, 0);
});

functionNot();

console.log(`next`);
// process.on('uncaughtRejection', () => {

// })
