const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    mode: process.env.NODE_ENV || "development",
    entry: path.join(__dirname, 'src', 'index.js'), // bundle's "./src/index.js" entry point (path.join(__dirname, 'src', 'index.js'))
    output: {
        path: path.resolve(__dirname, 'dist'), // output directory
        filename: "[name].js", // name of the generated bundle
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: ['babel-loader'],
            },
            {
                test: /(\.css|\.scss|\.sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    // "style-loader", // creates style nodes from JS strings
                    {
                        loader: "css-loader", // translates CSS into CommonJS
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [require("autoprefixer")],
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS, using Node Sass by default
                        options: {
                            includePaths: [path.resolve(__dirname, "src")],
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jp(e*)g|gif|ico|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: { 
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    } 
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        watchContentBase: true,
        contentBase: path.join(__dirname, 'src')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            inject: "body"
        }),
        autoprefixer,
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CopyPlugin([
            {
                from: 'src/assets',
                to: 'assets/',
                force: true,
            }
        ])
    ],
    devtool: 'cheap-module-eval-source-map'
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         name: true,
    //     },
    //     runtimeChunk: true,
    // },
};