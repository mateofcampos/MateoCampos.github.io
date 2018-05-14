
let stars = [];
let star;
let gravity

function setup() {
  createCanvas(500, 500);
  star = loadImage('starshooter.png')
}

function mousePressed() {
  // push an object with the mouse position and random color
  // to the stars array
  stars.push({posX: mouseX, posY: mouseY, color: random(255)})
  console.log(stars);
}

function draw() {
  background(15, 15, 15);

  // draw all stars every draw loop
  for (let i = 0; i < stars.length; i++) {
    fill(stars[i].color);
    image(star, stars[i].posX, stars[i].posY, 100, 100);
    // make them fall by changing their y position every loop
    stars[i].posY += 2;
    stars[i].posX += 2;
  }
}
