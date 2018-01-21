const resolve = require('path').resolve;
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function createAlias(packagesDir) {
    const packages = fs.readdirSync(packagesDir);
  
    return packages
        .filter(p => fs.statSync(path.join(packagesDir, p)).isDirectory())
        .reduce((alias, p) => {
            alias[p] = path.join(packagesDir, p);
            return alias;
        }, {});
}

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'lib'),
        filename: 'chimera-ui-umd.js',
        library: 'chimera-ui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module:{
        rules:[{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    externals: [{
        react: {
            amd: 'react',
            root: 'React',
            commonjs2: 'react',
            commonjs: 'react'
        },
        'react-dom': {
            amd: 'react-dom',
            root: 'ReactDOM',
            commonjs2: 'react-dom',
            commonjs: 'react-dom'
        }
    }],
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: createAlias(path.resolve(__dirname, './src/components'))
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
};