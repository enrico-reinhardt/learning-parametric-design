// PRELOAD ASSETS
// LOAD ASSETS > WHEN LOADED RUN SETUP
function preload() {}

// SETUP > ONCE
function setup() {
    createCanvas(400, 400)
}

// DRAW > LOOP
function draw() {
    background(220, 220, 255)

    for (let i = 0; i < 50; i++) {
        fill(i * 15, i * 5, i * 5, i * 0.2)
        circle(350, 20, i * 10)
    }

    for (let i = 1; i < 80; i++) {
        fill(i * 5 + 150, 128, i * 5, i * 0.25)
        rect(i * 0.5 + 40, i + 40, i * 2, i * 4)
    }

    fill(0, 0)
    for (let i = 1; i < 250; i++) {
        fill(i * 2 + 150, 128, i * 1, i * 0.25)
        rect(i * -2 + 450, i + 180, i * -2, i * 3)
    }
    fill(0, 0)

    stroke(0, 0)
    for (let i = 0; i < 22; i++) {
        strokeWeight(i * 0.25)
        stroke(i * 5 + 40, i * 0.2, 50 + i * 1.2, i * 20)
        line(i * 2 + 400, i * -7.5 + 200, 120, 290)
    }
    strokeWeight(0)

    stroke(0, 0)
    strokeWeight(2.25)
    for (let i = 0; i < 200; i++) {
        stroke(i * 4, 0, 50 + i * 3 + 50)
        line((i / 2) * 0.6 + 62, (i / 2) * 5 + 200, 280, 40)
    }
    strokeWeight(0)

    stroke(0, 0, 50)
    strokeWeight(2)
    line(38, 0, 85, 400)
    line(0, 296, 400, 200)
    line(195, 400, 290, 0)
    line(60, 200, 280, 39)
    line(245, 192, 400, 70)

    angleMode(DEGREES)
    fill(240, 200, 215)
    arc(200, 200, 350, 350, 135, 211.5, CHORD)
    fill(0, 0, 50)
    arc(200, 200, 350, 350, 2, 151, CHORD)
    fill(0, 0)
    arc(200, 200, 350, 350, 90, 270, OPEN)
    arc(200, 200, 360, 360, 240 + 10, 270 + 10, OPEN)
    arc(200, 200, 350, 360, 297, 328.5, OPEN)
    strokeWeight(0)

    for (let i = 0; i < 25; i++) {
        fill(i * 15 + 40, 0, i * 5, i * 1.2)
        circle(280, 280, i * 2.75)
        fill(i * 50, i * 4, i * 6, i * 0.8)
        circle(280, 280, i * 2)
    }

    fill(255, 220, 250)
    stroke(0, 0, 50)
    strokeWeight(2)
    stroke(0, 0, 20)
    circle(280, 280, 30)

    fill(0, 0)
    strokeWeight(0)
    stroke(0, 0)
}
