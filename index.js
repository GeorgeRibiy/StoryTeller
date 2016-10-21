var config = require('./config.js');
var serverManager = require('./serverManager/');

serverManager.createServer(config.restifyConfig);

server.get('/exit', function(req, res, next){
    process.exit();
})

server.listen(8888, function(){
    console.log('%s listening at %s', server.name, server.url);
})