let alhaithamSpin = [];

let alPlush;
let alImg;
let bg;

function preload() {
  alPlush = loadImage('data/plush.png');
  alImg = loadImage('data/alhaitham.png');
  bg = loadImage('data/sumeru.jpg');
  
}


function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(bg);
  for (let alSpin of alhaithamSpin) {
    alSpin.angle += 0.02;
    drawAlhaitham(alSpin);
  }
}

function mousePressed() {
  let alSpin = {
     x: mouseX,
     y: mouseY,
     size: random(150, 300),
     type: random(1) < 0.5 ? 'plush' : 'alhaitham',
     angle: 0
  };
  alhaithamSpin.push(alSpin);
}

function drawAlhaitham(alSpin){
  push();
  translate(alSpin.x, alSpin.y);
  rotate(alSpin.angle);
  imageMode(CENTER);
  if (alSpin.type === 'plush'){
    image(alPlush, 0, 0, alSpin.size, alSpin.size);
  } else {
  image(alImg, 0, 0, alSpin.size, alSpin.size);
  }
  pop();
}
