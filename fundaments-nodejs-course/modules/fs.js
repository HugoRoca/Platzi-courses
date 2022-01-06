const fs = require("fs");

function read(route, cb) {
  fs.readFile(route, (err, data) => {
    cb(data.toString());
  });
}

function write(route, content, cb) {
  fs.writeFile(route, content, (err, data) => {
    if (err) {
      cb(`im can't write`);
    }

    cb(`write successfully`);
  });
}

function deleteFile(route, cb) {
  fs.unlink(route, cb);
}

// write(__dirname + `/text1.txt`, "im new file", console.log);
// read(__dirname + `/text1.txt`, console.log);
deleteFile(__dirname + `/text1.txt`, console.log);
