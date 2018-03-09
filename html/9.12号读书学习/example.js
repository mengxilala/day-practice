


window.onload = function () {
    // document.getElementById("myElement").addEventListener("click", function () {
    //     console.log('我是div');
    // })

    document.getElementById("myElement").onclick = function () {    //两种方法都可以
        console.log('我是div');
    }

    // var height="about 5 \"10\" tall";
    // alert(height);
    var a = 1;
    var b = 1;
    if (a = b) {
        alert('这是复制了');
    }
}
