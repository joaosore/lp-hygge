const path = require("path");
const webpack = require("webpack");

const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/index.js", "./src/index.scss"],
  output: {
    path: path.resolve("dist"),
    filename: "main.js"
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js(\?.*)?$/i,
        exclude: /\/node_modules/
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{ loader: "css-loader" }, "sass-loader"]
        })
      },
      {
        test: /\.(webp|otf|ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader?name=./imgs/[name].[ext]"
      },
      {
        test: /\.(png|jpg?)(\?[a-z0-9=&.]+)?$/,
        loader: "file-loader?name=./imgs/[name].[ext]"
      },
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css"
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ["default", { discardComments: { removeAll: true } }]
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new CopyWebpackPlugin([
      {
        from: "src/imgs/*",
        to: "./imgs/",
        flatten: true
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: "src/index.html",
        to: "./",
        flatten: true
      }
    ]),
    new CopyWebpackPlugin([
      {
        from: "src/contato.html",
        to: "./",
        flatten: true
      }
    ])
  ]
};
