// 写入文件
// 语法
// 以下为异步模式下写入文件的语法格式：
// fs.writeFile(file, data[, options], callback)
// 如果文件存在，该方法写入的内容会覆盖旧的文件内容。
var fs=require('fs');
fs.writeFile('text.txt','我是通过写入的文件内容',function(err,data){
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功！");
    console.log("--------我是分割线-------------")
    console.log("读取写入的数据！");
    fs.readFile('text.txt', function (err, data) {
       if (err) {
          return console.error(err);
       }
       console.log("异步读取文件数据: " + data.toString());
    });
})