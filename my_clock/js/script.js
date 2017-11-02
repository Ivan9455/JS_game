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
}
