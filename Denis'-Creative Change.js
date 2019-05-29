function setup() {
  createCanvas(600, 600);
  square1 = new Square(0, 0, 100, 100, 0);
}

function draw() {
  background(0);
  stroke(random(255), random(255), random(255));
  noFill();
  square1.display();
  noLoop();
}

class Square {
  constructor(x, y, w, h, u){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.u = 0;
  }
  display(){
    
    rect(this.x, this.y, this.w, this.h);
    console.log(this.u);
    if (this.w < 300 && this.u === 0){
      this.w += 10;
      this.h += 10;
      square1.display();
    } else if (this.w > -300 && this.u === 1){
      this.w -= 10;
      this.h += 10;
      square1.display();
    } else if (this.w > -300 && this.u === 2){
      this.w -= 10;
      this.h -= 10;
      square1.display();
    } else if (this.w < 300 && this.u === 3){
      this.w += 10;
      this.h -= 10;
      square1.display();
    } else {
      console.log("UPDATING");
      if (this.u < 9){
        square1.update(this.u);
      }
    }
  }
  update(updateCounter){
    
    if (updateCounter === 0){
      stroke(random(255), random(255), random(255));
      this.x = width;
      this.y = 0;
      this.w = -100;
      this.h = 100;
    } else if (updateCounter === 1){
      stroke(random(255), random(255), random(255));
      this.x = width;
      this.y = height;
      this.w = -100;
      this.h = -100;      
    } else if (updateCounter === 2){
      stroke(random(255), random(255), random(255));
      this.x = 0;
      this.y = height;
      this.w = 100;
      this.h = -100;      
    }
    this.u += 1;
    square1.display();
  }
}
