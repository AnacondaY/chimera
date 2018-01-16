const resolve = require('path').resolve;
const ROOT = resolve(__dirname);
const NODE_MODULES = resolve(ROOT, 'node_modules');
const SRC = resolve(ROOT, 'src');
const SITE = resolve(ROOT, 'site');

module.exports = {
    ROOT,
    NODE_MODULES,
    SRC,
    SITE
};