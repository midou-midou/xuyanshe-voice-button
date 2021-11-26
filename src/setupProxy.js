const { createProxyMiddleware } = require('http-proxy-middleware')
   
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/bApi', {
            target: 'https://xysbtn.xiaoblogs.cn/userinfo',
            changeOrigin: true,
            pathRewrite: {'^/bApi': ''}
        })
    )
}