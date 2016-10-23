var Promise = require('bluebird').Promise;
var fs = Promise.promisifyAll(require('fs'));
var pathToViews = './views/';
var pathToStyles = './views/styles/';


function readHTMLFile(fileName) {
     
};

module.exports = {
    readHTMLFile : (fileName) => {
        return fs.readFileAsync(pathToViews + fileName);
    },
    readCSSFile : (fileName) => {
        return fs.readFileAsync(pathToStyles + fileName);
    }
}