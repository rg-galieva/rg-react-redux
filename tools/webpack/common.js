const {resolve} = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const OfflinePlugin = require('offline-plugin');

module.exports = function () {
    return {
        context: resolve(__dirname, './../../src'),

        entry: {
            vendor: ['react', 'react-dom', 'redux', 'react-redux', 'react-router-dom', 'react-router-redux'],
            app: './app.js'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },

                {
                    test: /\.scss$/,
                    use: [
                        // process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[local]_[hash:base64:5]',
                                importLoaders: 1
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                    use: 'file-loader?name=img/[name]_[hash:5].[ext]'
                },
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'file-loader?name=svg/[name].[ext]'
                        },
                        {
                            loader: 'svgo-loader',
                            options: {
                                plugins: [
                                    {removeTitle: true},
                                    {removeUselessDefs: false},
                                    {convertPathData: false},
                                    {removeAttrs: false},
                                    {cleanupIDs: false},
                                    {removeHiddenElems: false}
                                ]
                            }
                        }
                    ]
                },
                {
                    test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
                    use: 'url-loader?limit=100000'
                }
            ]
        },

        plugins: [
            new MiniCssExtractPlugin({
                filename: "[name].styles.css",
                chunkFilename: "[id].css"
            }),
            new HtmlWebpackPlugin({
                title: 'Regina Galieva',
                template: __dirname + '/template.html'
            }),
            // new OfflinePlugin({
            //     ServiceWorker: {
            //         navigateFallbackURL: '/'
            //     },
            //     AppCache: {
            //         FALLBACK: {
            //             '/': '/offline.html'
            //         }
            //     }
            // })
        ]
    }
}