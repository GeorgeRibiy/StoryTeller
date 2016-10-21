var routes = require('./routes/');
var restify = require('restify');
var server;

function createServer(config) {
    if (!server) {
        server = restify.createServer(config);
        registerRoutes(server);
        return "Server has started successfuly!"
    }

    return "Server is already running";
}

function registerRoutes(server) {
    for (routeGroup in routes) {
        if (routes.hasOwnProperty(routeGroup)) {
            routes[routeGroup](server);
        }
    }
}

module.exports = {
    createServer: createServer,
    getServer: () => { return server; }
}