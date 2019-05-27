
function setup() {
  createCanvas(400, 400);
  
  dot = new circ(width/2,height/2,100);
  

  
  follow = new attractor();
  
}

class circ {
  constructor(x,y,wid) {
    this.x = x;
    this.y = y;
    this.wid = wid;
    
    this.counter = 0;
    
    this.bx = x;
    this.by = y;
    this.bwid = wid;
    
    this.bcounter = this.counter  
    
  }
  
  create() {
    fill(255,0,0);
    
    this.counter += 1;
    
    ellipse(this.x,this.y,this.wid);
    
    if(this.wid >5 ) {
      this.wid -= 20;
      this.create();
    }
    
  }
  
  reset() {
    this.x = this.bx;
    this.y = this.by;
    this.wid = this.bwid;
    
    this.counter = this.bcounter;
    
  }
}

class attractor {
  constructor() {
    this.position = new createVector(width/2, height/2);
  }
  
  update() {
    var mouse = new createVector(mouseX, mouseY);
    
    var dir = mouse.sub(this.position);
    
    this.position.add(dir);
  }
  
  display () {
    fill(255,0,0);
    ellipse(this.position.x,this.position.y,2,2);
  }
  
}

function draw() {
  
  background(255,255,255);
  
  
  dot.create();
  
  
  dot.reset();

  
  follow.update();
  follow.display();
}
