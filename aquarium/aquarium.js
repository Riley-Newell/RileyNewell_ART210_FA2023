let bg;
let b, f, k, L, pat, perv, sh, star;
let fish = [];
let fishing;

function preload(){
  bg = loadImage('data/fishBG.jpg');
  b = loadImage('data/fish1.gif');
  f = loadImage('data/fish2.gif');
  k = loadImage('data/fish3.gif');
  L = loadImage('data/fish4.gif');
  pat = loadImage('data/fish5.gif');
  perv = loadImage('data/fish6.gif');
  sh = loadImage('data/fish7.gif');
  star = loadImage('data/fish8.gif'); 
  
  
}


function setup() {
  createCanvas(1200, 1000);
  
  for (let i = 0; i < 20; i++) {
    fish.push(new Jitter());
    
    
  }
}

function draw() {
  background(bg);
  for (let i = 0; i < fish.length; i++) {
    fish[i].move();
    fish[i].display();
  }
} 

class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = 0.5;
  }
  
  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }
  
  display() {
    
  let fish = [b, f, k, L, pat, perv, sh, star];
  let fishing = random(fish);
  
  //the 'fish' array is looping when I use 'fishing' and I need
  //to figure out how to make it not do that without using noLoop
  image(k, this.x, this.y);
  
  }
}
