// 两个loader
// css-loader 将ｃｓｓ代码转换成js代码(将ｃｓｓ代码作为字符串导出) ,并且会分析相关依赖
// style-loader 可以将css-loader转换后的代码进一步处理,将ｃｓｓ导出的字符串加入到页面的style元素中
const path = require('path');
module.exports = {
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    watch:true,
    module:{
        rules:[
            {
                test:/\.css/,
                use:{
                    loader:"style-loader"
                }
            },
            {
                test:/\.css/,
                use:{
                    loader:"css-loader"
                }
            }
        ]
    }
}