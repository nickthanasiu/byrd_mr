const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|svg)$/i,
        loader: 'file-loader'
      }
    ],
  },
  mode: 'none',
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
  },
};
