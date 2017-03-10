const restify = require('restify');
var port = process.env.PORT || 3000; // Use port if defined in env variables
var server = restify.createServer();
server.use(restify.acceptParser(server.acceptable));
server.use(restify.jsonp());
server.use(restify.bodyParser({ mapParams: true }));

// Create service modules
const logService = require('../app/service/log-restify/log-restify');
new logService(server);

const emailService = require('../app/service/smtp-restify/smtp-restify');
new emailService(server);

server.listen(port, function() {
  console.log('UPMC Restify service api %s listening at %s', server.name, server.url);
});