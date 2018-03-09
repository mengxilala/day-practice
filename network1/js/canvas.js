
!function () {
    window.requestAnimFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };

    var CanFn = function () {
        var canvas = document.querySelector("#canvas"),
            ctx = canvas.getContext('2d'),
            step = 0,
            lines = ["rgba(50,135,251, 0.2)", "rgba(157,192,249, 0.2)", "rgba(0,168,255, 0.2)"]; // 绘制三个矩形

        onResize();
        onresize = onResize;
        loop();

        function loop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            step++;

            // 遍历3个不同颜色的矩形
            for (var j = lines.length - 1; j >= 0; j--) {
                ctx.fillStyle = lines[j];
                var angle = (step + j * 45) * Math.PI / 180;
                var deltaHeight = Math.sin(angle) * 30;
                var deltaHeightRight = Math.cos(angle) * 30;
                ctx.beginPath();
                ctx.moveTo(0, canvas.height / 2 + deltaHeight);
                ctx.bezierCurveTo(canvas.width / 2, canvas.height / 2 + deltaHeight - 50, canvas.width / 2, canvas.height / 2 + deltaHeightRight - 50, canvas.width, canvas.height / 2 + deltaHeightRight);
                ctx.lineTo(canvas.width, canvas.height);
                ctx.lineTo(0, canvas.height);
                ctx.lineTo(0, canvas.height / 2 + deltaHeight);
                ctx.closePath();
                ctx.fill();
            }
            requestAnimFrame(loop);
        }

        function onResize() {
            var winW = document.body.offsetWidth;
            canvas.width = winW;
            canvas.height = 139;
        }
    }

    window.canFn = CanFn;
}();
