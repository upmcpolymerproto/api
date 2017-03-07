'use strict';
const express = require('express')  
const app = express()  
const port = 3000

// Create service modules
const logService = require('../app/service/log/log');
new logService(app);

const emailService = require('../app/service/smtp/smtp');
new emailService(app);

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