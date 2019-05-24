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
    
    if (width > 300){
      this.w += 10;
      this.h += 10;
      square.display();
    } else if (width < 300){
      this.w -= 10;
      this.h += 10;
      square.display();
    } else if (width < 300){
      this.w -= 10;
      this.h -= 10;
      square.display();
    } else if (width > 300){
      this.w += 10;
      this.h -= 10;
      square.display();
    } else {
      square.update();
    }
  }
  update(){
    let updateCounter = 1;
    
    if (updateCounter === 1){
      this.x = width;
      this.y = 0;
      this.w = -100;
      this.h = 100;
    } else if (updateCounter === 2){
      this.x = width;
      this.y = height;
      this.w = -100;
      this.h = -100;      
    } else if (updateCounter === 3){
      this.x = 0;
      this.y = height;
      this.w = 100;
      this.h = -100;      
    }
    square.run();
    updateCounter++;
  }
}
