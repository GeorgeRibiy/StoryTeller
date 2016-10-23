function returnResult(requestHandler, contentType, req, res, next) {
    requestHandler(req)
        .then((result) => {
            res.writeHead(200, {
                    'Content-Length' : Buffer.byteLength(result),
                    'Content-Type' : contentType
                });
        
            res.write(result);
            res.end();
            next();
        })
        .catch((error) => {
            console.log(error);
            next();
        })
}

module.exports = {
    returnResult : returnResult
}