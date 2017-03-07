'use strict';
const BaseModel = require('../basemodel/basemodel');

var _privateProp = "this is a private property";
class LogEvent extends BaseModel {  

  constructor(type, user, value, fairWarning) {
    super("1", "logEvent");
    this.type = type;
    this.user = user;
    this.value = value;
    this.fairWarning = fairWarning || false;
  }

  get publicprop() {
    return "concat public property with private: " + _privateProp;
  }

  get description() {
      return this.type + " " + this.user + " " + this.value;
  }
}

module.exports = LogEvent;