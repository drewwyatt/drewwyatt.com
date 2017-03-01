const isProduction = require('./is-production');
module.exports = isProduction ? 'source-map' : 'inline-source-map';