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
    // noLoop()
    noStroke()

    let ind = 1
    setInterval(() => {
        if (ind < 15) {
            ind = ind + 1
        } else {
            ind = 1
        }
        // console.log(ind)
    }, 5000)

    for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
            let randomX = random(0, 80) / 1.5
            let randomY = random(0, 150) * 2
            if (randomY <= x / 10) {
                fill('rgba(255, 255, 255, .4)')
            }
            if (randomX >= y * sin(32)) {
                fill('rgba(0,0,0, 0.3)')
            }
            if (randomX >= x * 0.5) {
                fill('rgba(0,0,0, 0.1)')
            }
            square(x * size, y * size, size)
        }
    }
}
