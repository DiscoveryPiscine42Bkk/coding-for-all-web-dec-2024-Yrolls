$(document).ready(function () {
    const $balloon = $('#balloon');
    let size = 200;
    const colors = ['red', 'green', 'blue'];
    let colorIndex = 0;

    $balloon.on('click', function () {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;

        $balloon.css({
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: colors[colorIndex],
        });

        if (size > 420) {
            size = 200;
            colorIndex = 0;
            $balloon.css({
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: colors[colorIndex],
            });
        }
    });

    $balloon.on('mouseenter', function () {
        if (size > 200) {
            size -= 5;
            colorIndex = (colorIndex - 1 + colors.length) % colors.length;

            $balloon.css({
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: colors[colorIndex],
            });
        }
    });
});