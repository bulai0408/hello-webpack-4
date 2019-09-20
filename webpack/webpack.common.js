const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const tsImportPluginFactory = require("ts-import-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const MomentLocalesPlugin = require("moment-locales-webpack-plugin");

module.exports = {
  entry: {
    // index: ["@babel/polyfill", "./src/index.js"],
    app: "./src/index.tsx"
  }, // 输入文件
  output: {
    // 输出文件
    path: path.resolve(__dirname, "..", "dist"), // 打包到./dist目录下
    filename: "js/[name].[hash].bundle.js" // 打包后文件名
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    alias: {
      "@ant-design/icons/lib/dist$": path.resolve(
        __dirname,
        "..",
        "antdIcon.js"
      ),
      "react-dom": "@hot-loader/react-dom"
    },
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "..", "tsconfig.json")
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            getCustomTransformers: () => ({
              before: [
                tsImportPluginFactory({
                  libraryName: "antd",
                  libraryDirectory: "lib",
                  style: true
                })
              ]
            })
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/"
            }
          },
          {
            loader: "image-webpack-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      //html模板生成
      title: "index",
      filename: "index.html",
      template: "public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled", // 不启动展示打包报告的http服务器
      generateStatsFile: false // 是否生成stats.json文件,平常关闭，需要查看时开启
    }),
    new MomentLocalesPlugin({
      //减小moment.js包体积，只保留zh-cn部分
      localesToKeep: ["zh-cn"]
    })
  ]
};
