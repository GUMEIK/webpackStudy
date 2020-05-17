// html-webpack-plugin 生成静态目录
const path = require('path')
const htmlWebpckPlugin = require("html-webpack-plugin")
module.exports = {
    entry:{
        main:"./src/index.js",
        test:"./src/test.js"
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"script/[name].js"
    },
    watch:true,
    plugins:[
        // 多用几次就可以多生成页面
        new htmlWebpckPlugin({
            // 配置页面模板 文件路径
            template:"public/index.html",
            // 使用哪个chunk的ｊｓ
            // chunks:"all"//所有的chunk
            chunks:["main"],
            // 改变输出文件名
            filename:"changeName.html"
        }),
        new htmlWebpckPlugin({
            // 配置页面模板 文件路径
            template:"public/index.html",
            // 使用哪个chunk的ｊｓ
            // chunks:"all"//所有的chunk
            chunks:["test"],
            // 改变输出文件名
            filename:"test.html"
        })
    ]
}