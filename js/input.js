$(document).ready(function() {
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
        } else if(keycode == 122 || keycode == 123) {
            // We want to be able to open tools developer and fullscreen mode
            // with F12, so we make sure that event.preventDefault() doesn't run
            // if we press it.
            console.log("F11 or F12 key pressed")
            return;
        } else if(keycode == 82) {
            // We want to be able to reload the page with Ctrl + R,
            // so the same as the F11 and F12 keys apply here.
            console.log("R key pressed");
            return;
        }

        console.log("Key with code " + keycode + " pressed");
        console.log(event);

        event.preventDefault();
    });

    // Add event listener for `click` events.
    canvasElement.addEventListener('click', onMouseClick, false);
    canvasElement.addEventListener('contextmenu', onMouseClick, false);

    // This prevents the right-click menu (the "contextmenu") from opening when rightclicking on the canvas.
    canvasElement.oncontextmenu = function() { return false; }

});
