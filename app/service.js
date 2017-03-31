'use strict';

// Define express configuration
const express = require('express');
const cors = require('cors');
const app = express();

var port = process.env.PORT || 3000; // Use port if defined in env variables
var bodyParser = require('body-parser');

//app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded
app.use(cors());

// Create service modules
const logService = require('../app/service/log/log');
new logService(app);

const emailService = require('../app/service/smtp/smtp');
new emailService(app);

// Different approach - handle things in a module type fashion. Display all routes in top level service
const comms = require('../app/service/comms/comms');

app.get('/comms/parrot/:message', (req, res, next) => {
    return comms.parrot(req, res);
    next();
});

app.get('/comms/angry-parrot/:message', (req, res, next) => {
    return comms.angryParrot(req, res);
    next();
});

app.get('/comms/echo/:message', (req, res, next) => {
    return comms.echo(req, res);
    next();
});

app.get('/comms/email', (req, res, next) => {
    return comms.email(req, res);
    next();
});

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`UPMC Express REST service API is listening on ${port}`)
});

/*
app.use((request, response, next) => {  
  console.log(request.headers)
  next()
});
*/