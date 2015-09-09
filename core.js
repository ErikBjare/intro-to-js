var canvasElement;
var canvas;

$(document).ready(function() {
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
});
