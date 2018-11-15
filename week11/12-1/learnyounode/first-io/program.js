const fs = require('fs');

let fileLength = fs
  .readFileSync('program.js')
  .toString()
  .split('\n').length;

console.log(fileLength - 1);
