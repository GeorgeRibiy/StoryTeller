var viewHandler = require('../../handlers/').viewHandler;

module.exports = (server) => {
    server.get('/', (req, res, next) => {
        var indexpage = viewHandler.getMainPageView();

        res.writeHead(200, {
            'Content-Length' : Buffer.byteLength(indexpage),
            'Content-Type' : 'text/html'
        });
        
        res.send(indexpage);
        next();
    });
}