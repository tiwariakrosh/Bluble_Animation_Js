random = (sus, jos = 0) => Math.floor(Math.random()*(sus-jos)+jos);
circle = (x, y, fill = "blue", str = "blue", r = 5) => {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI);
    if(fill != null){ ctx.fillStyle = fill; ctx.fill() }
    if(str != null){ ctx.strokeStyle = str; ctx.stroke() }
}
clear = ()=>{
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}
dist = (x1, y1, x2, y2) => Math.sqrt((x2-x1)*(x2-x1)+(y2-y1)*(y2-y1)); 