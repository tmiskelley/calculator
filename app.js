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
        } else if(button.id == 'negative') {
            displayValue *= -1;
            updateDisplay(displayValue);
        } else if(button.id == 'percent') {
            displayValue = parseFloat(displayValue / 100);
            updateDisplay(displayValue);
        } else if(button.id == 'equals') {
            if(operator != null && firstNumber != null) {
                calculate();
                operator = null;
                firstNumber = null;
            } else {
                return;
            }
        } else if(button.id == 'add') {
            if(firstNumber === null) {
                operator = 0;
                firstNumber = displayValue;
                displayValue = null;
            } else {
                calculate();
                operator = 0;
                firstNumber = displayValue;
                displayValue = null;
            }
        } else if(button.id == 'minus') {
            if(firstNumber === null) {
                operator = 1;
                firstNumber = displayValue;
                displayValue = null;
            } else {
                calculate();
                operator = 1;
                firstNumber = displayValue;
                displayValue = null;
            }
        } else if(button.id == 'multiply') {
            if(firstNumber === null) {
                operator = 2;
                firstNumber = displayValue;
                displayValue = null;
            } else {
                calculate();
                operator = 2;
                firstNumber = displayValue;
                displayValue = null;
            }
        } else if(button.id == 'divide') {
            if(firstNumber === null) {
                operator = 3;
                firstNumber = displayValue;
                displayValue = null;
            } else {
                calculate();
                operator = 3;
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
    return parseFloat((f / s).toFixed(2));
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
