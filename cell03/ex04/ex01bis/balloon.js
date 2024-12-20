$(document).ready(function() {
    let currentSize = 200;
    let colorIndex = 0;
    const colors = ['red', 'green', 'blue'];
    const maxSize = 420;
    const minSize = 200;

    $('#balloon').on('click', function() {
        if (currentSize < maxSize) {
            currentSize += 10;
        } else {
            currentSize = 200; // Reset size
        }
        $(this).css({
            'width': currentSize + 'px',
            'height': currentSize + 'px',
            'background-color': colors[colorIndex]
        });
        colorIndex = (colorIndex + 1) % colors.length;
    });

    $('#balloon').on('mouseleave', function() {
        if (currentSize > minSize) {
            currentSize -= 5;
        }
        $(this).css({
            'width': currentSize + 'px',
            'height': currentSize + 'px',
            'background-color': colors[(colorIndex - 1 + colors.length) % colors.length]
        });
    });
});