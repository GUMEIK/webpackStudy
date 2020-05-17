const path = require('path');
// loader 本质上是一个函数 loader 是在ｎｏｄｅ环境中运行的,所以只能使用commonjs
// 将源代码进行更改，以获取目标代码,再将目标代码交由webpack进行抽象语法树进行分析
// 哪些模块需要进行loader处理，是可以进行配置的
module.exports = {
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    // loader的配置
    // module里有两个主要配置项
    module:{
        rules:[
            // 规则二
            {
                test:/index\.js$/,//正则表达式，匹配目标处理模块的路径
                use:[//匹配到之后，使用哪些loaders，数组中的每一项是一个加载器对象
                    {
                        loader:'./loaders/test.js',//加载器路径
                        options:{//传递给loaders函数的参数,自定义
                            testParams:"我是一个loader参数"
                        }
                    }
                ]
            },
            //规则一
            {

            }
        ],//模块的匹配规则
        // noParse://是否不要解析某个模块
    }
}