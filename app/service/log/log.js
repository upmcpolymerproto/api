'use strict';

var logEvent = require('../../domain/logevent/logevent');

function LogService(app) {
    app.get('/log', (request, response) => {  
        var event = new logEvent("Critical", "santuccir", "Test log message");        
        console.log(event);
        console.log(event.type);
        console.log(event.description);
        console.log(event.publicprop);
        console.log(event._privateProp);        
        
        response.status(200).json(event);  
    })
}

module.exports = LogService;