'use strict';

var BaseModel = require('../basemodel/basemodel');

class EmailMessage extends BaseModel {
  constructor(from, to, subject, text) {
    super("", "");
    
    this.from = from;
    this.to = to;
    this.subject = subject;
    this.text = text;
  }
}

module.exports = EmailMessage;