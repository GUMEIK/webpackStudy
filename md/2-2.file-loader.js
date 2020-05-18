// 文件加载器将文件上的import/require()解析为url并将文件发送到输出目录。
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    module: {
        rules: [
            {
                test: /\.(png)|(jpeg)$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        //    文件引入的路径名称
                        name: '[path][name].[ext]'
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
