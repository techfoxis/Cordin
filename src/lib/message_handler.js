'use strict'

var destroyCircular = require('destroy-circular');

let main = {
  
  send(type, message, set) {
    message = destroyCircular(message);
    switch(type) {
      case 'init':
        message.cordin.eventType = 'init';
        break;
      case 'command':
        message.cordin.eventType = 'command';
        message.cordin.command = message.discord.content.substring(1);
        break;
      default:
        message.cordin.eventType = 'other';
        break;
    }
    if(!set) {
      module.parent.exports.sets.forEach((value) => {
        value.send(message);
      });
    }
    else if(typeof set == 'array') {
      set.forEach((value) => {
        value.send(message);
      });
    }
    else {
      set.send(message);
    }
  }
}
    

module.exports = main;