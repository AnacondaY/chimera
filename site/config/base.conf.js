const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const resolve = require('path').resolve;

module.exports = {
    entry:{
        vendor: ['react', 'react-dom', 'classnames'],
        app: ['../main.js']
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
            options: {
                cacheDirectory: true
            }
        },{
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            },
            exclude: /node_modules/
        },{
            test:/\.(eot|woff|svg|ttf)$/,
            loader:'file-loader',
            exclude: /node_modules/
        }, {
            test:/\.md$/,
            loader: 'raw-loader',
            //exclude: /node_modules/
        }]
    },
    resolve: {
        extensions:['*', '.js', '.jsx', '.scss', '.css'],
        alias: {
            'components': resolve(__dirname, '../../src/components'),
        }
    }
};