//var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
        entry: ['./js/main.js'],
        output: {
            path: __dirname,
            filename: 'js/bundle.js'
        },
        module: {
            loaders: [
                { test: /\.css$/, loader: "style-loader!css-loader" },
                { test: /\.js$/, loader: 'es6-loader'}, 
                { test: /\.js$/, loader: 'jsx-loader'}
            ]
        }
    };