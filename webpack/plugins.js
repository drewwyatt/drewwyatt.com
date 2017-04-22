const isProduction = require('./is-production');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');

const defaultPlugins = [
        new HtmlWebpackPlugin({ template: path.resolve('./src/index.html') }),    
        new CopyWebpackPlugin([{
            from: './src/assets',
            to: './assets'
        }]),
        new OptimizeCssPlugin(),
];

const envPlugins = isProduction ?
    [
        new webpack.optimize.UglifyJsPlugin({
            compress: { screw_ie8: true, warnings: false },
            output: { comments: false },
            sourceMap: true,
        }),        
        new ExtractTextPlugin({ 
            filename: '[name].[contenthash].css', 
            allChunks: true 
        }),
        
    ] :
    [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ];

module.exports = [
    ...defaultPlugins,
    ...envPlugins
];