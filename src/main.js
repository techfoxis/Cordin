'use strict'

var authHandler = require('./lib/auth_handler');
var botHandler = require('./lib/bot_handler');
var commandHandler = require('./lib/command_handler');
var configHandler = require('./lib/config_handler');
var eventHandler = require('./lib/event_handler');
var logHandler = require('./lib/log_handler');
var messageHandler = require('./lib/message_handler');
var client;
var config;
var log;
var eventer;
var run;

if(process.argv[2] == 'init') configHandler.init();

configHandler.load();
config = configHandler.config;

logHandler.load();
log = logHandler.log;

eventHandler.load();
eventer = eventHandler.eventer;

botHandler.load();
client = botHandler.client;

commandHandler.load();
run = commandHandler.invoke;

authHandler.load(client);
authHandler.login(config.authentication_method, config.token, config.email, config.password);