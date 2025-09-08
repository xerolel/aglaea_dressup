let bgImg;

function preload() {
  bgImg = loadImage("background.png");
}

function setup() {
  createCanvas(700, 900);
  imageMode(CENTER);
}

function draw() {
  if (bgImg) {
    image(bgImg, width/2, height/2, 700, 900); // scale to canvas
  }
}
