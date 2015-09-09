var canvasElement;
var canvas;

// Welcome, this is a comment along with all other lines that start with "//".
// We have filled the comments with useful information about what this program can
// do and how YOU can make it do cool things. So make sure not to miss anything!

// This prints a message to the console which can be found in your browsers developer tools
// Open the dev tools by clicking F12 in Chrome and Firefox, there you should find the console easily.

// This function clears the entire canvas, useful in animation.
function clear() {
    canvas.clearRect(0, 0, canvas.width, canvas.height);
}

// Draws a square with its center at the point (midx, midy)
function drawSquare(midx, midy) {
    // The length of the side of the square in pixels
    var unit = 100;
    drawRectangle(midx - unit/2, midy - unit/2, unit, unit);
}

function drawRectangle(x, y, width, height) {
    var x = Math.round(x);
    var y = Math.round(y);
    var width = Math.round(width);
    var height = Math.round(height);
    canvas.beginPath();
    canvas.moveTo(x, y);  // Moves a "pencil" without creating a line
    canvas.lineTo(x + width, y);  // Moves a pencil, creating a line
    canvas.lineTo(x + width, y + height);
    canvas.lineTo(x, y + height);
    canvas.lineTo(x, y);
    canvas.stroke();  // Takes all the lines that have been made and draws them, without this nothing will be shown.
}

// Draws a circle using trigonometry, try making it draw a hexagon, pentagon or even a simple square instead!
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

    drawFrame();
}

function yourOwnFunction() {
    // Write your own code here!
}

$(document).ready(function() {
    console.info("Running...");

    // Here we just initialize a couple of global variables.
    // This fetches the reference to the canvas element in the HTML
    // NOTE: If you don't understand this, don't worry!
    canvasElement = document.getElementById("canvas");

    // This gets a canvas context (2 dimensional) from that reference. This is what you will draw on, which will be displayed on the canvas.
    // In tutorials this variable is usally names 'ctx', but to reduce confusion about that a context really is we've called it 'canvas' here.
    canvas = canvasElement.getContext("2d");

    // Here we set the height and width of the canvas context to match the element
    // Try changing these by /2 or *2, re-run the program and then click some of the buttons and you'll understand the difference.
    canvas.height = canvasElement.offsetHeight;
    canvas.width = canvasElement.offsetWidth;

    // These are binders for the buttons so you can render stuff on demand by clicking a button.

    $('button#square').click(function () {
        clear();
        drawSquare(canvas.width/2, canvas.height/2);
    });

    $('button#circle').click(function () {
        clear();
        drawCircle(canvas.width/2, canvas.height/2);
    });

    $('button#lightning').click(function () {
        clear();
        drawLightning();
    });

    $('button#progressBar').click(function () {
        clear();
        animateProgressBar(2000);
    });


    $('button#yourOwnFunction').click(function () {
        clear();
        yourOwnFunction();
    });

    $('button#clear').click(function () {
        clear();
    });

    // This is the function that will be ran when you click on the canvas.
    // Try to make it draw a box or circle at the location you click.
    function onMouseClick(event) {
        var x = event.pageX - canvasElement.offsetLeft;
        var y = event.pageY - canvasElement.offsetTop;

        // 0 if left, 2 if right
        var button = event.button;

        console.log("Mouse button " + button + " clicked at coordinates (X: " + x + ", Y: " + y + ")");
        console.log(event);
    }

    // Add event listener for `click` events.
    canvasElement.addEventListener('click', onMouseClick, false);
    canvasElement.addEventListener('contextmenu', onMouseClick, false);

    // This prevents the right-click menu (the "contextmenu") from opening when rightclicking on the canvas.
    canvasElement.oncontextmenu = function() { return false; }

    // Here you can run code when certain keys are pressed
    // I've set up so you can easily write code for the four arrow keys.
    // If you want to use another key you can look up which keycode it has by clicking
    // it when on the page and reading the keycode from the log.
    $(document).keydown(function(event) {
        var keycode = event.which;
        if (keycode == 37) {
            console.log("Left arrow key pressed")
        } else if (keycode == 38) {
            console.log("Up arrow key pressed")
        } else if (keycode == 39) {
            console.log("Right arrow key pressed")
        } else if (keycode == 40) {
            console.log("Down arrow key pressed")
        }

        console.log("Key with code " + keycode + " pressed");
        console.log(event);

        event.preventDefault();
    });

    // Want more? Check out the fullscreen.html and fullscreen.js files!
});
