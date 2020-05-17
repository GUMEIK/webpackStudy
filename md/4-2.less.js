// less  需要安装less 和 less-loader 
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
            }, {
                test:/\.css$/,
                use:{
                    loader:"css-loader"
                }
            }, {
                test:/\.less$/,
                use:["style-loader",{
                    loader:"css-loader"
                },"less-loader"]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"public/index.html"
        })
    ],
    devServer:{
        port:8080,
        open:true
    }
}