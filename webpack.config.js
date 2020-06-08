const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.resolve(__dirname, './src'),
        historyApiFallback: true,
    },
    entry: path.resolve(__dirname, './src/index.js'),
    plugins: [
      new HtmlWebpackPlugin({
          template:'./public/index.html'
      })
    ],
    module: {
        rules: [
            {
                test: [/\.js$/, /\.mjs$/],
                use: "babel-loader"
            },
            {
                test: /\.(graphql|gql)$/,
                loader: 'graphql-tag/loader',
                exclude: /node_modules/,

            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader', 'url-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]

    },
    output: {
        filename: "bundle.js",
    }

};