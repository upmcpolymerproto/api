'use strict';
const BaseModel = require('../basemodel/basemodel');

class EmailMessage extends BaseModel {
  constructor(to, from) {
    super("", "");
    this.to = to;
    this.from = from;
  }
}

module.exports = EmailMessage;