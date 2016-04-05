'use strict'

var fs = require('fs');
var eventer = require('./event_handler').eventer;
var log = require('./log_handler').log;

let main = {
	
	config: null,
	response: new Array(),

	init() {

		if(fs.existsSync('./config.json')) {
			log({
					type: 'warn',
					content: 'config.json already exists!',
					details: 'You can delete it and rerun the command for a clean slate.'
				});
			process.exit();
		}

		this.config = {};
		this.config.name = 'Bot'
		this.config.authentication_method = 'oauth';
		this.config.token = null;
		this.config.email = null;
		this.config.password = null;
		this.config.command_identifier = '!'

		this.save();

		process.exit();
	},

	load() {
		if(!fs.existsSync('./config.json')) this.init();

		let data = fs.readFileSync('./config.json', 'utf8');
		this.config = JSON.parse(data);
	},

	save() {
		let data = JSON.stringify(this.config, 2).split(',').join(',\n');
console.log(data)
		fs.writeFileSync('./config.json', data);
		log({
			type: 'warn',
			content: 'Your config.json was saved',
			details: 'This doesn\'t always mean it was changed, but it usually does.'
		});
		eventer.emit('configSaved', this.response);
	}

}

module.exports = main;