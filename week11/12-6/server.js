// Require express from NPM
const express = require('express');

// Get an application instance with the app variable
const app = express();

// Set a variable for our port
const port = 3000;

// Use the get function to set a route
app.get('/', function(request, response) {
  response.send('Hello Digital Crafts 💪💪💪💪💪💪💪💪 wooooo');
});

app.listen(port);
