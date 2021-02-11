const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    module: {
        rules: [
          {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
          },
          {
            test: /\.(js|jsx)$/,
            use: ["babel-loader"]
          }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins :[
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        })
    ]
}