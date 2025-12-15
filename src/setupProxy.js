const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://samurai.it-incubator.io',
      changeOrigin: true,
      secure: false,
      pathRewrite: {'^/api': ''}, // Удаляет /api из пути
      logLevel: 'debug'
    })
  );
};