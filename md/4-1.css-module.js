// css module  命名冲突的解决方案之一
// 1. 处理    modules:true//css-loader 是支持css module的
// 2. 应用   import style1 from "./index.css"  这里的style1 为一个对象,对应改变前后的类名
// 3 语法
// 全局语法,不做类名转换
// :global(html){
//     background-color: antiquewhite;
// }
// local 表示局部的,为默认选项
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:{
                    loader:"style-loader"
                }
            },{
                test:/\.css$/,
                use:{
                    loader:"css-loader",
                    options:{
                        modules:true//css-loader 是支持css module的
                    }
                }
            }
        ]
    },
    devServer:{
        port:8080,
        stats:{
            modules:false
        },
        open:true
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"public/index.html"
        })
    ]
}