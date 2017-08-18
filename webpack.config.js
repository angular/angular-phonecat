const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
        port: 8081
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: [/\.(spec)\.ts$/],
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
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?sourceMap,minimize']
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            }
            //,
            // { test: /\.(json)$/,
            //   loader: "file-loader?name=[path][name].[ext]&context=./app/static"
            // }
            //{
            //    test: /\.json$/,
            //    loader: 'file-loader'
            //}
            //,
            // { 
            //     test: /\.html$/, 
            //     loader: 'ng-cache-loader?prefix=[dir]/[dir]' 
            // },
            // {
            //     test: /\.json$/,
            //     loader: 'json-loader'
            // }
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
        }),
        new CopyWebpackPlugin([
            // Copy directory contents to {output}/to/directory/
            { from: 'app/phones', to: 'phones' },
            { from: 'app/img/phones', to: 'img/phones' },
        ]),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};