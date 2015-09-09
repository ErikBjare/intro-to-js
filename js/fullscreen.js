// Welcome to the fullscreen.js file!
// Here you will discover a few new features, such as fullscreen canvas and a render-loop.
// This file is used by the fullscreen.html file, and will not be loaded in the index.html file.

$(document).ready(function() {
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

    function renderFrame(timestamp) {
        // Write your code in here!
        // It will run every time a new frame is drawn
        // Just remember to keep "clear()", otherwise your frames will
        // draw upon each other, creating a beautiful (or not) mess.
        clear();

        for(var i=0; i<20; i++) {
            drawRectangle(canvas.width/2 - 200 + i*10, canvas.height/2 - 200 + i*10, 200, 200);
        }

        drawFPSCounter(timestamp);

        // Tells the browser that the frame has been drawn and that we're ready to draw the next one.
        window.requestAnimationFrame(renderFrame);
    };

    // This makes sure that the canvas keeps the size of the window if the window size changes.
    $(window).resize(function() {
        canvasElement.width = window.innerWidth;
        canvasElement.height = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    function onLoad() {
        // If you wish to do something once and only once when the program starts, do it here!
        $(window).resize();
        renderFrame();
    };

    onLoad();
});
