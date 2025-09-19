// Interactive Scene
// Tony
// Sep, 17, 2025
//

let x = 200, y = 200;// position
let size = 50;    //protangonist Size
let currentBack = 0; // backgroud State

function setup(){
  createCanvas(windowWidth,windowHeight);
}
 
function draw() {
   // backgroud color change
  if (currentBack == 0) background(200, 220, 255);
  if (currentBack == 1) background(255, 255, 150);
  if (currentBack == 2) background(200, 255, 200);
  if (currentBack == 3) background(240, 240, 180);
  // Scene with 3 primitives
  rect(50, 300, 300, 50);
  ellipse(100, 100, 80, 80);
  line(0, 0, 400, 400);
  //protangonist
  fill(255, 150, 0);
  ellipse(x, y, size, size);
  //My name
  fill(0);
  textSize(16);
  text("By Tony", 10, heght - 10);
}

