let stand;
let jab;
let hook;
let pow;


function preload() {
  bg = loadImage('data/background.jpg');
  stand = loadImage('data/kai_punch1.png');
  jab = loadImage('data/kai_punch2.png');
  hook = loadImage('data/kai_punch3.png');
  pow = loadImage('data/kai_punch4.png');
}

function setup() {
  createCanvas(1100, 800);
  background(bg);
  image(stand, 0, 0);
  
}


function mousePressed(){
  let box = [hook, pow];
  let boxing = random(box);
  let punch = {
    type: random(1) < 0.5 ? 'kai_punch2' : 'kai_punch3'
  };
  if (punch.type === 'kai_punch2'){
    background(bg);
    image(jab,0, 0);
  } else {
    background(bg);
    image(boxing, 0, 0);
  }
}

function mouseReleased(){
  background(bg);
  image(stand, 0, 0);
}
