'use strict'

var children = require('child_process');
var fs = require('fs');
var logger = require('./log_handler.js').log;

let main = {

	sets: new Map(),

	load() {
		let sets = fs.readdirSync('./sets');
		logger('log', 'Loading command sets...', [], 'Command Handler');
		sets.forEach((value) => {
			let name = this.serializeFilename(value);
			this.sets.set(name, children.fork(`./sets/${value}`, { silent: false }));
			name = name.replace(/_/g, ' ');
			logger('detail', `Loaded the ${name}`);
		});
	},

	invoke(command) {
		this.sets.forEach((value) => {
			value.send(message, () => {
				logger('info', 'Command recieved', [
					`Command: ${message.command}`,
					`Server: ${message.server}`,
					`Channel: ${message.channel}`,
					`Sender: ${message.sender}`
				]);
			});
		});
	},

	serializeFilename(filename) {
		return filename.substring(0, filename.length - 3).toLowerCase();
	}

}

module.exports = main;