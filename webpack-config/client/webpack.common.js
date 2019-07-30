const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
  entry: {
    app: path.resolve(__dirname, "./../../src/Root.js"),
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "",
      filename: "ssr.html",
      template: path.resolve(__dirname, "./../../html/ssr.html")
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "",
      template: path.resolve(__dirname, "./../../index.html")
    })
  ],
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "./../../dist"),
    publicPath: "/"

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      }
    ]
  }
}
