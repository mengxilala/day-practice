$(function () {
    // 点击重试
    $(".redo").on("click", function () {
        console.log('点击重试');
        xl.refresh();
    })
    $(".quit").on("click", function () {
        console.log('点击退出');
        xl.quit();
    })
    $(".smallerize").on("click", function () {
        console.log('点击缩小');
        xl.minimize();
    })
})