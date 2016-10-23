var fileManager = require('../../managers/').fileManager;

module.exports = {
    getMainPageView : () => {
        return fileManager.readHTMLFile("index.html");
    },
    getPageStyle : (req) => {
        return fileManager.readCSSFile(req.params.fileName || "");
    }
}