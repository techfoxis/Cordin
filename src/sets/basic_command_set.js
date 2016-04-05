'use strict'

var botHandler = require('../lib/bot_handler');
var logger = require('../lib/log_handler').log;

process.on('message', (message) => {
	if(commands.hasOwnProperty(message.cordin.command)) eval(`commands.${message.cordin.command}(message)`);
});

var commands = {

	ping(message) {
		botHandler.send(message.discord.channel, 'Pong!');
	}

}


