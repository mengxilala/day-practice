
try {
    //可能发生异常的代码段
} catch (e) {
    //将异常信息发送服务端
}

// try...catch的优点是可以细化到每个代码块，并且可以自定义错误信息以便统计。
// try...catch无法捕获语法错误，当遇到语法错误时，浏览器仍然会抛出错误Uncaught SyntaxError，但是不会被捕获，不会走进catch的代码块内。

// 另外，如果try代码块中有回调函数也不会被捕获，比如：
try {
    var btn = $('#btn');
    btn.on('click', function () {
        //throw error
    });
} catch (e) { }
// 上述代码中btn的监听函数里抛出的异常无法被外层的catch捕获到，必须额外套一层：
try {
    var btn = $('#btn');
    btn.on('click', function () {
        try {
            //throw error
        } catch (e) { }
    });
} catch (e) { }





window.onerror = function (msg, url, line, col, error) {
    if (msg != "Script error." && !url) {
        return true;
    }
    //这里的执行流放到异步事件去执行
    setTimeout(function () {
        var data = {};
        //不一定所有浏览器都支持col参数
        col = col || (window.event && window.event.errorCharacter) || 0;

        data.url = url;
        data.line = line;
        data.col = col;
        if (!!error && !!error.stack) {
            //如果浏览器有堆栈信息
            //直接使用
            data.msg = error.stack.toString();
        } else if (!!arguments.callee) {
            //尝试通过callee拿堆栈信息
            var ext = [];
            var f = arguments.callee.caller, c = 3;
            //这里只拿三层堆栈信息
            while (f && (--c > 0)) {
                ext.push(f.toString());
                if (f === f.caller) {
                    break;//如果有环
                }
                f = f.caller;
            }
            ext = ext.join(",");
            data.msg = error.stack.toString();
        }
        //把data上报到后台！
    }, 0);

    return true;
};