var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    loaders: [{
      exclude: /(node_modules|bower_components)/,
      test: /\.js$/,
      loaders: 'babel-loader',
      include: path.join(__dirname, 'src'),
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  }
};
