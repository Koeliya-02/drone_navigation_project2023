// Drone rotation code
function rotateDrone() {
    $('#drone-box').css('transform', 'rotate(' + (parseInt($('#drone-box').css('rotate')) + 10) + 'deg)');
    setTimeout(rotateDrone, 200); // Adjust the time interval as needed
}

// Call the function to start the rotation
rotateDrone();

// Drone animation code to follow the mouse cursor
$('#background').mousemove(function(e) {
    var droneBox = $('#drone-box');
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    droneBox.animate({
        left: mouseX - droneBox.width() / 2 + 'px',
        top: mouseY - droneBox.height() / 2 + 'px'
    }, 200); // Adjust the animation speed as needed
});

// Drone animation code to move around the video container
function animateDrone() {
    var videoContainer = $('#video-container');
    var videoRect = videoContainer[0].getBoundingClientRect();

    var newX = videoRect.left + Math.random() * (videoRect.width - 200);
    var newY = videoRect.top + Math.random() * (videoRect.height - 150);

    $('#drone-box').animate({
        left: newX + 'px',
        top: newY + 'px'
    }, 2000, animateDrone); // Adjust the time interval as needed
}

// Call the function to start the animation
animateDrone();

