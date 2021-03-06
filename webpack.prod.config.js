const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
    'webpack/hot/dev-server',
    './src/js/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'js/bundle.js',
    publicPath: '/dist/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
    externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        query: {
            presets: ['react', 'es2015'] 
        }
      }
    ]
  }
}
