// plugin  原理是将功能镶嵌到webpack的编译流程中此类事情的实现
// plugin 的本质是一个带有apply　方法的对象
const path = require("path");
const MyPlugin = require("./plugin/test")
module.exports = {
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js"
    },
    // 监听文件变化
    watch:true,
    plugins:[//数组中的每一项
        MyPlugin
    ]
}