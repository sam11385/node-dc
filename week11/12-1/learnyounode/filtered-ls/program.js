const fs = require('fs');
const path = require('path');

const folder = process.argv[0];
const ext = '.' + process.argv[1];

fs.readdir(folder, function(err, files) {
  if (err) return console.error(err);
  files.forEach(function(file) {
    if (path.extname(file) === ext) {
      console.log(file);
    }
  });
});
