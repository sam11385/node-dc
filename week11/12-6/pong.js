const express = require('express');
const app = express();
const port = 3000;

app.get('/ping', function(request, response) {
  response.send('PONG');
});

app.listen(port);
