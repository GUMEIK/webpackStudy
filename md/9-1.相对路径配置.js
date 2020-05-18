const path = require('path');
//会影响配置文件中的所有 . 的路径，即程序的执行路径
module.exports = {
    entry: './index.js',//相当于书写src/index.js
    context: path.resolve(__dirname,'src')
}
