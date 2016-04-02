'use strict'

var logger = require('../lib/log_handler.js').log;

var which = true;

setInterval(() => {

	logger(null, which ? 'Ping!' : 'Pong');
	which = !which;

}, 10000);