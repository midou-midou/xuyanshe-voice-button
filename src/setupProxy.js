const { createProxyMiddleware } = require('http-proxy-middleware')
   
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/bApi', {
            target: 'http://localhost:8080/biliApi',
            changeOrigin: true,
            pathRewrite: {'^/bApi': ''}
        })
    )
}