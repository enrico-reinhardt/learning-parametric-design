// PRELOAD
function preload() {}

// VARIABLES
const canvasWidth = 400,
    canvasHeight = 400,
    size = 2,
    columns = canvasWidth / size,
    rows = canvasHeight / size

// SETUP
function setup() {
    createCanvas(canvasWidth, canvasHeight)
    angleMode(DEGREES)
}
// DRAW
function draw() {
    noStroke()
    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            let randomX = random(0, 80) / 1.5
            let randomY = random(0, 150) * 2
            if (randomY <= x / 10) {
                fill(255, 255, 255, 102)
            } else if (randomX >= y * sin(32)) {
                fill(0, 0, 0, 75)
            } else if (randomX >= x * 0.5) {
                fill(0, 0, 0, 25)
            }
            square(x * size, y * size, size)
        }
    }
}
