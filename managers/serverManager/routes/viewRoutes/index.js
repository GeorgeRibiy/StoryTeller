module.exports = (server, handlers) => {
    server.get('/', handlers.responseHandler.returnResult
        .bind(null, handlers.viewHandler.getMainPageView, 'text/html'));

    server.get('/styles/:fileName', handlers.responseHandler.returnResult
        .bind(null, handlers.viewHandler.getPageStyle, 'test/css'));
}