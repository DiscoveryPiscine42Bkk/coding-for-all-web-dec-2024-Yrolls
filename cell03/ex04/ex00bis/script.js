// Function to generate a random hex color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// jQuery event listener to change background color on button click
$(document).ready(function() {
    $("#changeColorButton").click(function() {
        $("body").css("background-color", getRandomColor());
    });
});