// click the mouse to change the img and press K to animate/stop animation


let img;
let img2;
let img3;
let tintAmount = 255;
let trueOrFalse = false;
let r = 0;
let g = 0;
let b = 0;
let texONE;
let array = [];
let s = 40;
let sTwo = 40;
let boolean = true;
let t = "After you graduated with student loans, you applied for the life insurance and fake your own death so that you can live your life with another identity without worrying about the debt"


function preload() {
  img = loadImage("biden.jpg");
  img2 = loadImage("meme.webp");

}

function setup() {
  createCanvas(800, 800);
  
  for (i=0;i<4;i++){
    array[i] = new textOne(40*i*10,512);
}

}



function draw() {
  background(220);
  
 if(boolean){r = map(mouseX,0,width,0,255,1);g = map(mouseX,0,width,100,255,1);b = random(0,255)}
  

 push(); 
 image(img2, 0,0,640,400);
  
  
  if (trueOrFalse){
   image(img2, 0,0,640,400);
    
    for (i=0;i<4;i++){
      array[i].show();
      array[i].move();
      }
     push();

line(205,197,200,197);
line(200,197,153,180);
    
line(258,184,293,175);
    
line(347,161,351,159);
line(351,159,321,140);
pop();
    
push();
fill(r,g,b);
    push();
translate(width / 2, height / 2);
rotate(PI/1.1);
rect(-16, 230, 55, 32);
  pop();
  
    push();
translate(width / 2, height / 2);
rotate(PI/1.1);
rect(75, 234, 55, 32);
    pop()
    pop()
    
    

}
 else {
   image(img, 0,0,640,500);
   textSize(19);
   textAlign(LEFT);
   textStyle(BOLDITALIC);
   text(t,10,530,600,100);
 }  

//   let mouseXCoord = mouseX;
//   let mouseYCoord = mouseY;

//   // Log the x and y coordinates in the console
//   console.log("X Coordinate: " + mouseXCoord);
//   console.log("Y Coordinate: " + mouseYCoord);
}


class textOne{
  constructor(x,y,s){
    this.x = x;
    this.y = y;
    this.s = s;
}
  
  show(){
  fill(this.red,this.green,this.blue);
  stroke(0,0,0);
  strokeWeight(0.5)
  textSize(40);
  
    
text('"Think about it"',this.x,this.y);
  }
  move(){
  
      if (boolean){
      this.x ++;
        if (this.x > width + (40*i*10)){
        this.x = -(40*i*10);
    }
      }
  }




    
}

function mousePressed(){trueOrFalse = !trueOrFalse;}
function keyPressed() {
  if (keyCode === 75) {
    boolean = !boolean;
    console.log(boolean);
    } }

console.log();


