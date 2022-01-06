const os = require("os");

// show architecture
console.log(os.arch());

// show platform
console.log(os.platform());

// show all cpus
// console.log(os.cpus());
console.log(`Total cups ${os.cpus().length}`);

// show all constants
// console.log(os.constants);

// show space usage
const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}

function mb(bytes) {
  return kb(bytes) / SIZE;
}

function gb(bytes) {
  return mb(bytes) / SIZE;
}
console.log(os.freemem());
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));
console.log(gb(os.totalmem()));

// show path main
console.log(os.homedir());
console.log(os.tmpdir());

// show host name
console.log(os.networkInterfaces());
