const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://www.weather.com.cn/data/cityinfo', // 请求接口地址
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/'
      }
    })
  )
}
