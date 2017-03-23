'use strict';

// Define express configuration
const express = require('express');
const app = express();
//const allowOrigin = "http://localhost:8080"; // Allow service calls from CoMIT UI
const allowOrigin = null;
var port = process.env.PORT || 3000; // Use port if defined in env variables
var bodyParser = require('body-parser');

//app.use(bodyParser.json()); // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Add headers
app.use(function (req, res, next) {
 
    // If an allow origin has not been set, assume CoMIT UI is running locally on same server
    var allow = allowOrigin || req.protocol + "://" + req.hostname + ":8080";

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', allow);    

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

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