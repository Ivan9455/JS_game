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

    ctx.strokeText("1",155,10);
    ctx.strokeText("2",190,50);
    ctx.strokeText("3",190,110);
    ctx.strokeText("4",190,160);
    ctx.strokeText("5",155,195);
    ctx.strokeText("6",100,195);
    ctx.strokeText("7",45,195);
    ctx.strokeText("8",5,160);
    ctx.strokeText("9",5,110);
    ctx.strokeText("10",5,50);
    ctx.strokeText("11",45,10);
    ctx.strokeText("12",95,10);

    ctx.moveTo(100,100);
    clock_s(s);
    ctx.stroke();

    ctx.moveTo(100,100);
    clock_s(m);
    ctx.stroke();

    ctx.moveTo(100,100);
    clock_h(h,m);
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
            ctx.lineTo(0,200-(x-37.5)*100/7.5);
        }
        if(x>52.5&&x<60)
        {
            ctx.lineTo((x-52.5)*100/7.5,0);
        }

    }

    function clock_h(h,x) {
        //x = 0;//minutes
        //h = 3;//hours
        h = (h>=12)?h-12:h;
        if((h>=0&&h<=1)||(h==11))
        {
            if(h==11)
            {
                ctx.lineTo((((h-10.5)*100 +((x/60)*100))/1.5),0);
                //ctx.lineTo(125,125);
            }
            if(h==0)
            {
                ctx.lineTo(100 +(((x/60)*100)/1.5),0);
            }
            if(h==1&&x<=30)
            {
                ctx.lineTo(100 +((h*100 + (x/60)*100)/1.5),0);
            }
            if(h==1&&x>30)
            {
                ctx.lineTo(200,(((x/60)*100)/3));
            }

        }
        if(h>=2&&h<=4)
        {
            if((h>=2&&h<4)||(h==4&&x<=30))
            {
                ctx.lineTo(200,((((h-1.5)*100 ) + (x/60)*100)/1.5));
            }
            if(h==4&&x>30)
            {
                ctx.lineTo(200 - (((x/60)*100)/3),200);
            }
        }
        if(h>=5&&h<=7)
        {
            if((h>=5&&h<7)||(h==7&&x<=30))
            {
                ctx.lineTo(200-((((h-4.5)*100 ) + (x/60)*100)/1.5),200);
            }
            if(h==7&&x>30)
            {
                ctx.lineTo(0,( 200 - ((x/60)*100)/3));
            }
        }
        if(h>=8&&h<=10)
        {
            if((h>=8&&h<10)||(h==10&&x<=30))
            {
                ctx.lineTo(0,( 200 -((((h-7.5)*100 ) + ((x/60)*100))/1.5)));
            }
            if(h==10&&x>30)
            {
                ctx.lineTo((((x/60)*100)/3),0);
            }
        }









    }
}




