const fs = require('fs');
const file = process.argv[1];

fs.readFile(file, function(err, contents) {
  if (err) {
    console.log(err);
  }
  const lines = contents.toString().split('\n').length - 1;
  console.log(lines);
});
