const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let displayValue = null;
let operator = null;
let firstNumber = null;
let secondNumber = null;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if(button.id == 'clear') {
            clearDisplay();
        } else if(button.id == 'equals') {
            if(operator != null && firstNumber != null) {
                calculate();
                operator = null;
            } else {
                return;
            }
        } else if(button.id == 'add') {
            operator = 0;
            if(firstNumber === null) {
                firstNumber = displayValue;
                displayValue = null;
            } else {
                calculate();
                firstNumber = displayValue;
                displayValue = null;
            }
        } else if(displayValue === null) {
            displayValue = parseInt(button.id)
            updateDisplay(displayValue);
        } else {
            displayValue = (displayValue * 10) + parseInt(button.id);
            updateDisplay(displayValue);
        }
    });
});

function calculate() {
    secondNumber = displayValue;
    let result = operate(operator, firstNumber, secondNumber);
    updateDisplay(result);
    displayValue = result;
    secondNumber = null;
}

function updateDisplay(displayValue) {
    display.innerText = displayValue;
}

function clearDisplay() {
    display.innerText = 0;
    displayValue = null;
    operator = null;
    firstNumber = null;
    secondNumber = null;
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
