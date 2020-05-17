// webpack-dev-server
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"public/index.html",
            name:"index.html"
        })
    ],
    // devServer
    devServer:{
        port:8080,//端口
        open:true,//自动打开默认浏览器访问
        // index:"index.html",//可以认为是默认打开的页面localhost:8080/abc.html
        // 使用代理
        proxy:{//代理规则
            // 地址名(正则表达式) : 目标地址
            "/match":{//实际上写的url  /match/NBA/from/baidu_aladdin  实际请求的url:https://tiyu.baidu.com/match/NBA/from/baidu_aladdin
                target:"https://tiyu.baidu.com",
                changeOrigin:true//更改请求头的内容
            }
        },  
        // 控制 控制台信息的输出
        stats:{
            modules:false,
            colors:true
        }
    }
}