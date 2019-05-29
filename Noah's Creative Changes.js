function setup() {
  createCanvas(800, 800);
  
  dot = new circ(0,0,100); 
  dot1 = new circ(700,400,100);
  dot2 = new circ(300,650,100);
}

class circ {
  constructor(x,y,wid) {
    this.x = x;
    this.y = y;
    this.wid = wid;
    
    this.bx = x;
    this.by = y;
    this.bwid = wid;
    
    this.position = new createVector(width/2, height/2);
  }
  
  update() {
    var mouse = new createVector(mouseX, mouseY);
    var dir = mouse.sub(this.position); 
    this.position.add(dir);
  }
  
  create() {
    fill(50,255,100);
    
    if(this.wid  ) {
      this.x += (this.position.x-this.x)/5;
      this.y += (this.position.y-this.y)/5;
      
      ellipse(this.x,this.y,this.wid);
      
      this.wid -= 5;
      this.create();
    }
  }
  
  reset() {
    this.x = this.bx;
    this.y = this.by;
    this.wid = this.bwid;
  }
}

function draw() {  
  background(255,255,255);

  dot.update();
  dot.create();
  dot.reset();
  
  dot1.update();
  dot1.create();
  dot1.reset();
  
  dot2.update();
  dot2.create();
  dot2.reset();
}
