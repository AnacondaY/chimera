const resolve = require('path').resolve;
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge  = require('webpack');
const devConfig = require('./base.conf');

devConfig.plugins = devConfig.plugins.concat([
    new CleanWebpackPlugin('../dist'),
    new webpack.optimize.CommonsChunkPlugin({
        filename: 'vendor'
    })
]);
