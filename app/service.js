'use strict';

// Define express configuration
const express = require('express');
const app = express();
var port = process.env.PORT || 3000; // Use port if defined in env variables
var bodyParser = require('body-parser');

//app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Create service modules
const logService = require('../app/service/log/log');
new logService(app);

const emailService = require('../app/service/smtp/smtp');
new emailService(app);

// Define basic express routes
app.get('/', (request, response) => {  
  response.send('Hello from Express!')
})

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

app.use((request, response, next) => {  
  console.log(request.headers)
  next()
})