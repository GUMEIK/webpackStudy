[webpack官网](https://www.webpackjs.com/)
# npm安装webpack、webpack cli（开发依赖）
```npm install webpack webpack-cli --save-dev```
# 简单使用
执行```npx webpack```命令，默认会按照src文件夹下的index.js文件作为入口文件。没有src文件夹会报错.

生成文件默认为dist/main.js
# 在package.json中写脚本
```json
// 运行npm run build相当于 npx webpack
"scripts": {
    "build":"webpack"
}
```
# 环境配置(默认是生产环境)
## 命令行配置
- 开发环境
```npx webpack --mode=development```
- 生成环境
```npx webpack --mode=production```
## 脚本配置
```json
// build为生产环境
// dev为开发环境
"scripts": {
    "build":"webpack --mode=production",
    "dev":"webpack --mode=development"
  }
```
