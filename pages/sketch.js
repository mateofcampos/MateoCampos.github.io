let smash;
let smash1;
let x = -800;
let y = 0;

var Y_AXIS = 1;
var X_AXIS = 2;
var b1, b2, c1, c2;
var speed2 = 1;
var speed = 3;
var whichSmash;
var fr = 25;

function preload() {
  cloud = loadImage('superMarioClouds_1.png')
  smash = loadImage('feheroesroy.png');
  smash1 = loadImage('roy.png');
  floor = loadImage('floor.png')
  rock = loadImage ('rocks.png')
  rock1 = loadImage ('rocks.png')
  rock2 = loadImage ('rocks.png')
  rock3 = loadImage ('rocks.png')
}

function setup() {
  createCanvas(1000, 1000);
  b1 = color(255);
  b2 = color(0);
  c1 = color(117, 209, 255);
  c2 = color(0, 0, 0);

}

function draw() {
  setGradient(0, 0, 1200, 1200, c1, c2, Y_AXIS);
  //background(200);
  if (x <= -800) {
    whichSmash = smash1;
    speed = 3;
  } else if (x >= 1000) {
    whichSmash = smash;
    speed = -3;
  }
  image(cloud, y, 10, cloud.width / 2, cloud.height / 2);
  y = y + speed2;

  image(whichSmash, x, 10, smash.width / 2, smash.height / 2);
  x = x + speed;

  image(floor, 0, 80, floor.width, floor.height);

  image (rock, -100, 700, rock.width/2, rock.height/2);
    image (rock1, 200, 700, rock.width/2, rock.height/2);
      image (rock2, 500, 700, rock.width/2, rock.height/2);
        image (rock3, -100, 700, rock.width/2, rock.height/2);
}

function setGradient(a, b, w, h, c1, c2, axis) {

  noFill();

  if (axis == Y_AXIS) {  // Top to bottom gradient
    for (var i = b; i <= b+h; i++) {
      var inter = map(i, b, b+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(a, i, a+w, i);
    }
  }
  else if (axis == X_AXIS) {  // Left to right gradient
    for (var i = a; i <= a+w; i++) {
      var inter = map(i, a, a+w, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, b, i, b+h);
    }
  }
}
/*function draw() {
    createCanvas(1000, 1000);
    background(83, 140, 232);
    frameRate(fr);
    // Top-left corner of the img is at (0, 0)
    // Width and height are the img's original width and height
    image(img, x, 0);
		x = x + 1;
*/
// If you want to scale the image to 100 x 100 pixels
// image(img, 0, 0, 100, 100);

// If you want to scale image by 50%
// image(img, 10, 10, img.width/2, img.height/2);
