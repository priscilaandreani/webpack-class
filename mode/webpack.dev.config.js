const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  mode: 'development',
  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    devMiddleware: {
      index: false,
    },
    port: 8000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      title: 'Modes',
    }),
  ],
};
