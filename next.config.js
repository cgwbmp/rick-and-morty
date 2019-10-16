const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');

module.exports = withOffline(withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:4]',
  },
  assetPrefix: (process.env.NODE_ENV === 'production') ? '/rick-and-morty' : '',
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'CacheFirst',
        options: {
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}));
