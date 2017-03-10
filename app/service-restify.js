const restify = require('restify');
var port = process.env.PORT || 3000; // Use port if defined in env variables
let server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.jsonp());
server.use(restify.bodyParser({ mapParams: true }));

// Create service objects
const logService = require('../app/service/log-restify/log-restify');
new logService(server);

const emailService = require('../app/service/smtp-restify/smtp-restify');
new emailService(server);

// Different approach - handle things in a module type fashion. Display all routes in top level service
const comms = require('../app/service/comms/comms');

server.get('/comms/parrot/:message', function (req, res, next) {
    return comms.parrot(req, res);
    next();
});

server.get('/comms/angry-parrot/:message', function (req, res, next) {
    return comms.angryParrot(req, res);
    next();
});

server.get('/comms/echo/:message', function (req, res, next) {
    return comms.echo(req, res);
    next();
});

server.get('/comms/email', function (req, res, next) {
    return comms.email(req, res);
    next();
});

server.listen(port, function() {
  console.log('UPMC Restify service api %s listening at %s', server.name, server.url);
});