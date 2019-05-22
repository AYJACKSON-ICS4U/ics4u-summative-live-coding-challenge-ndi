// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Recursion
// Edited Video: https://www.youtube.com/watch?v=jPsZwrV9ld0

function setup() {
  createCanvas(600, 600);
  circ = new circleOBJ();
}

class circleOBJ{
    constructor(){
      this.x = mouseX;
      this.y = mouseY;
      this.d = 400
      
    }
  move(){
    this.x = mouseX;
    this.y = mouseY;
    this.d = random(200);
  }
  display(){
    ellipse(this.x,this.y,this.d);    
}

  
}

function draw(){
  circ.display();
  circ.move();
  
  
}



