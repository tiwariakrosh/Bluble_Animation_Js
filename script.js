
let Canvas = document.getElementById("canvas");
Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;
const ctx = Canvas.getContext("2d");

const color =[
    "black", "blue", "red", "green", "violet", "yellow","salmon","pink"
];

let Mouse = {
    x : 0,
    y : 0
}

function note(e){
    Mouse.x = e.clientX;
    Mouse.y = e.clientY;
}

let circles = [];

function Circle(){
    this.x = random(Canvas.width);
    this.y = random(Canvas.height);
    this.xi = random(5, -5);
    this.yi = random(5, -5);
    this.r = 0;
    this.v = 2;
    this.draw = (i=0) => {
        this.x += this.v*this.xi;
        this.y += this.v*this.yi;
        if(this.x+this.r<0||this.x+this.r>Canvas.width) this.xi *= -1;
        if(this.y+this.r<0||this.y+this.r>Canvas.height) this.yi *= -1;
        if(dist(Mouse.x, Mouse.y, this.x, this.y)<50&&this.r<50){this.r+=5}
        else if(this.r>0){this.r-=1}
        circle(this.x, this.y, color[i], null, this.r);
    }
}

for (let i = 0; i < 300; i++) {
    circles.push(new Circle());
}

function anime(){
    requestAnimationFrame(anime);
    clear();
    Canvas.width = window.innerWidth;
    Canvas.height = window.innerHeight;
    circles.forEach((item, n)=>item.draw(n%9));
}
anime();