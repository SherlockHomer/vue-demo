const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack');

module.exports = {
    mode:'development',
    entry: {
        app:'./src/main.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
    },
    devtool:'inline-source-map',
    devServer: {
        // 我喜欢dev 模式下也放在dist中
        publicPath:'/dist/',
        // hot: true
        // historyApiFallback: true
    },
    module:{
        rules: [
        {
            test: /\.css$/,
            use: [
            'vue-style-loader',
            {
                loader: 'css-loader',
                options: {
                    // enable CSS Modules
                    modules: true,
                    // customize generated class names
                    localIdentName: '[local]_[hash:base64:8]'
                }
            }
            ]
        },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        }
        ]
        
    },
    plugins: [
    new CleanWebpackPlugin(['dist']),
    // new HtmlWebpackPlugin({
    //     title: 'vue-demo'
    // }),
    new webpack.NamedModulesPlugin(),
    new VueLoaderPlugin()
    ]
};

if (module.exports.mode == 'production') {
    module.exports.devtool = 'none';
    module.exports.devServer = {};
}