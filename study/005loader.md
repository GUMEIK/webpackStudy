# loader
对代码处理，转换成另一种代码，做代码转换
```js
  // loader的配置rules规则，数组中的loader是从前往后开始执行的
    module:{
        rules:[
            {
                test:/.js$/ ,//正则表达式,匹配模块的路径,
                use:[
                    {
                        loader:'url'//加载器路径,内部使用require(url)将路径导入进来
                    },{

                    }
                ]//匹配成功后，使用哪些加载器来进行处理,数组中的每一项(加载器的使用)都是一个对象
            },{

            }
        ]//数组中存放模块的匹配规则，每个规则就是一个对象
        // noParse://是否不要解析摸个模块
    },
```