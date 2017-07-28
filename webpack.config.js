const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var helpers = require('./config/helpers');
var webpack = require('webpack');

module.exports = {
    entry: {
        'appAngularJS': './app/index.ts',
        'appAngular': './app/main.ts',
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        inline: true,
        historyApiFallback: true,
        stats: 'minimal',
        port: 8080
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
              test: /\.ts$/,
              loaders: [
                {
                    loader: 'awesome-typescript-loader',
                    options: { configFileName: helpers.root('app', 'tsconfig.json') }
                }, 'angular2-template-loader'
              ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        // Workaround for angular/angular#11580
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['appAngular', 'appAngularJS']
        }),
        new HtmlWebpackPlugin({
            title: 'Development',
            template: './index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};