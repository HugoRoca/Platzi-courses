function greeting(name, cb) {
  setTimeout(() => {
    console.log(`Hi ${name}`);
    cb(name);
  }, 1000);
}

function talk(cb) {
  setTimeout(() => {
    console.log("bla bla");
    cb();
  }, 1000);
}

function bye(name, cb) {
  setTimeout(() => {
    console.log(`Bye ${name}`);
    cb();
  }, 1000);
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

console.log("start process");
greeting("Hugo", (name) => {
  join(name, 3, () => {
    console.log(`End process`);
  });
});

// THIS IS CALLBACK HELL!!
// greeting("Hugo", (name) => {
//   talk(() => {
//     talk(() => {
//       talk(() => {
//         bye(name, () => {
//           console.log("end process");
//         });
//       });
//     });
//   });
// });
