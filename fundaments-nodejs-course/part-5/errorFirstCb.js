function asynchronous(cb) {
  setTimeout(() => {
    try {
      let a = 3 + x;
      cb(null, a);
    } catch (error) {
      cb(error);
    }
  }, 1000);
}

try {
  asynchronous((err, data) => {
    if (err) {
      console.error("we have an error");
      console.error(err);
      return false;
      // throw err; not working in this function
    }

    console.log("all good", data);
  });
} catch (error) {
  console.error("only error");
}
