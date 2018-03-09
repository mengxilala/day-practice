//打开文件
// 在异步模式下打开文件的语法格式：
// fs.open(path, flags[, mode], callback)
// 参数使用说明如下：
// path - 文件的路径。
// flags - 文件打开的行为。具体值详见下文。
// mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
// callback - 回调函数，带有两个参数如：callback(err, fd)。
var fs=require('fs');
//异步打开文件
console.log('准备打开文件');
fs.open('input.txt')