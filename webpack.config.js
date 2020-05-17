module.exports = {
    module:{
        rules:[
            {
                test: /\.js$/,
                use:{
                    // 在.babelrc中添加babel 的预设就可以了
                    loader:"babel-loader"
                }    
            }
        ]
    }
}