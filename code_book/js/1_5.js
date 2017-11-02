var image = new Image();
image.onload = function () {
    ctx.drawImage(image,10,10,80,80);
    setInterval(move,100);
};
image.src = "https://a.d-cd.net/f01baf8s-100.jpg";
var x = 10;
function move() {
    if(x<200) x+= 5;else x = 10;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(image,x,10,80,80);
}