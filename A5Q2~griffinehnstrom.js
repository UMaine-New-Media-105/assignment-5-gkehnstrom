let bubbles = [];

class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);
  }

  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  update() {
    this.move();
    this.checkEdges();
  }

  show() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
  }

  checkEdges() {
    if (this.x > width || this.x < 0) {
      this.x = width - this.x;
    }
    if (this.y > height || this.y < 0) {
      this.y = height - this.y;
    }
  }
}

function setup() {
  createCanvas(960, 540);
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 50);
    bubbles.push(new Bubble(x, y, size));
  }
}

function draw() {
  background(0);
  for (let bubble of bubbles) {
    bubble.update();
    bubble.show();
  }
}
