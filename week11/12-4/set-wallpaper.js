const axios = require('axios');
const wallpaper = require('wallpaper');

axios
  .get('https://dog.ceo/api/breeds/image/random')
  .then(function(response) {
    console.log(response.data.message);
  })
  .catch(function(error) {
    console.log(error);
  });

// console.log(wallpaper.screens);
