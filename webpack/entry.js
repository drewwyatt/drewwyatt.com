const isProduction = require('./is-production');
const path = require('path');


module.exports = isProduction ? 
    path.resolve('./src/index.tsx') : 
    [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server
        // and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading
        // only- means to only hot reload for successful updates
        path.resolve('./src/index.tsx')
    ];