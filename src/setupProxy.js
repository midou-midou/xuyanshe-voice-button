const { createProxyMiddleware } = require('http-proxy-middleware')
   
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://upload.xuyanshe.club/api',
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        })
    )
}