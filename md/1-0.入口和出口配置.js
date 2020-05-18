const path = require('path')
module.exports = {
    // 入口配置的本质是一个chunk
    entry:{
        // chunk的名称：chunk对应的入口模块
        main:"./src/index.js",
        test:["./src/test.js","./src/index.js"]
    },
    // 配置出口资源
    output:{
        // 路径，必须是绝对路径
        path:path.resolve(__dirname,"dist"),
        // 配置资源文件名（配置的是合并的js文件的规则，是一个字符串）
        // 放到dist　目录下的文件名
        // name chunk的name
        // hash 总的资源哈希(文件不变化做缓存使用)
        // chunkhash
        // id chunkid 不建议使用
        filename:"[name].js"
    }
}