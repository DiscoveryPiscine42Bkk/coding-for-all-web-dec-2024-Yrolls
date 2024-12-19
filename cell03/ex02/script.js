const form = document.getElementById('calculator');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    const leftOperand = parseFloat(document.getElementById('leftOperand').value);
    const operator = document.getElementById('operator').value;
    const rightOperand = parseFloat(document.getElementById('rightOperand').value);

    if (isNaN(leftOperand) || isNaN(rightOperand) || leftOperand < 0 || rightOperand < 0) {
        alert('Error :(');
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = leftOperand + rightOperand;
            break;
        case '-':
            result = leftOperand - rightOperand;
            break;
        case '*':
            result = leftOperand * rightOperand;
            break;
        case '/':
            if (rightOperand === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = leftOperand / rightOperand;
            break;
        case '%':
            if (rightOperand === 0) {
                alert("It's over 9000!");
                console.log("It's over 9000!");
                return;
            }
            result = leftOperand % rightOperand;
            break;
        default:
            alert('Error :(');
            return;
    }

    alert(`Result: ${result}`);
    console.log(`Result: ${result}`);
});

// Pop-up alert every 30 seconds
setInterval(() => {
    alert('Please, use me...');
}, 30000);