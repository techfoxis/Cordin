'use strict'

var children = require('child_process');
var fs = require('fs');
var log = require('./log_handler').log;

let main = {

	sets: new Map(),

	load() {
		let sets = fs.readdirSync('./sets');
		log( 'Loading command sets...', 'log', [], 'Command Handler');
		sets.forEach((value) => {
			let name = this.serializeFilename(value);
			this.sets.set(name, children.fork(`./sets/${value}`, { silent: false }));
			name = name.replace(/_/g, ' ');
			log(`Loaded the ${name}`, 'detail');
		});

		process.on('exit', () => {
			this.sets.forEach((value) => {
				value.kill();
			})
		})
	},

	invoke(message) {
		// messageHandler.send('command', { discord: message, cordin: {
		// 	eventType: null,
		// 	command: null
		// } });
	},

	serializeFilename(filename) {
		return filename.substring(0, filename.length - 3).toLowerCase();
	}

}

module.exports = main;
