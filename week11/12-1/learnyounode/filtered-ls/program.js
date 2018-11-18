const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const ext = '.' + process.argv[3];

fs.readdir(dir, function(err, files) {
  if (err) return console.error(err);
  files.forEach(function(file) {
    if (path.extname === ext) {
      console.log(file);
    }
  });
});

// console.log(path.dirname('~/digital-crafts/node-dc/'));
