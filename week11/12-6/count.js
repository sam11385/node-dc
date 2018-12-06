const express = require('express');
const app = express();
const port = 3000;

// Set initial value for count
let count = 0;

app.post('/increment', function(request, response) {
  count++;
  response.send(`Count: ${count}`);
});

app.post('/decrement', function(request, response) {
  count--;
  response.send(`Count: ${count}`);
});

app.get('/value', function(request, response) {
  response.send(`Count: ${count}`);
  response.end();
});

app.listen(port);
