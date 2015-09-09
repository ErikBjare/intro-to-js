function yourOwnFunction() {
    // Write your own code here and run it with the "Your Own Function" button!
}

$(document).ready(function() {
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
});
