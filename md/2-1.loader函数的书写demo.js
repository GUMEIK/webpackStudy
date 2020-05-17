// loader 示例函数
module.exports = (sourceCode)=>{
    // 可以在this中获取传递进来的参数,但是this里的东西太多了，可以通过loader-utils 第三方库进行获取
    console.log(this)
    return "var a = 1"
}