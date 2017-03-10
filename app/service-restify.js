const restify = require('restify');
var port = process.env.PORT || 3000; // Use port if defined in env variables

function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(port, function() {
  console.log('UPMC Restify service api %s listening at %s', server.name, server.url);
})