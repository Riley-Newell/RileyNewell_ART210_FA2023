let img1, img2, img3, img4;
let mic;

function preload() {
  img1 = loadImage('data/skull1.jpg');
  img2 = loadImage('data/skull2.jpg');
  img3 = loadImage('data/skull3.jpg');
  img4 = loadImage('data/skull4.jpg');
}

function setup() {
  createCanvas(1000, 1000);

  // Create an Audio input
  mic = new p5.AudioIn();
  mic.start();
  
  mic.amp(5);
}

function draw() {
  background(255);

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();

  // Display images based on the volume
  if (vol < 0.2) {
    image(img1, 0, 0, width, height);
  } else if (vol < 0.4) {
    image(img2, 0, 0, width, height);
  } else if (vol < 0.6) {
    image(img3, 0, 0, width, height);
  } else {
    image(img4, 0, 0, width, height);
  }
}
