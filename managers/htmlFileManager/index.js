var fs = require('fs');
var pathToViews = '../../views/';

function readHTMLFile(fileName) {
    fs.readFile(pathToViews + fileName, (err, html) => {
        if (err) {
            return {
                message : "Error occured while reading file",
                error : err
            };
        }
        
        return html;
    });
};

module.exports = {
    readHTMLFile : readHTMLFile
}