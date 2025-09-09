let bgImg, arrowImg, bodyImg;
let dresses = [], hairs = [], hats = [], shoes = [];
let clickCount = 0;

// default selection
let currentShoeIndex = 0;
let currentHatIndex = 0;
let currentHairIndex = 0;
let currentDressIndex = 0;


//canvas size 
const canvasWidth = 700;
const canvasHeight = 900;

// arrow size
const arrowSize = 100;

// arrow positions for each category 
let arrowPositions = {
    dress: { y: 350 },
    hair: { y: 180 },
    hat: { y: 100 },
    shoe: { y: 700 },
};

function preload() {
    function loadSafe(url, label) {
        return loadImage(url,
            () => console.log (`${label} loaded`),
            () => console.error(`${label} failed to load`)
        );
}
// background, arrows, and body
bgImg = loadSafe("background.png", "Background");
arrowImg = loadSafe("arrow.png", "Arrow");
bodyImg = loadSafe("body.png", "Body");

// dresses
for (let i = 1; i <= 4; i++) dresses.push(loadSafe(`dress${i}.png`, `Dress${i}`));

// hair 
for (let i = 1; i <= 3; i++) hairs.push(loadSafe(`hair${i}.png`, `Hair${i}`));

// hats 
for (let i = 1; i <= 3; i++) hats.push(loadSafe(`hat${i}.png`, `Hair${i}`)); 

// shoes
for (let i = 1; i <= 4; i++) shoes.push(loadSafe(`shoe${i}.png`, `Shoe${i}`)); 
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    imageMode(CENTER);
    textAlign(CENTER);
    textSize(20);
    fill(0);

    for(let key in arrowPositions) {
        arrowPositions[key].leftX = 100;
        arrowPositions[key].rightX = 600;
    }
}

function draw() {

    // scaling bg
    drawScaled(bgImg);

    // chara layers
    drawCharacter();
    
    // draw arrows
    drawAllArrows();
     
    // draw dialogue
    drawWatermark(); // watermark
}

// watermark
function drawWatermark() {
    push();
        fill(0,0,0, 100); // transparent black
        textSize(16);
        textAlign(CENTER, CENTER);
        text("made w/ love by nikki !", canvasWidth / 2, canvasHeight / 2);
        pop();
}

function drawCharacter() {
    drawScaled(bodyImg);
    drawScaled(shoes[currentShoeIndex]);
    drawScaled(dresses[currentDressIndex]);
    drawScaled(hairs[currentHairIndex]);
    drawScaled(hats[currentHatIndex]);
   
}

function drawScaled(img) {
    if (!img) return; // skip if missing
    // scale to fit in canvas
    const scaleFactor = Math.min(canvasWidth / img.width,  canvasHeight / img.height);
    image(img, canvasWidth / 2, canvasHeight / 2, img.width * scaleFactor, img.height * scaleFactor);
}

//arrows
function drawAllArrows() {
    if (!arrowImg) return; // skip if missing item
    for (let key in arrowPositions) {
        let pos = arrowPositions[key];

        // left arrow
        image(arrowImg, pos.leftX, pos.y, arrowSize, arrowSize);

        // right arrow (flipped)
        push();
        translate(pos.rightX, pos.y);
        scale(-1, 1);
        image(arrowImg, 0, 0, arrowSize, arrowSize);
        pop();
    }
}


// mouse 
function mousePressed() {
    for (let key in arrowPositions) {
        let pos = arrowPositions[key];

        // left arrow
        if (dist(mouseX, mouseY, pos.leftX, pos.y) < arrowSize / 2) cycleCategory(key, -1);

        // right arrow 
        if (dist(mouseX, mouseY, pos.rightX, pos.y) < arrowSize / 2) cycleCategory(key, 1);

        

    }
}

function cycleCategory(category, direction) {
    if (category === "dress") currentDressIndex = (currentDressIndex + direction + dresses.length) % dresses.length;
    else if (category === "hair") currentHairIndex = ( currentHairIndex + direction + hairs.length) % hairs.length;
    else if (category === "hat") currentHatIndex = (currentHatIndex + direction + hats.length) % hats.length;
    else if (category === "shoe") currentShoeIndex = (currentShoeIndex + direction + shoes.length) % shoes.length;
}
















// for loops, 
// do this thing over and over until i tell you to stop

// for (let i = 1; i<= 4; i++) {
// dresses.push(loadSafe(`dress${i}.png`, `Dress${i}`));
// }

// let i = 1
// imagine you have a little counter in your hand
// at the start, it's set to 1

// i <= 4 
// this is the rule that decides whether we keep looping
// it says "as long as the counter is less than or equal to 4, keep going"
// once the counter becomes 5, the rule is broken and the loop stops

// i++ 
// after each round, we add 1 to the counter
// ++ is just programmaer shorthand for "add one"
// i++ = i = i + 1
// if i was 1, it becomes 2. then 3. then 4

// {...} 
// whatever is in { } gets run once per counter number
// for the dress up game that would be loading a dress picture

// so if we play it out, for example
// 1. counter is 1 -> load dress1.png
// 2. counter is 2 -> load dress2.png
// 3. counter is 3 -> load dress3.png
// 4. counter is 4 -> load dress4.png
// 5. counter is 5 -> stop (because 5 is not less than 4)

// two plus signs ++ 
// ++ stuck together means "bump the counter up by one"

// laymans terms for for loops
// imagine youre filling cupcake trays.
// start at cupcake 1.
// keep going until you reach cupcake 4 
// after each cupcake, move to the next one
// you frost cupcake 1, 2, 3, 4, and then u stop

