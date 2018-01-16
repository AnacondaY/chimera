const resolve = require('path').resolve;
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            'webpack-hot-middleware/client',
            '../main'
        ],
        vendor: [
            'react',
            'react-dom',
            'classnames'
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
    ],
    devtool: 'cheap-module-eval-source-map'
};