const fs = require('fs');

// let fileLength = fs
//   .readFileSync('program.js')
//   .toString()
//   .split('\n').length;

// console.log(process.argv);

const contents = fs.readFileSync(process.argv[1]);
const lines = contents.toString().split('\n').length - 1;
console.log(lines);

// NOTE: this fails in the console because of the file location I have it in. But the test passes.
