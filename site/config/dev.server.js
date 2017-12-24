const express = require('express');
const webpack = require('webpack');
const devConfig = require('./dev.conf');
const app = express();
const compiler = webpack(devConfig);
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: devConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
});

const hotMiddleware = require('webpack-hot-middleware')(compiler);
const PORT = process.env.PORT || 3000; 
app
    .use(devMiddleware)
    .use(hotMiddleware)
    .use(express.static('./dist'))
    .listen(PORT, () => {
        require('opn')(`http://localhost:${PORT}`);
    });