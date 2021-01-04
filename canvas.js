let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext("2d");

let mouse = {
  x: null,
  y: null,
  radius: (canvas.height / 80) * (canvas.width / 80),
};

function Circle(x, y, directionX, directionY, radius, color, shadow) {
  this.x = x;
  this.y = y;
  this.directionX = directionX;
  this.directionY = directionY;
  this.radius = radius;
  this.color = color;
  this.shadow = shadow;
  this.draw = () => {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.shadowColor = this.shadow;
    c.fill();
  };
  this.update = () => {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.directionX = -this.directionX;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.directionY = -this.directionY;
    }
    // move circle
    this.x += this.directionX;
    this.y += this.directionY;
    
    // draw circle
    this.draw();
  };
}

function connect() {
  for (let i = 0; i < circleArray.length; i++) {
    for (let a = i; a < circleArray.length; a++) {
      let distance =
        (circleArray[i].x - circleArray[a].x) *
          (circleArray[i].x - circleArray[a].x) +
        (circleArray[i].y - circleArray[a].y) *
          (circleArray[i].y - circleArray[a].y);
      if (distance < (canvas.width / 8) * (canvas.height / 8)) {
        c.strokeStyle = "#30BF97";
        c.shadowColor = "#30BF97";
        c.lineWidth = 0.4;
        c.beginPath();
        c.moveTo(circleArray[i].x, circleArray[i].y);
        c.lineTo(circleArray[a].x, circleArray[a].y);
        c.stroke();
      }
    }
  }
}

let circleArray = [];

fillCircle = () => {
  circleArray = [];
  let numberOfCircle = (canvas.height * canvas.width) / 7000;
  for (let i = 0; i < numberOfCircle; i++) {
    let radius = Math.random() * 2.5 + 1;
    let x = Math.random() * (innerWidth - radius * 2 - radius * 2) + radius * 2;
    let y =
      Math.random() * (innerHeight - radius * 2 - radius * 2) + radius * 2;
    let dx = (Math.random() - 0.5) * 5;
    let dy = (Math.random() - 0.5) * 5;
    let color = "aliceblue";
    let shadow = "#30BF97";
    circleArray.push(new Circle(x, y, dx, dy, radius, color, shadow));
  }
};

fillCircle();
console.log(circleArray);

animate = () => {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);
  
  for (let circle of circleArray) {
    circle.update();
  }
  connect();
};

animate();
