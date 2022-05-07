// PRELOAD
function preload() {}

// VARIABLES
const sketchWidth = window.innerWidth;
const sketchHeight = window.innerHeight;
const shapeCount = 400;
const size = 120;
const scaleTreshold = 10;
let shapes = [];

const scroller = document.createElement('div');
scroller.classList.add('scroller');
document.body.append(scroller);
scroller.style.height = '10000px';

// SETUP
function setup() {
    // Setup Canvas
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.id('p5cnv');
    cnv.position(0, 0, 'fixed');

    // Generate Initial Shapes
    for (let count = 0; count < shapeCount; count++) {
        shapes.push({
            x: size / 2,
            y: size / 2,
            scale: (scaleTreshold / shapeCount) * count,
            rotation: count * 45,
        });
    }
}

// RESIZE
function windowResized() {
    // push();
    resizeCanvas(windowWidth, windowHeight);
    // pop();
}

// DRAW
function draw() {
    // noLoop();
    background(255, 255, 255);
    noFill();
    stroke(0);
    strokeWeight(0.5);

    let scrollY = Math.round(window.scrollY);
    let factor = scrollY / 10;

    translate(windowWidth / 2, windowHeight / 2);
    for (let i = 0; i < shapes.length; i++) {
        push();

        rotate(shapes[i].rotation);
        translate(mouseX / 10 - factor, mouseY / 10 - factor);
        // strokeWeight(i * 0.1);

        shapes[i].rotation += 0.001;

        if (shapes[i].scale < scaleTreshold || shapes[i].scale < 0) {
            shapes[i].scale += 0.05;
        } else if (shapes[i].scale > 0) {
            shapes[i].scale *= -1.005;
            // console.log(shapes[i].scale + 'growing');
        }
        shapes[i].scale = Math.round(shapes[i].scale);
        scale(shapes[i].scale);

        square(shapes[i].x, shapes[i].y, size);
        pop();
    }
}
