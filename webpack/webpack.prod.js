const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WebpackBar = require("webpackbar");

const common = require("./webpack.common");
const theme = require("../theme");

module.exports = merge(common, {
  mode: "production",
  devtool: "eval",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //Specifies a custom public path for the target file(s).
              publicPath: "../"
            }
          },
          "css-loader"
        ]
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //Specifies a custom public path for the target file(s).
              publicPath: "../"
            }
          },
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              //Specifies a custom public path for the target file(s).
              publicPath: "../"
            }
          },
          "css-loader",
          {
            loader: "less-loader",
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
      filename: "css/[name].[hash].css",
      chunkFilename: "css/[id].[hash].css"
    }),
    new CleanWebpackPlugin(),
    new WebpackBar()
  ],
  optimization: {
    runtimeChunk: {
      name: "manifest"
    },
    splitChunks: {
      cacheGroups: {
        defaule: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  performance: {
    maxEntrypointSize: 2000000,
    assetFilter: function assetFilter(assetFilename) {
      return !/\.js$/.test(assetFilename);
    }
  }
});
