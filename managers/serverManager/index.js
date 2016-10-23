var routes = require('./routes/');
var restify = require('restify');
var promise = require('bluebird').Promise;
var server;

function createServer(handlers, config) {
    if (!server) {
        server = restify.createServer(config);
        registerRoutes(server, handlers);

        server.listen(8888, function () {
            console.log('%s listening at %s', server.name, server.url);
        });

        return "Server has started successfuly!"
    }

    return "Server is already running";
}

function registerRoutes(server, handlers) {
    for (routeGroup in routes) {
        if (routes.hasOwnProperty(routeGroup)) {
            routes[routeGroup](server, handlers);
        }
    }
}

module.exports = {
    createServer: createServer,
    getServer: () => { return server; }
}