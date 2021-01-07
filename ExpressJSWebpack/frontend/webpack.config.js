const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin= require("vue-loader/lib/plugin");

module.exports = {
    devtool: "source-map",

    target: ["web", "es5"],

    entry: "./js/phoneBook.js",

    output: {
        filename: "script.js",
        path: path.resolve(__dirname, "../public"),
        publicPath: ""
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({ filename: "style.css" }),
        new VueLoaderPlugin()
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }, {
                test: /\.(png|jpg|jpeg|bmp|gif|svg|ttf|eot|woff|woff2)$/,
                use: "file-loader?name=[path][name].[ext]?[contenthash]"
            }, {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }, {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader", options: {presets: ["@babel/preset-env"]}}
            }, {
                test: /\.vue$/,
                use: "vue-loader"
            }
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    }
};