const resolve = require('path').resolve;
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const baseConfig = require('./base.conf');

const plugins = baseConfig.plugins.concat([
    new CleanWebpackPlugin('dist'),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
    }),
    new UglifyWebpackPlugin(),
    new BundleAnalyzerPlugin()
]);

module.exports = merge(baseConfig, {
    output: {
        filename: '[chunkhash:8].js',
        path: resolve(__dirname, '../dist')
    },  
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            exclude: /node_modules/
        }]
    },
    plugins
});