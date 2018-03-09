//获取文件信息
// 以下为通过异步模式获取文件信息的语法格式：
// fs.stat(path, callback)

var fs = require('fs');

fs.stat('input.txt', function (err, stats) {
    if (err) console.error(err);
    console.log(stats);
    console.log("读取文件信息成功！");
    // 检测文件类型
    console.log("是否为文件(isFile) ? " + stats.isFile());
    console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
})



