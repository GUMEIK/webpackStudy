module.exports = function (env) {
    console.log(env)
    //env 是在webpack的命令中传递的，比如webpack --env abc; env的值就是abc；webpack --env.abc;{abc:true};
    if(env && env.production){
        return {
            //    生产环境配置
            mode: 'production'
        }
        //    也可以将配置分出单独一个文件；return require('./webpack.dev.js')
    }else {
        return {
            mode: 'development'

        }
    }
}
