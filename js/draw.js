// This function clears the entire canvas, useful in animation.
function clear() {
    canvas.clearRect(0, 0, canvas.width, canvas.height);
}

// Draws a square with its center at the point (midx, midy)
// It simply wraps drawRectangle which can be found further down in this file.
function drawSquare(midx, midy) {
    // The length of the side of the square in pixels
    var unit = 100;
    drawRectangle(midx - unit/2, midy - unit/2, unit, unit);
}

// Draws a rectangle with it's upper left corner at (x, y) with the given width and height.
// If you think the lineTo arguments look funky, try drawing the points on paper.
function drawRectangle(x, y, width, height) {
    canvas.beginPath();
    canvas.moveTo(x, y);  // Moves a "pencil" without creating a line
    canvas.lineTo(x + width, y);  // Moves a pencil, creating a line
    canvas.lineTo(x + width, y + height);
    canvas.lineTo(x, y + height);
    canvas.lineTo(x, y);
    canvas.stroke();  // Takes all the lines that have been made and draws them, without this nothing will be shown.
}

// Draws a circle using some trigonometic functions.
// Try making it draw a hexagon, pentagon or even a simple square or triangle instead!
// Hint: Change the resolution attribute to something low.
function drawCircle(midx, midy) {
    var angle = 0;  // Starting angle
    var radius = canvas.width / 4;
    var resolution = 30; // The number of edges the circle will have, try decreasing and see what happens!
    canvas.beginPath();
    canvas.moveTo(midx + radius * Math.cos(angle), midy + radius * Math.sin(angle));
    for (var i = 0; i < resolution; i++) {
        angle += Math.PI * 2 / resolution;
        canvas.lineTo(midx + radius * Math.cos(angle), midy + radius * Math.sin(angle));
    }
    canvas.stroke();
}

// Draws a random path from top to bottom, looking something like lightning.
// Try animating it once you understand both concepts and feel familiar with them!
function drawLightning() {
    var x = canvas.width / 2;
    var y = 0;

    canvas.beginPath();
    canvas.moveTo(x, y);
    while (y < canvas.height) {
        x += (Math.random() - 0.5) * 50;
        // This ensures that y doesn't get bigger than the size of the canvas
        y = Math.min(canvas.height, y + Math.random() * 50);
        canvas.lineTo(x, y);
    }

    for (var i = -Math.PI; i < 0; i += 0.1) {
        var r = 25 * Math.random();
        canvas.lineTo(x + r * Math.cos(i), y + r * Math.sin(i));
        canvas.moveTo(x, y);
    }
    canvas.stroke();
}

// This function animates a progress bar that till complete in a duration given in milliseconds.
function animateProgressBar(duration) {
    var start = null;

    function drawFrame(timestamp) {
        if (start == null) {
            start = timestamp;
        }
        var progress = timestamp - start;
        canvas.beginPath();
        canvas.moveTo(0, canvas.height / 2);
        canvas.lineTo(canvas.width * progress / duration, canvas.height / 2);
        canvas.stroke();
        if (progress < duration) {
            // You tell window.requestAnimationFrame what to do once the browser is ready to draw another frame
            // You might be tempted to do an infinite-while loop, but that's not how you do these things in JavaScript (anymore...).
            // If you do, you might end up with your page freezing or just being really slow.
            // You can find more about animation behavior in the fullscreen.js file.
            window.requestAnimationFrame(drawFrame);
        }
    }

    window.requestAnimationFrame(drawFrame);
}

// This variable stores the timestamp of the last drawed frame, used when calculating frames per second.
var lastTimestamp = new Date().getTime();

function drawFPSCounter(timestamp) {
    // Calculates the number of frames per second
    var fps = Math.round(10000 / (timestamp - lastTimestamp)) / 10;

    // Here we can set the font we want to use when drawing text
    canvas.font = "20px Arial";
    canvas.fillText("FPS: " + fps, 10, 25);

    // Store the timestamp from this frame to use when calculating the next frame.
    lastTimestamp = timestamp;
}
