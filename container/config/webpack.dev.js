const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;

const devConfig = {
  mode: "development",
  entry: "./src/index.js",

  output: {
    publicPath: "http://localhost:3000/",
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: "/",
    },
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js/,
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: cssRegex,
        exclude: cssModuleRegex,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        header: "header@http://localhost:3001/remoteEntry.js",
        dashboard: "dashboard@http://localhost:3002/remoteEntry.js",
        categories: "categories@http://localhost:3003/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};
module.exports = devConfig;
