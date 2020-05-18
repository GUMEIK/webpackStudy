const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png)|(jpeg)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limite:10*100,// 只要文件超过10*100字节，将其交给file-loader进行处理
                    }
                }]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}
