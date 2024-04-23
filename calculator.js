// Variables for operators and operands
let operand1 = undefined;
let operator = "";
let operand2 = undefined;




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

// Populating the display

// Get display value
let displayValue = "Hello Calculator!";

// Get Display place
let displayTag = document.getElementById("displayTag");


// Function to populate the display
let populateDisplay = (displayText)  => {
    displayTag.innerText = displayText;
}


// Get the num Keypads
let numberElements = document.getElementsByClassName("number");
let numberElementsArray = Array.from(numberElements);

// A function to populate the two operands
let clickOperand = (Event) => {
    let number = +Event.target.innerText;
    
    if (operand1 == undefined) {
        operand1 = number;
    } else if (operator == "") {
        operand1 = (operand1 * 10) + number;
    } else if (operand2 == undefined) {
        operand2 = number;
    } else {
        operand2 = (operand2 * 10) + number;
    } 
};


numberElementsArray.forEach(element => {
    element.addEventListener('click', clickOperand);
});


// Get the operators
let operatorElements = document.getElementsByClassName("operator");
let operatorElementsArray = Array.from(operatorElements);

// A function to populate operator
let clickOperator = (Event) => {
    operator = Event.target.innerText;
};

operatorElementsArray.forEach(element => {
    element.addEventListener('click', clickOperator);
});