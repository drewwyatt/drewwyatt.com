const isProduction = require('./is-production');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cssExtractor = ExtractTextPlugin.extract({ use: 'style-loader', loader: `css-loader`});

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
            'awesome-typescript-loader'
        ]
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    },
    {
        test: /\.md$/,
        use: [
            'html-loader',
            'markdown-loader',
        ]
    }
];

let envRules = [];
if (isProduction) {
    envRules = [
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: cssExtractor
        }
    ];
} else {
    envRules = [
        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'style-loader',
                    options: {
                        sourcemap: true
                    }
                },
                {
                    loader: 'css-loader'
                }
            ]
        }
    ];
}

module.exports = [
    ...defaultRules,
    ...envRules,
];