// Welcome to the fullscreen.js file!
// Here you will discover a few new features, such as fullscreen canvas and a render-loop.
// This file is used by the fullscreen.html file, and will not be loaded in the index.html file.

$(document).ready(function() {
    var i = 0;
    var speed = 0.1;

    function renderFrame(timestamp) {
        // Write your code in here!
        // It will run every time a new frame is drawn
        // Just remember to keep "clear()", otherwise your frames will
        // draw upon each other, creating a beautiful (or not) mess.
        clear();

        drawSquare(100 + 10*i, 100, 250, 250)

        xcur = canvas.width / 2;
        ycur = canvas.height / 2;
        canvas.beginPath();
        canvas.moveTo(xcur, ycur)
        if(0 < i) {
            xcur += 10*Math.min(i, 10);
            ycur += 10*Math.min(i, 10);
            canvas.lineTo(xcur, ycur);
        }
        if(10 < i) {
            var res = 10;
            var maxsteps = 20;
            var steps = Math.min(i - 10, maxsteps);
            var angle = -Math.PI/4;
            for(var j=0; j<steps; j++) {
                xcur += 17*Math.cos(angle);
                ycur -= 17*Math.sin(angle);
                angle += Math.PI / maxsteps * 1.5;
                canvas.lineTo(xcur, ycur);
            }
        }
        if(30 < i) {
            xcur -= 10*Math.min(i - 30, 10);
            ycur += 10*Math.min(i - 30, 10);
            canvas.lineTo(xcur, ycur);
        }
        if(40 < i) {
            var res = 10;
            var maxsteps = 20;
            var steps = Math.min(i - 40, maxsteps);
            var angle = -Math.PI/4;
            for(var j=0; j<steps; j++) {
                xcur -= 17*Math.cos(angle);
                ycur -= 17*Math.sin(angle);
                angle += Math.PI / maxsteps * 1.5;
                canvas.lineTo(xcur, ycur);
            }
        }

        canvas.stroke();

        i = (i + speed) % 70;

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
