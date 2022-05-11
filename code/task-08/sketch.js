// PRELOAD
function preload() {}

// VARIABLES
const sketchWidth = window.innerWidth;
const sketchHeight = window.innerHeight;
const shapeCount = 175;
const size = 120;
const scaleTreshold = 8;
const scrollSteps = 12000;
let shapes = [];

const scroller = document.createElement('div');
scroller.classList.add('scroller');
document.body.append(scroller);
scroller.style.height = scrollSteps + 'px';

// SETUP
function setup() {
    // Setup Canvas
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.id('p5cnv');
    cnv.position(0, 0, 'fixed');

    // Generate Initial Shapes
    for (let count = 0; count < shapeCount; count++) {
        shapes.push({
            scale: (scaleTreshold / shapeCount) * count,
            rotation: count * 2,
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
    strokeWeight(0.4);
    stroke(0);

    let scrollY = Math.round(window.scrollY);
    let factor = scrollY / 10;

    if (scrollY < 400) {
        fill(0, 0, 0, 255 - scrollY);
        push();
        // translate(-50, -50);
        textSize(18);
        textAlign(CENTER, CENTER);
        text('Scroll down', windowWidth / 2, windowHeight / 2);
        pop();
        noFill();
    }

    translate(windowWidth / 2, windowHeight / 2);
    for (let i = 0; i < shapes.length; i++) {
        push();

        rotate(shapes[i].rotation + scrollY / 900);
        translate(mouseX / 10 - factor, mouseY / 10 - factor);
        // strokeWeight(i * 0.1);

        shapes[i].rotation += 0.0005;

        if (shapes[i].scale < scaleTreshold || shapes[i].scale < 0) {
            shapes[i].scale += 0.05;
        } else if (shapes[i].scale > 0) {
            shapes[i].scale *= -1.005;
            // console.log(shapes[i].scale + 'growing');
        }
        shapes[i].scale = Math.round(shapes[i].scale);
        scale(shapes[i].scale);

        square(size / 2, size / 2, size);
        pop();
    }
}
