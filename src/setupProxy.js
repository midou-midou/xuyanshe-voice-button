const { createProxyMiddleware } = require('http-proxy-middleware')
   
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/biliapi', {
            target: 'https://api.xiaoblogs.cn/live',
            changeOrigin: true,
            pathRewrite: {'^/biliapi': ''}
        })
    )
}