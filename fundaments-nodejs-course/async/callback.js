function greeting(name, cb) {
  setTimeout(() => {
    console.log(`Hi ${name}`);
    cb(name);
  }, 1000);
}

function bye(name, cb) {
  setTimeout(() => {
    console.log(`Bye ${name}`);
    cb();
  }, 1000);
}

console.log("start process");
greeting("Hugo", (name) => {
  bye(name, () => {
    console.log("end process");
  });
});
