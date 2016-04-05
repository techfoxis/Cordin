'use strict'

var discord = require('discord.js');
var eventer = require('./event_handler').eventer;

let main = {

	client: null,
	response: new Array(),

	load() {
		this.client = new discord.Client();

		this.client.on('ready', this.ready);
		this.client.on('message', this.message);
	},

	ready() {
		log({
			type: 'success',
			content: `${config.name} has successfully logged into:`,
			details: client.servers.join(', '),
			label: 'Auth Handler'
		});

		eventer.emit('loggedIn', this.response);
	},

	message(message) {
		if(message.content.startsWith(config.command_identifier)) {
			log({
				type: 'log',
				content: `Command Recieved: ${message.content}`
			});

			eventer.emit('commandRecieved', message);
		}

	},

	send(channel, message) {
		this.client.sendMessage(channel, message);

		log({
			type: 'log',
			content: `Message sent to channel ${channel}: ${message}`
		});

		eventer.emit('messageSent', this.response);
	}

}

module.exports = main;
