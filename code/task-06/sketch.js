// PRELOAD
function preload() {}

// VARIABLES
const sketchWidth = window.innerWidth;
const sketchHeight = window.innerHeight;
const shapeCount = 120;
const size = 120;
const treshold = 50;
let shapes = [];

// SETUP
function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let count = 0; count < shapeCount; count++) {
        shapes.push({
            x: size / 2,
            y: size / 2,
            scale: count * 0.05,
            rotation: count * 0.0001,
        });
    }
    console.log(shapes);
}

// RESIZE
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// DRAW
function draw() {
    background(255, 255, 255);
    noFill();
    stroke(0);
    strokeWeight(0.1);

    translate(windowWidth / 2, windowHeight / 2);
    for (let i = 0; i < shapes.length; i++) {
        push();
        scale(shapes[i].scale);
        rotate(shapes[i].rotation);
        translate(-size, -size);
        square(shapes[i].x, shapes[i].y, size, shapes[i].roundness);
        shapes[i].rotation += i * 0.0001;
        if (shapes < treshold) {
            shapes[i].scale += i * 0.005;
        } else {
            shapes[i].scale -= 0.001;
        }
        // shapes[i].scale -= i * 0.05;
        pop();
        // beginShape();
        // vertex();
        // endShape(CLOSE);
    }
    // console.log(shapes);
}
