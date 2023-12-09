let mic;
let skull1;
let skull2;
let skull3;
let skull4;

function preload() {
  skull1 = loadImage('data/skull1.jpg');
}

function setup() {
  createCanvas(1000, 1000);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(skull1);
  let threshold1 = 0.05
  let threshold2 = 0.15
  let threshold3 = 0.20

  // Get the overall volume (between 0 and 1.0)
  let vol = mic.getLevel();
  
   if (vol > threshold1){
     loadImage('data/skull2.jpg');
   } 
   if (vol > threshold2){
     loadImage('data/skull3.jpg');
   }
   if (vol > threshold3){
     loadImage('data/skull4.ipg');
   }
  
  // Graph the overall potential volume, w/ a line at the threshold
  let y = map(vol, 0, 1, height, 0);
  let ythreshold = map(threshold1, 0, 1, height, 0);

  noStroke();
  fill(175);
  rect(0, 0, 20, height);
  // Then draw a rectangle on the graph, sized according to volume
  fill(0);
  rect(0, y, 20, y);
  stroke(0);
  line(0, ythreshold, 19, ythreshold);
}
