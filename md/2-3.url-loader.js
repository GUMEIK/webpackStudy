// webpack的一个加载器，它将文件转换成base64 编码，内部依赖file-loader。
// 将文件直接转换成为base64 ，不产生文件，就不会产生请求，适用于文件小的情况
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
                        // limite:10*100,// 只要文件超过10*100字节，将其交给file-loader进行处理
                        // name:"[name]"// 会将配置传递给file-loader
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
