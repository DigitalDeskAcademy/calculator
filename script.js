"use strict"; // Enforce strict mode for better error-checking

// Code goes here

//Variables
let int1 = 0;
let int2 = 0;
let operator = "";
let newInput = false; // Flag to check if new input after operator

// Selectors
let display = document.querySelector(".display");
let runningDisplay = document.querySelector("#running-display");

// Button Selections
const numberButtons = document.querySelectorAll(".number-button");
const operatorButtons = document.querySelectorAll(".operator-button");
const utilityButtons = document.querySelectorAll(".utility-button");
const backspaceButton = document.querySelector("#button-backspace");

// Button Event Listeners

//Number Buttons (0-9, .)
numberButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const buttonValue = e.target.textContent;
    if (display.textContent === "0" || newInput) {
      display.textContent = buttonValue;
      newInput = false;
    } else {
      display.textContent += buttonValue;
    }
    runningDisplay.textContent += buttonValue; // Append to running display
  });
});

// Operator Buttons (+, -, /, *)
operatorButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    operator = e.target.textContent;
    if (!newInput) {
      int1 = parseFloat(display.textContent);
      runningDisplay.textContent += `${operator}`;
      display.textContent = "";
      newInput = "true";
    }
  });
});

// Utility Buttons (Clear, Equals, etc)
utilityButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    const buttonValue = e.target.textContent;

    // Clear Button
    if (buttonValue === "C") {
      clearDisplay();
    }

    // Equals button
    if (buttonValue === "=") {
      if (!operator) {
        console.log("Invalid or missing operator!");
        display.textContent = "";
      } else {
        int2 = parseFloat(display.textContent);
        console.log(`The value of int2: ${int2}`);
        operate(operator, int1, int2);
      }
    }
  });
});

backspaceButton.addEventListener("click", function () {
  if (display.textContent.length > 1) {
    display.textContent = display.textContent.slice(0, -1);
  } else {
    display.textContent = "0";
  }
  runningDisplay.textContent = runningDisplay.textContent.slice(0, -1);
});

// Create the main function for calculator
const operate = function (operator, int1, int2) {
  let result;

  switch (operator) {
    case "+":
      result = add(int1, int2);
      break;
    case "-":
      result = subtract(int1, int2);
      break;
    case "*":
      result = multiply(int1, int2);
      break;
    case "/":
      if (int2 === 0) {
        console.log("Division by zero!");
        result = "Error"; // Handle division by zero
      } else {
        result = divide(int1, int2);
      }
      break;
    default:
      console.log("Unknown operator!");
      result = "Error"; // Handle unexpected operator
  }

  display.textContent = result;
  runningDisplay.textContent += ` = ${result}`;
  console.log(`Result: ${result}`);
  clearValues();
};

const clearValues = function () {
  int1 = 0;
  int2 = 0;
  operator = "";
  newInput = false;
};
const clearDisplay = function () {
  display.textContent = "0";
  runningDisplay.textContent = "";
};

// Mathmatical functions
const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  if (b === 0) {
    return "Error"; // Handle division by 0
  }
  return a / b;
};

// Export the functions for testing
// module.exports = {
//   add,
//   subtract,
//   multiply,
//   divide,
//   operate,
//   clearValues,
//   clearDisplay,
// };
