function greeting(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hi ${name}`);
      resolve(name);
    }, 1000);
  });
}

function talk(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("bla bla");
      resolve(name);
    }, 1000);
  });
}

function bye(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Bye ${name}`);
      // reject("error");
      resolve(name);
    }, 1000);
  });
}

function join(name, times, cb) {
  if (times > 0) {
    talk(() => {
      join(name, --times, cb);
    });
  } else {
    bye(name, cb);
  }
}

console.log("Start process");
greeting("Hugo")
  .then(talk)
  .then(bye)
  .then((name) => {
    console.log(`End process ${name}`);
  })
  .catch((err) => {
    console.log(err);
  });
