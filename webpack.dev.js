// webpack.dev.js

const { merge } = require('webpack-merge');
const common = require('./webpack.common'); // Tidak perlu menambahkan ekstensi .js jika menggunakan require

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: '.',
  },
});
