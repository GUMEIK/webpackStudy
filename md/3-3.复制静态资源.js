//通常用于纯静态的东西
module.exports = {
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                //数组中的每一项为复制规则
                //这里的to相对于输出目录而言
                //当输出的结果里包含一些文件，就不再复制了，比如说index.html
                { from: 'public', to: './' },
            ]
        })
    ]
}
