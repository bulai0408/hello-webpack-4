const merge = require('webpack-merge');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const common = require('./webpack.common');
const theme = require('../theme');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.join(__dirname, './../', '.cache-loader')
            }
          },
          'css-loader'
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.join(__dirname, './../', '.cache-loader')
            }
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'cache-loader',
            options: {
              cacheDirectory: path.join(__dirname, './../', '.cache-loader')
            }
          },
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: theme
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css'
    }),
    new DashboardPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true, // 一切服务都启用 gzip 压缩
    hot: true,
    port: 3000, // 监听端口
    overlay: true,
    quiet: true
  }
});
