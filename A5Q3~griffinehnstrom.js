let bubbles = [];
let fishArr = [];
let boatsArr = [];

class Bubble {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
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
      this.xSpeed *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed *= -1;
    }
  }
}

class Fish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = 1; // 1 for right, -1 for left
    this.speed = random(1, 3);
  }

  move() {
    this.x += this.speed * this.direction;
  }

  update() {
    this.move();
    this.checkEdges();
  }

  show() {
    noStroke();
    fill('yellow');
    triangle(this.x + 10 * this.direction, this.y, this.x + 35 * this.direction, this.y - 20, this.x + 35 * this.direction, this.y + 20);
    ellipse(this.x, this.y, 50, 25);
    fill('black');
    ellipse(this.x - 15 * this.direction, this.y, 5);
  }

  checkEdges() {
    if (this.x > width + 50 && this.direction === 1) {
      this.direction = -1; // change direction to left
    } else if (this.x < -50 && this.direction === -1) {
      this.direction = 1; // change direction to right
    }
  }
}

class Boat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.direction = 1; // 1 for right, -1 for left
    this.speed = random(1, 3);
  }

  move() {
    this.x += this.speed * this.direction;
  }

  update() {
    this.move();
    this.checkEdges();
  }

  show() {
    fill(255, 155, 0);
    stroke(0);
    ellipse(this.x, this.y, 100, 50);
    fill(255);
    stroke(0);
    triangle(this.x, this.y - 50, this.x + 50, this.y, this.x, this.y);
    stroke(0);
    line(this.x, this.y - 50, this.x, this.y);
  }

  checkEdges() {
    if (this.x > width + 50 && this.direction === 1) {
      this.direction = -1; // change direction to left
    } else if (this.x < -50 && this.direction === -1) {
      this.direction = 1; // change direction to right
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

  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(100, height - 100);
    fishArr.push(new Fish(x, y));
  }
  
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(100, height - 100);
    boatsArr.push(new Boat(x, y));
  }
}

function draw() {
  background(115, 147, 179);
  for (let bubble of bubbles) {
    bubble.update();
    bubble.show();
  }

  for (let fish of fishArr) {
    fish.update();
    fish.show();
  }
  
  for (let boat of boatsArr) {
    boat.update();
    boat.show();
  }
}
