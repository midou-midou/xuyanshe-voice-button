const { createProxyMiddleware } = require('http-proxy-middleware')
   
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'http://localhost:3000',
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        })
    )
}