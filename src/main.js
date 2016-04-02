var authHandler = require('./lib/auth_handler.js');
var commandHandler = require('./lib/command_handler.js');
var configHandler = require('./lib/config_handler.js');
var config;
var discord = require('discord.js');
var logHandler = require('./lib/log_handler.js');
var logger = logHandler.log;

if(process.argv[2] == 'init') configHandler.init();

function preInit(callback) {
	config = configHandler.load();

	callback(postInit);
}

function init(callback) {
	authHandler.login(config.authentication_method, config.email, config.password, config.token);

	callback();
}

function postInit() {
	commandHandler.load();

}

preInit(init);