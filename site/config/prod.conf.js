const resolve = require('path').resolve;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HappyPack = require('happypack');

module.exports = {
    entry: {
        app: '../main',
        vendor: [
            'react',
            'react-dom',
            'classnames',
            'prop-types',
            'ulid',
            'lodash',
            'components'
        ]
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[chunkhash:12].js',
        publicPath: ''
    },
    resolve:{
        extensions:['*', '.js', '.jsx', '.scss', '.css'],
        alias:{
            components: resolve(__dirname, '../../src/components')
        }
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use:ExtractTextWebpackPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
            }),
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
            include: /node_modules/
        },{
            test: /\.jsx?$/,
            loader: 'happypack/loader?id=js',
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new ExtractTextWebpackPlugin({
            filename: '[chunkhash:8].css',
        }),
        new HappyPack({
            id: 'style',
            loaders: ['style-loader', 'css-loader', 'sass-loader']
        }),
        new HappyPack({
            id: 'js',
            loaders: ['babel-loader']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new HtmlWebpackPlugin({
            template:'../template.html'            
        }),
        new webpack.optimize.UglifyJsPlugin({
            ecma: 7
        }),
        new CleanWebpackPlugin('dist')
    ],
};