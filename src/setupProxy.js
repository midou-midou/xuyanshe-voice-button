const { createProxyMiddleware } = require('http-proxy-middleware')
   
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://xysbtn.xiaoblogs.cn/json',
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        })
    )
}