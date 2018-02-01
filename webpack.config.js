const path = require('path');
const webpack = require('webpack');

const SRC = path.join(__dirname, 'public', 'js');
const BUILD = path.join(__dirname, 'public', 'build');

module.exports = {
  entry: path.join(SRC, 'index.js'),
  output: {
    path: BUILD,
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    publicPath: '/public/js/build',
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4096,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
