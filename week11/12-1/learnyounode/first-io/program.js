const fs = require('fs');

let fileLength = fs
  .readFileSync('program.js')
  .toString()
  .split('\n').length;

console.log(fileLength - 1);

// const fileContents = fs.readFileSync(process.argv[2]);
// const lines = contents.toString().split('\n').length - 1;
// console.log(lines);
