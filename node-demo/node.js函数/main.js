// 函数传递时如何让HTTP服务器工作的
var http=require('http');
http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.writeHead("Hello World");
    response.end();
}).listen(8080);


// 我们向 createServer 函数传递了一个匿名函数。
// 用这样的代码也可以达到同样的目的：
var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8080);