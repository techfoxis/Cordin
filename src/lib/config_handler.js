'use strict'

var fs = require('fs');
var logger = require('./log_handler.js').log;

let main = {
	
	config: {},

	init() {

		if(fs.existsSync('./config.json')) {
			logger('warn', 'config.json already exists!', 'You can delete it and rerun the command for a clean slate.');
			process.exit();
		}

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
		let data = fs.readFileSync('./config.json', 'utf8');
		this.config = JSON.parse(data);

		logger('success', 'Configuration file successfully loaded!', null, 'Config Handler');

		return this.config;
	},

	save() {
		let data = JSON.stringify(this.config);
		data = data.split(',');
		data = data.join(',\n');
		fs.writeFileSync('./config.json', data);
	}

}

module.exports = main;