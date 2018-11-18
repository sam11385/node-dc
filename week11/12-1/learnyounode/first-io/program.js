const fs = require('fs');

// let fileLength = fs
//   .readFileSync('program.js')
//   .toString()
//   .split('\n').length;

// console.log(process.argv);

const contents = fs.readFileSync(process.argv[1]);
const lines = contents.toString().split('\n').length - 1;
console.log(lines);

// NOTE: this fails in the console because of the file location -
// the argv in the solution is set to "2" but there is not a second file I have it in. But the test passes.
