const resolve = require('path').resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const baseConfig = require('./base.conf');

module.exports = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            '../main'
        ],
        vendor: [
            'react',
            'react-dom',
            'classnames',
            'prop-types'
        ]
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    resolve:{
        extensions:['*', '.js', '.jsx', '.scss', '.css'],
        alias:{
            'components': resolve(__dirname, '../../src/components'),
        }
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader','sass-loader'],
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            include: /node_modules/
        },{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        },{
            test: /\.(png|jpg|jpeg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000
            }
        },{
            test:/\.(eot|woff|svg|ttf)$/,
            loader:'file-loader'
        }, {
            test:/\.md$/,
            loader: 'raw-loader'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new HtmlWebpackPlugin({
            template:'../template.html'            
        }),
        new CleanWebpackPlugin(resolve(__dirname, 'dist'))
    ],
    devtool: 'cheap-module-eval-source-map'
};