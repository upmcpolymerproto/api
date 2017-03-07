'use strict';

const logEvent = require('../../domain/logevent/logevent');

function LogService(app) {
    app.get('/log', (request, response) => {  
        var event = new logEvent("Critical", "santuccir", "Test log message");
        console.log(event.description);
        console.log(event);
        
        response.json(event);  
    })
}

module.exports = LogService;