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

// VARIABLES
const gap = 32,
    size = 64,
    scale = 1

let windowW = window.innerWidth,
    windowH = window.innerHeight,
    arrayX = [windowW / 2],
    arrayY = [windowH / 2],
    arrayR = [0],
    arrayG = [90],
    arrayB = [70],
    activeMouse = false

// DRAW
function draw() {
    for (let i = 0; i < 1; i++) {
        // import current values from array to variables
        let currentX = arrayX[i],
            currentY = arrayY[i],
            currentR = arrayR[i],
            currentG = arrayG[i],
            currentB = arrayB[i]

        // set position to mouse once
        if (activeMouse) {
            currentY = mouseY
            currentX = mouseX
            activeMouse = false
        }

        // move shape by mousemove and random gap
        arrayX[i] = currentX + random(-1 * scale * gap, scale * gap)
        arrayY[i] = currentY + random(-1 * scale * gap, scale * gap)

        // move shape inside canvas when outside bounding box
        if (currentX < size + gap) {
            arrayX[i] = arrayX[i] + gap
        }
        if (currentX > windowW - size - gap) {
            arrayX[i] = arrayX[i] - gap
        }
        if (currentY < size + gap) {
            arrayY[i] = arrayY[i] + gap
        }
        if (currentY > windowH - gap - size) {
            arrayY[i] = arrayY[i] - gap
        }

        // add random color variation to previous color
        // RED
        arrayR[i] = currentR + Math.round(random(-2, 2))
        if (currentR <= 0) {
            arrayR[i] = currentR + 10
        }
        if (currentR >= 255) {
            arrayR[i] = currentR - 10
        }
        // GREEN
        arrayG[i] = currentG + Math.round(random(-3, 3))
        if (currentG <= 0) {
            arrayG[i] = currentG + 10
        }
        if (currentG >= 255) {
            arrayG[i] = currentG - 10
        }
        // BLUE
        arrayB[i] = currentB + Math.round(random(-2, 2))
        if (currentB <= 0) {
            arrayB[i] = currentB + 10
        }
        if (currentB >= 255) {
            arrayB[i] = currentB - 10
        }

        // DRAW SHAPE
        noStroke()
        fill(currentR, currentG, currentB)
        circle(arrayX[i], arrayY[i], size)
    }
}
