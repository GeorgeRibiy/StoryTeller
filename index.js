var config = require('./config.js');
var handlers = require('./handlers/');
var managers = require('./managers/');

managers.serverManager.createServer(handlers, config.restifyConfig);
