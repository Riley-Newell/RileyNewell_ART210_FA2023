let skull1, skull2, skull3, skull4;
let mic;

function preload() {
  skull1 = loadImage('data/skull1.jpg');
  skull2 = loadImage('data/skull2.jpg');
  skull3 = loadImage('data/skull3.jpg');
  skull4 = loadImage('data/skull4.jpg');
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
    image(skull1, 0, 0, width, height);
  } else if (vol < 0.4) {
    image(skull2, 0, 0, width, height);
  } else if (vol < 0.6) {
    image(skull3, 0, 0, width, height);
  } else {
    image(skull4, 0, 0, width, height);
  }
}
