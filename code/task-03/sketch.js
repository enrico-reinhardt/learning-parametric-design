// VARIABLES
const canvasWidth = 400,
    canvasHeight = 400,
    size = 2,
    columns = canvasWidth / size,
    rows = canvasHeight / size

// PRELOAD
function preload() {}

// SETUP
function setup() {
    createCanvas(canvasWidth, canvasHeight)
    angleMode(DEGREES)
}
// DRAW
function draw() {
    background(0)
    // noLoop()

    fill(255)
    noStroke()
    rect(100, 50, 200, 355, 100, 100, 0, 0)
    noFill()
    stroke(0)
    strokeWeight(1)

    for (let x = 0; x < 50; x++) {
        for (let y = 0; y < 50; y++) {
            line(
                x * 8,
                y * 8,
                x * random(8, 7) + random(400, 400),
                y * random(8, 7) + random(400, 400)
            )
        }
    }
    // noLoop()
}
