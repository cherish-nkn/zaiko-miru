const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoPrefixer = require('autoprefixer')({ grid: true });
const magicImporter = require('node-sass-package-importer');

const publidDir = path.join(__dirname, '/public');

module.exports = [
    {
        entry: [
            './src/index.jsx',
        ],
        output: {
            path: publidDir,
            publicPath: '/',
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.css$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    autoprefixer: false,
                                    sourceMap: true,
                                    importLoaders: 1,
                                    minimize: true,
                                },
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true,
                                    plugins: [
                                        autoPrefixer,
                                    ],
                                },
                            },
                        ],
                    }),
                },
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    autoprefixer: false,
                                    sourceMap: true,
                                    importLoaders: 1,
                                    minimize: true,
                                },
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    ident: 'postcss',
                                    sourceMap: true,
                                    plugins: [
                                        autoPrefixer,
                                    ],
                                },
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    importer: magicImporter()
                                },
                            }
                        ],
                    }),
                },
                { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        devServer: {
            historyApiFallback: true,
            contentBase: publidDir,
        },
        plugins: [
            new ExtractTextPlugin('bundle.css'),
        ],
    },
];
