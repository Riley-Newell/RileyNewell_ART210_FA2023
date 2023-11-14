let yoff = 0; //1st dimension of Perlin Noise


function setup() {
  createCanvas(1280, 720);
}


function draw() {
  background(0);
  
  fill(255);
  noStroke(); 
  
  let xoff = 0;
  
  for (let x = 0; x <= width; x += 10){
    let y = map(noise(xoff, yoff), 0, 1, 100, 200);
    
    ellipse(x, y, 24);
    
    xoff += 0.05; 
  }
  
  yoff += 0.01;
}
