const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const resolve = require('path').resolve;
const { SITE, NODE_MODULES, SRC } = require('./config');

module.exports = {
    entry:{
        vendor: ['react', 'react-dom'],
        main: resolve(__dirname, '../main.js')
    },
    output:{
        path: resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    module: {
        rules:[{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test:/\.(eot|woff|svg|ttf)$/,
            loader:'file-loader',
            exclude: /node_modules/
        },{
            test:/\.md$/,
            loader: 'raw-loader'
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss'],
        alias: {
            'components': resolve(__dirname, '../../src/components'),
        }
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: resolve(__dirname, '../template.html')
        }),
    ]
};