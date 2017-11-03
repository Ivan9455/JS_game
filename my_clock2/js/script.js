window.onload = function () {
    setInterval(clock,300);

};

function clock() {
    var result = document.getElementById("result");
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    var day = (time.getDate().toString().length == 1) ? "0" + time.getDate() : time.getDate();
    var h = (time.getHours().toString().length == 1) ? "0" + time.getHours() : time.getHours();
    var m = (time.getMinutes().toString().length == 1) ? "0" + time.getMinutes() : time.getMinutes();
    var s = (time.getSeconds().toString().length == 1) ? "0" + time.getSeconds() : time.getSeconds();
    result.innerHTML = day + "." + month + "." + year + "<br>" + h + ":" + m + ":" + s;

    var canvas = document.getElementById("canvasid");
    var ctx = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 200;


    ctx.strokeText("1",145,25);
    ctx.strokeText("2",180,60);
    ctx.strokeText("3",190,110);
    ctx.strokeText("4",180,150);
    ctx.strokeText("5",150,180);
    ctx.strokeText("6",100,195);
    ctx.strokeText("7",50,180);
    ctx.strokeText("8",20,150);
    ctx.strokeText("9",5,110);
    ctx.strokeText("10",15,60);
    ctx.strokeText("11",45,25);
    ctx.strokeText("12",95,10);


    /*
    ctx.moveTo(100,100);
    ctx.lineTo(0,100);
    ctx.moveTo(100,100);
    ctx.lineTo(200,100);
    ctx.moveTo(100,100);
    ctx.lineTo(100,200);
    ctx.moveTo(100,100);
    ctx.lineTo(0,100);
    ctx.moveTo(100,100);
    ctx.lineTo(100,0);
    */
    function inRad(num) {
        return num * Math.PI / 180;
    }
    ctx.translate(100, 100 );
    var timer ={
        h:function (h,m) {
            h = (h<=12)?h:h-12;
            ctx.rotate(inRad((h*30-90)+m*0.5));
            ctx.fillRect(0, 0, 70, 3);
        },
        m:function (h,m) {
            h = (h<=12)?h:h-12;
            ctx.rotate(inRad(    (m*6)-((h*30)+m*0.5)     ));
            ctx.fillRect(0, 0, 80, 2);
        },
        s:function (h,m,s) {
            h = (h<=12)?h:h-12;
            ctx.rotate(inRad(    (s*6 -(m*6))     ));
            ctx.fillRect(0, 0, 90, 1);
        }

    };

    timer.h(h,m);
    timer.m(h,m);
    timer.s(h,m,s);




    ctx.stroke();

}
