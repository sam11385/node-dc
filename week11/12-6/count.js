// Require express from NPM
const express = require('express');
const app = express();
const port = 3000;

const count = 0;

app.post('/increment', function(request, response) {
  response.send(count++);
});

app.post('/decrement', function(request, response) {
  response.send(count--);
});

app.get('/value', function(request, response) {
  response.send(count);
});

app.listen(port);
