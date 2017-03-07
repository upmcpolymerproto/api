'use strict';
const BaseModel = require('../basemodel/basemodel');

class LogEvent extends BaseModel {
  constructor(type, user, value, fairWarning) {
    super("1", "logEvent");
    this.type = type;
    this.user = user;
    this.value = value;
    this.fairWarning = fairWarning || false;
  }

  get description() {
      return this.type + " " + this.user + " " + this.value;
  }
}

module.exports = LogEvent;