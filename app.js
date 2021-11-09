const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let first = false;
let currentNumber = 0;
let operator = 0;
let num1 = 0;
let num2 = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id == 'clear') {
            clearDisplay();
            currentNumber = 0;
        } else if(button.id == 'equals') {
            num2 = currentNumber;
            let ans = parseFloat(operate(operator, num1, num2));
            updateDisplay(ans);
            currentNumber = ans;
        } else if(button.id == 'negative') {
            currentNumber *= -1;
            updateDisplay(currentNumber);
        } else if(button.id == 'add') {
            operator = 0;
            num1 = currentNumber;
            currentNumber = 0;
        } else if(button.id == 'minus') {
            operator = 1;
            num1 = currentNumber;
            currentNumber = 0;
        } else if(button.id == 'multiply') {
            operator = 2;
            num1 = currentNumber;
            currentNumber = 0;
        } else if(button.id == 'divide') {
            operator = 3;
            num1 = currentNumber;
            currentNumber = 0;
        } else if(button.id == 'percent') {
            currentNumber /= 10;
            updateDisplay(currentNumber);
        } else if(first) {
            currentNumber = (currentNumber * 10) + parseInt(button.id);
            updateDisplay(currentNumber);
        } else {
            currentNumber += parseInt(button.id);
            updateDisplay(currentNumber);
        }
    });
});

function updateDisplay(currentNumber) {
    if(first) {
        display.textContent = currentNumber;
    } else {
        first = true;
        display.textContent = currentNumber;
    }
}

function clearDisplay() {
    first = false;
    display.textContent = 0;
    currentNumber = 0;
}

function add(f, s) {
    return f + s;
}

function subtract(f, s) {
    return f - s;
}

function multiply(f, s) {
    return f * s;
}

function divide(f, s) {
    return (f / s).toFixed(3);
}

function operate(op, num1, num2) {
    switch(op) {
        case 0:
            return add(num1, num2);
        case 1:
            return subtract(num1, num2);
        case 2:
            return multiply(num1, num2);
        case 3:
            return divide(num1, num2);
    }
}
