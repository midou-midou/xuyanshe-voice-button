const { createProxyMiddleware } = require('http-proxy-middleware')
   
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/api', {
            target: 'https://xysbtn-1257227807.cos.ap-chengdu.myqcloud.com',
            changeOrigin: true,
            pathRewrite: {'^/api': ''}
        })
    )
}