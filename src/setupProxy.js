const { createProxyMiddleware } = require('http-proxy-middleware')
   
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/rss', {
            target: 'https://xysbtn.xiaoblogs.cn/rss',
            changeOrigin: true,
            pathRewrite: {'^/rss': ''}
        })
    )
}