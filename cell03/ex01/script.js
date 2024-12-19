const balloon = document.getElementById('balloon');
let size = 200; 
let colors = ['red', 'green', 'blue']; 
let colorIndex = 0;

balloon.addEventListener('click', () => {
    size += 10; 
    colorIndex = (colorIndex + 1) % colors.length; 
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size}px`;
    balloon.style.backgroundColor = colors[colorIndex];

    if (size > 420) {
        size = 200;
        colorIndex = 0;
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size}px`;
        balloon.style.backgroundColor = colors[colorIndex];
    }
});

balloon.addEventListener('mouseenter', () => {
    if (size > 200) {
        size -= 5; 
        colorIndex = (colorIndex - 1 + colors.length) % colors.length; 
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size}px`;
        balloon.style.backgroundColor = colors[colorIndex];
    }
});