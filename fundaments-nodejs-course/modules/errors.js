function anotherFunction() {
  bug();
}

function bug() {
  return 3 + z;
}

function bugFunctionAsync(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (error) {
      console.log(`Error in function async`);
      cb(error);
    }
  });
}

try {
  bugFunctionAsync(console.log);
} catch (error) {
  console.log("something wrong");
}
