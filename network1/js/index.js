$(function(){
    //调用底部波浪动画
    canFn();
    // 点击重试
    $(".redo").on("click",function(){
        //alert('重试')
		xl.refresh();
    })
    $(".quit").on("click",function(){
        //alert('退出')
		xl.quit();
    })
    $(".smallerize").on("click",function(){
        //alert('最小化')
		xl.minimize();
    })
})