function setup() {
  createCanvas(600, 600);
  square = new Square(0, 0, 100, 100);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  square.run();
  noLoop();
}

class Square {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  run(){
    square.display();
  }
  display(){
    rect(this.x, this.y, this.w, this.h)
    
    if (this.w < 300){
      this.w += 10;
      this.h += 10;
      square.display();
    } else {
      
      fill(255);
      text('REACHED', 100, 400);

      square.update();
    }
  }
  update(){
    let updateCounter = 1;
    
    if (updateCounter === 1){
      
    } else if (updateCounter === 2){
      
    } else if (updateCounter === 3){
      
    }
    
    updateCounter++;
  }
}
