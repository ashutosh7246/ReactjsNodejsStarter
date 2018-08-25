const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'src')
  },
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '../index.web.js')
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot-loader/webpack', 'babel-loader']
      },
      { 
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader' 
      },
      {
        // Most react-native libraries include uncompiled ES6 JS.
        test: /\.js$/,
        include: /node_modules\/react-native-/,
        loader: 'babel-loader',
        query: { cacheDirectory: true }
      },
      { 
        test: /\.css$/,
        include: /node_modules\/bootstrap/,
        loader: 'style-loader!css-loader' 
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        include: /node_modules\/bootstrap/, 
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      }
    ]
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
    fs: 'empty',
    child_process: 'empty'
  },
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web'
    }
  }
};
