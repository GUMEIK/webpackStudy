// 清除输出目录重新进行打包
const path = require("path");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    plugins:[
        new CleanWebpackPlugin()
    ]
}