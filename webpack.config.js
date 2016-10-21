var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './indexES6.js',
    output: { path: './', filename: 'index.js' },
    exclude: /node_modules/,
    module: {
        loaders: [
            {
                target: 'node',
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets : ['stage-0', 'es2015']
                }
            }
        ]
    }
};