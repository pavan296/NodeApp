// Importing express module
var express = require('express');

// Importing mongoose module
var mongoose = require('mongoose');
const port = process.env.PORT || 1337;
const app = express();

// Handling the get request
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Starting the server on the 80 port
app.listen(port, () => {
  console.log(`The application started
successfully on port ${port}`);
});
