// Variables for operators and operands
let operand1 = undefined;
let operator = "";
let operand2 = undefined;


// Boolean for checking if we use a decimal
let decimalActivated = false;

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


/// Debug Statments for global variables
let printState = (place) => {
    console.log(place);
    console.log("operand1: " + operand1);
    console.log("operator: " + operator);
    console.log("operand2: " + operand2);
    console.log("-------------------------------------");
}


// A function that takes 2 operands and 1 operator to evalute them
let operate = (pOperator, pOperand1, pOperand2) => {
    let result;

    // Handle Dividing by zero
    if (pOperator == "/" && pOperand2 == "0") {
        alert("-_-")
        return;
    }

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

    // Reset for next operand
    decimalActivated = false;

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
    let number = Event.target.innerText;

    if (operand1 == undefined) {
        operand1 = number;
        populateDisplay(operand1);

    } else if (operator == "") {
        operand1 += number;
        populateDisplay(operand1);

    } else if (operand2 == undefined) {
        operand2 = number;
        populateDisplay(operand2);

    } else  if (operand2 != undefined) {
        operand2 += number;
        populateDisplay(operand2);
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
    // If first operand is not picked go skip operation
    if (operand1 == undefined) {
        return;
    }

    // If two operands are picked and the operator is defined call the equal operator
    if (operator != undefined && operand2 != undefined) {
        equalOperation();
    }
    operator = Event.target.innerText;
    printState("ClickOperator()");
};

operatorElementsArray.forEach(element => {
    element.addEventListener('click', clickOperator);
});


// Get the equal button
let equalButton = document.getElementById("equal");

// A function to operate and calculate results
let equalOperation = () => {
    // If any of the operands or operator is undefined do nothing
    if (operand1 == undefined || operand2 == undefined || operator === "") {
        return;
    }

    // console.log(Number.isFinite(operand1));
    operand1 = Number(operand1);
    operand2 = Number(operand2);
    // console.log(Number.isFinite(operand1));

    let result = operate(operator, operand1, operand2);
    populateDisplay(result);

    // Reset operation
    operand1 = result + "";
    operand2 = undefined;
    operator = "";
    
    if (parseInt(operand1) || operand1 == undefined) {
        decimalActivated = false;
    } else {
        decimalActivated = true;
    }

    printState("EqualOperation()");
}

// Add event listener to equal button
equalButton.addEventListener('click', equalOperation);


// Get all clear button
let clearButton = document.getElementById("Clear");



// A function to clear and reset everything
let clearAll = () => {
    // Clear operands and operator
    operand1 = undefined;
    operand2 = undefined;
    operator = "";

    // Reset decimalActivated
    decimalActivated = false;

    populateDisplay("0");
}

// Add event listener to clearButton
clearButton.addEventListener('click', clearAll);


// Get decimal button
let decimalButton = document.getElementById("decimal");

// Add eventList
let clickPeriod = () => {

    // Handle operand1 & operand2
    if (operand1 == undefined) {
        operand1 = "0.";
        populateDisplay(operand1)
    } else if (operator == "") {
        // Check if it is already a flaot;
        if (operand1.includes(".")) {
            return;
        }
        operand1 += ".";
        populateDisplay(operand1);
    } else if (operand2 == undefined) {
        operand2 = "0.";
        populateDisplay(operand2);
    } else if (operand2 != undefined) {
        // Check if it is already a flaot;
        if (includes(".")) {
            return;
        }
        operand2 += ".";
        populateDisplay(operand2);
    }

    printState("clickPeriod()");
}

// Add eventListener to decimal
decimalButton.addEventListener('click', clickPeriod);

