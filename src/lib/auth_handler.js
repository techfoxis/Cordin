'use strict'

var logger = require('./log_handler').log;

let main = {

	login(method, email, password, token) {
		switch(method) {

			case 'oauth':
				break;

			case 'creditentials':
				break;

			default:
				logger('error', 'Invalid authentication method!', ['Valid authentication methods are \'oauth\' and \'creditentials\'', 'You can change the authentication method in the config.json.']);
				break;
		}
	}

}

module.exports = main;