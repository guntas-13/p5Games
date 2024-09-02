let x = 200;
let y = 200;
let speedX = 0.5;
let speedY = 1.5;
let radius = 50;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200);
  if (mouseIsPressed) fill(random(255), random(255), random(255));
  ellipse(x, y, 2 * radius, 2 * radius);
  x += speedX;
  y += speedY;
  if (x + radius > width || x - radius < 0) speedX *= -1;
  if (y + radius > height || y - radius < 0) speedY *= -1;
}
