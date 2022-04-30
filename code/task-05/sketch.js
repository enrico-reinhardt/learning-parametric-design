// PRELOAD
function preload() {}

// VARIABLES
const sketchWidth = 400
const sketchHeight = 400
const amplitude = 30
const offset = 40

// SETUP
function setup() {
    createCanvas(sketchWidth, sketchHeight)
    angleMode(DEGREES)
}

// DRAW
function draw() {
    background(230, 200, 200)
    stroke(0)

    for (let x = 0; x < sketchWidth; x++) {
        line(
            x,
            -sin(((2 * (Math.PI * offset)) / sketchWidth) * x) * amplitude +
                sketchHeight / 2,
            x,
            sin(((2 * (Math.PI * offset)) / sketchWidth) * x) * amplitude +
                sketchHeight / 5
        )
    }
    strokeWeight(1)
    // for (let y = 0; y < rows; y++) {
    //     let scale = sin()
    //     let w = scale * circle(sketchWidth / 2, y, w, h)
    // }
}
