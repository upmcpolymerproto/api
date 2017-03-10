'use strict';

var logEvent = require('../../domain/logevent/logevent');

function LogService(server) {
    server.get('/log', function (req, res, next) {
        var event = new logEvent("Critical", "santuccir", "Test log message");        
        console.log(event);
        console.log(event.type);
        console.log(event.description);
        console.log(event.publicprop);
        console.log(event._privateProp);

        res.send(201, event);
    });
}

module.exports = LogService;