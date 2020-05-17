class MyPlugin {
    /**
     * 
     * @param {*} compiler 
     * 创建完成呢个compiler对象后，就会运行apply函数，只会运行一次
     */
    apply(compiler){
        console.log("插件运行了")
        // 在这里注册事件，监听各项变化
        // compiler.hooks.事件名称
    }
}

module.exports = new MyPlugin();
