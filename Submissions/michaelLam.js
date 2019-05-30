// Michael Lam
// Coding Challenge: Recursion

// Setting up program
function setup() {
  createCanvas(400, 400);
}

// Continuously runs program
function draw() {
  background(51);
  
  drawCircle(width/2, height/2, 300);
}

// Recursively draws circles
function drawCircle(x, y, d) {
  stroke(255);
  noFill();
  ellipse(x, y, d);

  if (d > 2) {
    let newD = d / 2.137;
    drawCircle(x + newD, y, newD);
    drawCircle(x - newD, y, newD);
    drawCircle(x, y + newD, newD);
    drawCircle(x, y - newD, newD);
  }
}
