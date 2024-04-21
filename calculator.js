// Variables for operators and operands
let operand1 = 0;
let operator = "";
let operator2 = 0;




// Basic Operators
let add = (a, b) => (a + b);

let subtract = (a, b) => (a - b);

let multiply = (a, b) => (a * b);

let divide = (a, b) => {
    if (b == 0) {
        return NaN;
    }

    return a / b;
}

// A function that takes 2 operands and 1 operator to evalute them
let operate = (pOperator, pOperand1, pOperand2) => {
    let result;

    switch (pOperator) {
        case "+":
            result = add(pOperand1, pOperand2);
            break;
        case "-":
            result = subtract(pOperand1, pOperand2);
            break;
        case "*":
            result = multiply(pOperand1, pOperand2);
            break;
        case "/":
            result = divide(pOperand1, pOperand2);
            break;
        default:
            console.log("ERROR: Operator not valid.");
            console.log("Operator: " + pOperator);
            result = NaN;
            break;
    }

    return result;
}