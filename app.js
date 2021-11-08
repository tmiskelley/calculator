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
    return f / s;
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

console.log(operate(3,5,5));