function setup() {
createCanvas(800, 600);
background(220, 210, 180);
}


function draw() {
  
//orange diamond shape
  fill(197, 97, 50);
  stroke(197, 97, 50);
  beginShape();
  vertex(53, 358);
  vertex(78, 395);
  vertex(46, 429);
  vertex(19, 392);
  endShape(CLOSE);
  
//black square frames
  noFill();
  stroke(20);
  strokeWeight(1.5)
  beginShape();
  vertex(529, 303);
  vertex(488, 334);
  vertex(469, 331);
  vertex(475, 305);
  endShape(CLOSE);
  
  beginShape();
  vertex(467, 301);
  vertex(460, 329);
  vertex(409, 330);
  vertex(410, 305);
  endShape(CLOSE);
  
  beginShape();
  vertex(400, 304);
  vertex(401, 330);
  vertex(349, 331);
  vertex(346, 303);
  endShape(CLOSE);
  
  beginShape();
  vertex(333, 299);
  vertex(342, 331);
  vertex(299, 331);
  vertex(281, 299);
  endShape(CLOSE);
  
  beginShape();
  vertex(270, 297);
  vertex(289, 331);
  vertex(254, 332);
  vertex(219, 299);
  endShape(CLOSE);
  
  beginShape();
  vertex(207, 298);
  vertex(243, 333);
  vertex(208, 337);
  vertex(157, 295);
  endShape(CLOSE);
  
  beginShape();
  vertex(144, 293);
  vertex(197, 337);
  vertex(173, 340);
  vertex(95, 295);
  endShape(CLOSE);
  
  beginShape();
  vertex(80, 295);
  vertex(159, 342);
  vertex(134, 347);
  vertex(37, 295);
  endShape(CLOSE);
  
  beginShape();
  vertex(0, 295);
  vertex(21, 293);
  vertex(129, 350);
  vertex(119, 355);
  vertex(0, 305);
  endShape();
  
  beginShape();
  vertex(0, 313);
  vertex(109, 361);
  vertex(99, 367);
  vertex(0, 329);
  endShape();
  
  beginShape();
  vertex(0, 335);
  vertex(93, 370);
  vertex(87, 378);
  vertex(0, 353);
  endShape();
  
  line(0, 362, 81, 385);
  beginShape();
  curveVertex(83, 385);
  curveVertex(83, 385);
  curveVertex(80, 399);
  curveVertex(103, 423);
  curveVertex(147, 449);
  curveVertex(222, 480);
  curveVertex(222, 480);
  endShape();
  
  line(222, 480, 0, 430);
  
//thick line over last black curved square frame
  strokeWeight(2.5);
  beginShape();
  curveVertex(0, 374);
  curveVertex(0, 374);
  curveVertex(106, 387);
  curveVertex(169, 389);
  curveVertex(169, 389);
  endShape();
  
  
  
//little yellow oval under blue line
  stroke(245, 185, 50);
  fill(245, 185, 50);
  ellipse(611, 493, 40, 7);
  
//big blue curved line
  noFill();
  stroke(0, 60, 100);
  strokeWeight(2.5);
  beginShape();
  curveVertex(411, 299);
  curveVertex(411, 299);
  curveVertex(373, 328);
  curveVertex(355, 352);
  curveVertex(365, 391);
  curveVertex(433, 439);
  curveVertex(557, 483);
  curveVertex(735, 527);
  curveVertex(width, 541);
  curveVertex(width, 541);
  endShape();
  
//big red curved line
  noFill();
  stroke(165, 0, 0);
  strokeWeight(2.5)
  beginShape();
  curveVertex(266, 155);
  curveVertex(266, 152);
  curveVertex(202, 169);
  curveVertex(175, 205);
  curveVertex(215, 247);
  curveVertex(316, 287);
  curveVertex(492, 333);
  curveVertex(width, 403);
  curveVertex(width, 403);
  endShape();
  
//big dark curved line
  noFill();
  stroke(20);
  strokeWeight(2.5);
  beginShape();
  curveVertex(605, 239);
  curveVertex(605, 239);
  curveVertex(507, 193);
  curveVertex(430, 137);
  curveVertex(393, 77);
  curveVertex(387, 35);
  curveVertex(397, 0);
  curveVertex(397, 0);
  endShape(609, 536, );
  
//yellow circles at the bottom
  stroke(245, 185, 50);
  fill(245, 185, 50);
  ellipse(609, height, 143, 32);
  
  stroke(245, 185, 50);
  fill(245, 185, 50);
  ellipse(609, 536, 89, 22);
  
//black and yellow lower shapes
  fill(245, 185, 50);
  beginShape();
  vertex(357, 591);
  vertex(353, height);
  vertex(265, height);
  vertex(263, 581);
  endShape(CLOSE);
  
  stroke(20);
  fill(20);
  beginShape();
  vertex(251, 579);
  vertex(244, height);
  vertex(198, height);
  vertex(194, 575);
  endShape(CLOSE);
  
  stroke(245, 185, 50);
  fill(245, 185, 50);
  beginShape();
  vertex(185, 573);
  vertex(175, height);
  vertex(144, height);
  vertex(136, 566);
  endShape(CLOSE);
  
  stroke(20);
  fill(20);
  beginShape();
  vertex(129, 563);
  vertex(120, 596);
  vertex(103, 591);
  vertex(91, 557);
  endShape(CLOSE);
  
  stroke(245, 185, 50);
  fill(245, 185, 50);
  beginShape();
  vertex(85, 555);
  vertex(71, 585);
  vertex(53, 578);
  vertex(47, 549);
  endShape(CLOSE);
  
  stroke(20);
  fill(20);
  beginShape();
  vertex(41, 547);
  vertex(34, 574);
  vertex(19, 569);
  vertex(16, 543);
  endShape(CLOSE);
  
  stroke(245, 185, 50);
  fill(245, 185, 50);
  beginShape();
  vertex(11, 541);
  vertex(0, 565);
  vertex(0, 536);
  endShape(CLOSE);
  
//upper thick red dash
  stroke(181, 47, 45);
  strokeWeight(10);
  beginShape();
  curveVertex(249, 100);
  curveVertex(249, 100);
  curveVertex(266, 102);
  curveVertex(280, 104);
  curveVertex(280, 104);
  endShape();
  
  beginShape();
  vertex(117, 45);
  vertex(117, 45);
  vertex(91, 33);
  vertex(91, 33);
  endShape();
  
//bottom small lighter blue curve
  noFill();
  stroke(75, 95, 92);
  strokeWeight(2);
  beginShape();
  curveVertex(523, 499);
  curveVertex(523, 499);
  curveVertex(484, 543);
  curveVertex(475, 575);
  curveVertex(475, 599);
  curveVertex(475, 599);
  endShape();

}
