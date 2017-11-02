window.onload = function () {
    setInterval(clock,100);
}

function clock() {
    var result = document.getElementById("result");
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth();
    var day = time.getDate();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    result.innerHTML = day + "." + month + "." + year +"<br>" +h + ":" + m + ":" + s;

}