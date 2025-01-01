const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ['mozjpeg', { quality: 75 }]
            ]
          }
        }
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      runtimeCaching: [
        {
          // Cache untuk daftar restoran
          urlPattern: new RegExp('^https://restaurant-api\\.dicoding\\.dev/list'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-list',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 hari
            },
          },
        },
        {
          // Cache untuk detail restoran
          urlPattern: new RegExp('^https://restaurant-api\\.dicoding\\.dev/detail/'),
          handler: 'StaleWhileRevalidate',
          options: {
            cacheName: 'restaurant-detail',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxEntries: 100, // Menyimpan hingga 100 detail restoran
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 hari
            },
          },
        },
        {
          // Cache untuk gambar restoran
          urlPattern: new RegExp('https://restaurant-api\\.dicoding\\.dev/images/'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'restaurant-images',
            cacheableResponse: {
              statuses: [0, 200],
            },
            expiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 hari
            },
          },
        },
        {
          // Cache untuk file statis (JS, CSS)
          urlPattern: /\.(?:js|css)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'static-assets',
            expiration: {
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 hari
            },
          },
        },
        {
          // Cache untuk gambar lokal
          urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'local-images',
            expiration: {
              maxEntries: 60,
              maxAgeSeconds: 60 * 60 * 24 * 30, // 30 hari
            },
          },
        },
      ],
    }),
  ],
});
