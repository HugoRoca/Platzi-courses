const { exec, spawn } = require("child_process");

// node fundaments-nodejs-course/modules/console.js

// exec("ls -lh", (err, stdout, stderr) => {
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

let processSpawn = spawn("ls", ["-lh"]);
console.log(processSpawn.pid);
console.log(processSpawn.connected);

processSpawn.stdout.on("data", (data) => {
  console.log("is dead?", processSpawn.killed || false);
  console.log(data.toString());
});

processSpawn.on("exit", () => {
  console.log("the process end");
  console.log("is dead?", processSpawn.killed);
});
