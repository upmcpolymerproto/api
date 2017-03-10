'use strict';

var commsService = (function () {
  var comms = {}
  var _privateVariable = "Private";
  comms.publicProperty = "Public"
  comms.server = null;

  function privateMethod() {
    return _privateVariable;
  };  
  
  comms.parrot = function (req, res) {
    return res.send(req.params.message);
  };

  comms.angryParrot = function (req, res) {
    return res.send(req.params.message + " chump!");
  };

  comms.echo = function (req, res) {
    return comms.parrot(req, res);
  };

  comms.email = function (req, res) {
      return res.send("Just use Gmail genius!");
  }
 
  module.exports = comms;
})();