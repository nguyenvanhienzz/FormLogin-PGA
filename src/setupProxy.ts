import { createProxyMiddleware } from 'http-proxy-middleware';

const router = {
  '/api': 'https://apiurl.com',
};

export default function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://apiurl.com',
      changeOrigin: true,
      secure: false,
      pathRewrite: {
        '^/api': '',
      },
      onProxyReq: function (proxyReq, req, res) {
        proxyReq.removeHeader('Origin');
      },
      router,
      logLevel: 'debug',
    }),
  );
};
