const isProduction = require('./is-production');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssExtractor = {
    withModules: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: `css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader` }),
    
    withoutModules: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: `css-loader!postcss-loader`})
};

const defaultRules = [
    {
        enforce: 'pre',
        test: /\.tsx?$/,
        loader: 'tslint-loader',
        exclude: /node_modules/
    },
    {
        test: /\.tsx?$/,
        use: [
            'babel-loader', 
            'ts-loader'
        ]
    },
    { 
        test: /\.png$/, 
        loader: 'url', 
        exclude: /node_modules/ 
    },
    { 
        test: /\.yml$/, 
        use: [
            'json-loader',
            'yaml-loader'
        ], 
        exclude: /node_modules/ 
    }
];

let envRules = [];
if (isProduction) {
    envRules = [
        {
            test: /\.css$/,
            exclude: /node_modules|globals.css/,
            loader: cssExtractor.withModules
        }, 
        {
            test: /globals.css/,
            loader: cssExtractor.withoutModules
        }
    ];
} else {
    envRules = [
        {
            test: /\.css$/,
            exclude: /node_modules|globals.css/,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        sourcemap: true
                    }
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        importLoaders: true,
                        localIdentName: '[path]___[name]__[local]___[hash:base64:5]'
                    }
                },
                {
                    loader: 'postcss-loader'
                }
            ]
        }, 
        {
            test: /globals.css/,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        sourcemap: true,
                    }
                },
                {
                    loader: 'css-loader',
                },
                {
                    loader: 'postcss-loader',
                }
            ]        
        }
    ];
}

module.exports = [
    ...defaultRules,
    ...envRules,
];