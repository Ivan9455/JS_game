window.onload = function () {
    setInterval(clock,100);

};

function clock() {
    var result = document.getElementById("result");
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    var day = (time.getDate().toString().length==1)? "0" + time.getDate():time.getDate();
    var h = (time.getHours().toString().length==1)? "0" + time.getHours():time.getHours();
    var m = (time.getMinutes().toString().length==1)? "0" + time.getMinutes():time.getMinutes();
    var s = (time.getSeconds().toString().length==1)? "0" + time.getSeconds():time.getSeconds();
    result.innerHTML = day + "." + month + "." + year +"<br>" +h + ":" + m + ":" + s;

    var canvas = document.getElementById("canvasid");
    var ctx = canvas.getContext("2d");
    canvas.width = 200;
    canvas.height = 200;
    var test  = time.getSeconds() ;
    ctx.moveTo(100,100);
    ctx.stroke();
    clock_s(test);

    ctx.moveTo(100,100);
    clock_s(m);



    ctx.stroke();
    function clock_s(x) {
        if(x<=7.5)
        {
            ctx.lineTo(100+x*100/7.5,0);
        }
        if(x>7.5&&x<22.5)
        {
            ctx.lineTo(200,(x-7.5)*100/7.5);
        }
        if(x>22.5&&x<37.5)
        {
            ctx.lineTo(200-(x-22.5)*100/7.5,200);
        }
        if(x>37.5&&x<52.5)
        {
            ctx.lineTo(0,200-(x-37.5)*100/7.5)
        }
        if(x>52.5&&x<60)
        {
            ctx.lineTo(x*100/7.5,0);
        }

    }
}




