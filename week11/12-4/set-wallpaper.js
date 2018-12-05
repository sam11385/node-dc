const axios = require('axios');
const wallpaper = require('wallpaper');
const download = require('download-file');

const url = 'https://dog.ceo/api/breeds/image/random';

const options = {
  directory: './',
  filename: ''
};

axios.get(url).then(function(response) {
  const image = response.data.message;
  download(image, options, function(err) {
    if (err) throw err;
    wallpaper.set(options.filename);
  });
});
