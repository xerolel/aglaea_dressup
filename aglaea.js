let bgImg;
let arrowImg;
let bodyImg;
let dresses = [];
let hairs = [];
let hats = [];
let shoes = [];

let currentDressIndex;
let currentHairIndex;
let currentHatIndex;
let currentShoeIndex;

// arrow positions
let leftArrowX = 100, rightArrowX = 600, arrowY = 450;

// dialogue
let clickCount = 0;
let dialogue = [
    "No need for tailoring.",
    "The fit on this one... is rather lovely.",
    "What other styles do you have in mind?",
];
let currentDialogue = "";

function preload() {
    bgImg = loadImage("background.png");
    arrowImg = loadImage("arrow.png");
    bodyImg = loadImage("body.png");

    dresses.push(loadImage("dress1.png"));
    dresses.push(loadImage("dress2.png"));
    dresses.push(loadImage("dress3.png"));
    dresses.push(loadImage("dress4.png"));

    hairs.push(loadImage("hair1.png"));
    hairs.push(loadImage("hair2.png"));
    hairs.push(loadImage("hair3.png"));

    shoes.push(loadImage("shoe1.png"));
    shoes.push(loadImage("shoe2.png"));
    shoes.push(loadImage("shoe3.png"));
    shoes.push(loadImage("shoe4.png"));

    hats.push(loadImage("hat1.png"));
    hats.push(loadImage("hat2.png"));
    hats.push(loadImage("hat3.png"));
}

function setup() {
    createCanvas(700, 900);
    ImageMode(CENTER);
}

function draw() {
    background(bgImg);
    drawCharacter();
    drawArrows();
    drawDialogue();
}

function drawCharacter() {
    image(bodyImg, width/2, height/2);
    image(dresses[currentDressIndex], width/2, height/2);
    image(hairs[currentHairIndex], width/2, height/2);
    image(hats[currentHatIndex], width/2, height/2);
    image(shoes[currentShoeIndex], width/2, height/2);
}

function drawArrows() {
    image(arrowImg, leftArrowX, arrowY); // left
    push();
    translate(rightArrowX, arrowY);
    scale(-1, 1); // flip for right arrow
    image(arrowImg, 0, 0);
    pop();
}

function drawDialogue() {
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text(currentDialogue, width/2, 800);
}

function mousePressed() {
    // left arrow click
    if (dis(mouseX, mouseY, leftArrowX, arrowY) < 50) {
        cycleLeft();
    }
    // right arrow click
    if (dis(mouseX, mouseY, rightArrowX, arrowY) < 50) {
        cycleRight();
    }
}

function cycleLeft() {
    currentDressIndex = (currentDressIndex - 1 + dresses.length) % dresses.length;
    updateDialogue();
}

function cycleRight() {
    currentDressIndex = (currentDressIndex + 1) % dresses.length;
    updateDialogue();
}