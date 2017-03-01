const devtool = require('./webpack/devtool');
const entry = require('./webpack/entry');
const extensions = require('./webpack/extensions');
const modules = require('./webpack/modules');
const output = require('./webpack/output');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');

module.exports = { 
    devtool,
    entry,
    output,
    plugins,
    module: {
        rules,
    },
    resolve: {
        extensions,
        modules,
    },
};