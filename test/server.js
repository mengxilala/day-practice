require("jsdom/lib/old-api").env("", function (err, window) {
    if (err) {
        console.error(err);
        return;
    }

    var $ = require("jquery")(window);
    // $("body").append("<div>我我我我我我我我我</div>");
    // console.log($("body").text());
    // var text = $(".textDemo").text();
    // var text='我我我我我我我我我我哦我我我我我我我我除非子组件模板中';
    // console.log(text);

    var text = $('body').html();

    var Fontmin = require('fontmin');
    var srcPath = 'fonts/kt.ttf'; // 字体源文件
    var destPath = 'build/font';    // 输出路径

    // 初始化
    var fontmin = new Fontmin()
        .src(srcPath)               // 输入配置
        .use(Fontmin.glyph({        // 字型提取插件
            text: text              // 所需文字
        }))
        // .use(Fontmin.ttf2eot())     // eot 转换插件
        // .use(Fontmin.ttf2woff())    // woff 转换插件     
        // .use(Fontmin.ttf2svg())     // svg 转换插件
        // .use(Fontmin.css())         // css 生成插件
        .use(Fontmin.otf2ttf())     // svg 转换插件
        .dest(destPath);            // 输出配置

    // 执行
    fontmin.run(function (err, files, stream) {
        if (err) {                  // 异常捕捉
            console.error(err);
        }
        console.log('done');        // 成功
    });
});



