// Interactive Scene
// Tony
// Sep, 17, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 200, y = 200;
let size = 50;
let currentBack = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  rectMode(CORNER);
  createCanvas(100, 100);
  background(200);
  circle(50, 50, 25);
  draw();
function setup(){
  createCanvas(400,400);
}

 
function draw() {
  background(220);
  fill(255, 0, 0);
  circle(mouseX,mouseY, 50);
  noStroke();
  rect();
  if (currentBack == 0) background(200, 220, 255);
  if (currentBack == 1) background(255, 200, 200);
  if (currentBack == 2) background(200, 255, 200);
  if (currentBack == 3) background(240, 240, 180);
  // draw
  rect(50, 300, 300, 50);
  ellipse(100, 100, 80, 80);
  line(0, 0, 400, 400);
  //protangon
  fill(255, 150, 0);
  ellipse(x, y, size, size);

}

