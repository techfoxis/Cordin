'use strict'

var log = require('./log_handler').log;

let main = {

	client: null,

	load(client) {
		this.client = client
	},

	login(method, token, email, password) {
		log('Atempting to login...', 'log', null, 'Auth Handler');

		switch(method) {

			case 'oauth':
				log('Using OAuth', 'detail');
				this.client.loginWithToken(token, email, password, (response) => {
					var status = response.response.status;
					if(status == 200) {
						log('Sucessfully logged in!', 'success', null, 'Auth Handler');
					}
					else {
						log(`Login failed with status code: ${status}`, 'warn', null, 'Auth Handler');
						process.exit();
					}
				})
				break;	

			case 'creditentials':
				log('detail', 'Using creditentials')
				this.client.login(email, password, (response) => {
					var status = response.response.status;
					if(status == 200) {
						log('Sucessfully logged in!', 'success', null, 'Auth Handler');
					}
					else {
						log(`Login failed with status code: ${status}`, 'warn', null, 'Auth Handler');
						process.exit();
					}
				});
				break;

			default:
				log(`Invalid authentication method`, 'error', ['Valid authentication methods are \'oauth\' and \'creditentials\'', 'You can change the authentication method in the config.json.']);
				process.exit();
				break;
		}

	}

}

module.exports = main;