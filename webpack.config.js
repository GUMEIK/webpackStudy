var minicssPlugin = require('mini-css-extract-plugin')
// 需要使用commenjs规范导出
module.exports = {
    // 环境配置 production
    // mode:"development",
    // 入口文件
    // entry:"./src/xxx.js",
    // 出口文件
    // output:{

    // }
    // 配置多个入口，可以是一个对象
    entry:{
        index:'./src/index.js'
    },
    output:{
        filename:"[name].js",
        publicPath:"/dist/temp"
    },
    module:{
        rules:[
            {
                test:/\.css/,
                use:[
                    {
                        // loader:"style-loader"
                        // 抽离出css文件
                        loader:minicssPlugin.loader
                    },{
                        loader:"css-loader"
                    }
                ]
            },{
                test:/\.less/,
                use:[
                    {
                        loader:minicssPlugin.loader
                    },{
                        loader:"css-loader"
                    },{
                        loader:"postcss-loader",
                        options:{
                            ident:'postcss',
                            plugins:[
                                require('autoprefixer')()
                            ]
                        }
                    },{
                        loader:'less-loader'
                    }
                ]
            },{
                test:/\.scss/,
                use:[
                    {
                        loader:minicssPlugin.loader
                    },{
                        loader:"css-loader"
                    },{
                        loader:"postcss-loader",
                        options:{
                            ident:'postcss',
                            plugins:[
                                require('autoprefixer')()
                            ]
                        }
                    },{
                        loader:'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new minicssPlugin({
            filename:'[name].css'
        })
    ],
    /**
     * devtool的取值
     */
    // none 没有源码地图(生产环境下的默认配置)
    // eval 开发环境下的默认配置
    devtool:"eval-source-map",
    // 文件改变的时候，会重新构建
    // watch:true
    devServer:{
        // 端口
        port:"12306",
        // 是否默认打开浏览器
        open:true,
        // 默认查找目录
        index:"index.html",
        // 配置代理
        proxy:{
            // 正则表达式匹配
            "/api":{
                target:"http://www.xxx.com/api/stu",
                changeOrigin:true
            },
            "/other":{
                target:"www.xxx.x.x.x"
            }
        },
        // 控制控制台输出内容
        stats:{
            modules:false
        }

    }
}