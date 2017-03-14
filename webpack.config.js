module.exports = {
    entry: './src/js/index.js',
    output: {
        path: './dist',
        filename: 'js/bundle.js'
    },
    devServer: {
        inline: true,
        port: 9000,
        contentBase: __dirname + '/dist'
    },
    externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel',
            exclude: /(node_modules | bower_components)/,
            query: {
                presets: ['react', 'es2015'] 
            }
        }]
    }
};