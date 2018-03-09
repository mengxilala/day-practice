// 所有的 Stream 对象都是 EventEmitter 的实例。常用的事件有：
// data - 当有数据可读时触发。
// end - 没有更多的数据可读时触发。
// error - 在接收和写入过程中发生错误时触发。
// finish - 所有数据已被写入到底层系统时触发。


//从流中读取数据
var fs=require('fs');
var data='';

//创建可读流
var readerStream=fs.createReadStream('input.txt');

//设置编码为 utf8
readerStream.setEncoding('UTF8');

//处理流事件
readerStream.on('data',function(chunk){
    data+=chunk;
    console.log(1111);
});

readerStream.on('end',function(){
    console.log(data);
    console.log(2222);
});

readerStream.on('error',function(err){
    console.log(err.stack);
    console.log(3333);
});

console.log('程序执行完毕');


// 运行时会依次打印:
// 程序执行完毕
// 1111
// 菜鸟教程官网地址：www.runoob.com
// 2222