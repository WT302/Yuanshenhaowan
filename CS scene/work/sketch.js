// Interactive Scene
// Tony
// Sep, 17, 2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 200, y = 200;
let size = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  rectMode(CORNER);
  createCanvas(100, 100);
  background(200);
  circle(50, 50, 25);
  draw();
}

function draw() {
  background(220);
  fill(255, 0, 0);
  circle(mouseX,mouseY, 50);
  noStroke();
  rect();
}

