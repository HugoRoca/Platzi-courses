const fs = require("fs");
const stream = require("stream");
const util = require("util");

// let data = "";
let readableStream = fs.createReadStream(`${__dirname}/input.txt`);

// readableStream.setEncoding("utf8");
// readableStream.on("data", function (chunk) {
//   data += chunk
// });

// readableStream.on('end', function () {
//   console.log(data)
// })

// process.stdout.write('hello')
// process.stdout.write('how')
// process.stdout.write('are')
// process.stdout.write('you?')

const Transform = stream.Transform;

function myFunction() {
  Transform.call(this);
}

util.inherits(myFunction, Transform);

myFunction.prototype._transform = function (chunk, codif, cb) {
  chunkFunc = chunk.toString().toUpperCase();
  this.push(chunkFunc);
  cb();
};

let myFunc = new myFunction();

readableStream.pipe(myFunc).pipe(process.stdout);
