// PRELOAD
function preload() {}

// SETUP
function setup() {
    createCanvas(windowWidth, windowHeight)
    angleMode(DEGREES)
    window.addEventListener('mousemove', () => {
        activeMouse = true
    })
    document.body.style.cursor = 'none'
}

// RESIZE
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

let windowW = window.innerWidth,
    windowH = window.innerHeight,
    sparkle = [
        {
            x: -10,
            y: -10,
        },
    ],
    activeMouse = false

// DRAW
function draw() {
    if (activeMouse) {
        currentY = mouseY
        currentX = mouseX
        activeMouse = false
    }
    // DRAW SHAPE
    noStroke()
    fill(currentR, currentG, currentB)
    circle(arrayX[i], arrayY[i], size)
}
