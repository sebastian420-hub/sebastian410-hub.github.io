let ob = 0;
let od = 0;
let threeDbox;
let a = 0;
let boolean;
let clicked;

let snowflakes = [];
let img;


let check;

let mouseXX = -200;
let mouseYY = 0;
let mouseXXX = 200;

let xx = -200;
let yy = 200;
let ww = 10;
let hh = 300;
let dd = 100;



let Dxx;
let Dyy;

arrayy = [];



//may not work on safari
// Declare a "SerialPort" object
var serial;

// fill in the name of your serial port here:
//copy this from the serial control app
var portName = "/dev/tty.usbmodem11301";

//this array will hold transmitted data
var inMessage = [0, 0];


function preload(){
    img = loadImage("snow.png");
  img2 = loadImage("back.jpeg");
}

function setup() {
    createCanvas(windowWidth, windowHeight,WEBGL);
   threeDbox = new threedbox(ww,hh,dd,xx,yy);
  
  
  for (let i = 0; i < 20; i++) {
    snowflakes.push(new snowFlake());
  
  // make an instance of the SerialPort object
  serial = new p5.SerialPort();

  // Get a list the ports available
  // You should have a callback defined to see the results. See gotList, below:
  serial.list();

  // Assuming our Arduino is connected,  open the connection to it
  serial.open(portName);

  // When you get a list of serial ports that are available
  serial.on('list', gotList);

  // When you some data from the serial port
  serial.on('data', gotData);
}}


// Got the list of ports
function gotList(thelist) {
  // theList is an array of their names
  for (var i = 0; i < thelist.length; i++) {
    // Display in the console
    console.log(i + " " + thelist[i]);
  }
}

// Called when there is data available from the serial port
function gotData() {
  var currentString = serial.readLine();  // read the incoming data
  trim(currentString);                    // trim off trailing whitespace
  if (!currentString) return;             // if the incoming string is empty, do no more
  console.log(currentString);
      inMessage = split(currentString, '&');  
  

}

function draw() {
  background(255,255,255);
   threeDbox.show();
  
  // image(img2,-350,-40,700,600)
  
  for (let i = 0; i < snowflakes.length; i++) {
    snowflakes[i].update();
    snowflakes[i].display();

   if (boolean) {
     ob = map(inMessage[0],0,50,0,4);
     od = map(mouseY,0,100,0,5);
     
  } 
   if (!clicked){
     threeDbox.updatePosition(mouseX,mouseY, mouseY);
     
 }
  
 }
for (let i = 0; i < snowflakes.length; i++) {
  threeDbox.updateXandY(mouseX,mouseY);}


}
class threedbox {
  constructor(w,h,d,x,y){
    this.x = x;
    this.y = y;
    this.d = d;
    this.w = w;
    this.h = h;
}
  
updateXandY(x,y){
      Dxx = mouseX - this.x;
      Dyy = mouseY - this.y;
      xx = mouseX + Dxx;
      yy = mouseY + Dyy;
  
  this.x = x;
  this.y = y;
}

updatePosition(w, h, d){
  this.w = w;
  this.h = h;
  this.d = d;
}

show(){
    push();
  normalMaterial();
  translate(this.x,this.y);
  rotateX(od);
  rotateY(ob);
  rotateZ(a);
  box(this.w,this.h,this.d);
  
  pop();
    
   
}}

class snowFlake {
  constructor() {
    this.x = random(-width); 
    this.y = -350;             
    this.speed = random(1, 5); 
    
    
  }

  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = -350;
      this.x = random(width);
    }
    }
  display() {
    image(img,this.x,this.y,50,40);
  }
}
function mousePressed(){
  serial.write("1");
}
function mouseReleased(){
  serial.write("0");
}

function keyPressed() {

    
  if (keyCode === 187){
     clicked = !clicked;
    console.log(clicked);
}
  if (keyCode === 75) {
   boolean = !boolean;
    console.log(boolean);
    }
}