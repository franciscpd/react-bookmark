const { resolve } = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const srcPath = resolve(__dirname, "../../src");
module.exports = {
  context: srcPath,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "source-map-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }],
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", { loader: "css-loader", options: { importLoaders: 1 } }, "sass-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          "file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]",
          "image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false",
        ],
      },
      {
        test: /\.(xlsx|pdf|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 10000,
              name: "static/media/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: false,
      dry: false,
    }),
    new HtmlWebPackPlugin({
      template: resolve(srcPath, "../public/index.html"),
      filename: "./index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [srcPath, resolve(srcPath, "../node_modules")],
  },
};
