const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();

const server = http.createServer(app);
console.log('Listening on http://127.0.0.1:8080');
server.listen('8080', '127.0.0.1');
