const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const dotenv = require("dotenv");

const deps = packageJson.dependencies;

dotenv.config({ path: "./config.env" });

const domain = process.env.PROD_DOMAIN;

const prodConfig = {
  mode: "production",
  entry: "./src/index.js",

  output: {
    filename: "[name].[contenthash].js",
    publicPath: `${domain}`,
  },
  devServer: {
    port: 3000,
    historyApiFallback: {
      index: "/",
    },
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
        products: "products@http://localhost:3004/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: { requiredVersion: deps.react, singleton: true },
        'react-dom': {
          requiredVersion: deps['react-dom'],
          singleton: true,
        },
      },
    }),
  ],
};
module.exports = merge(commonConfig, prodConfig);