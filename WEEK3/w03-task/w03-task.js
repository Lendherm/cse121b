/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  // function body
  return number1 + number2;
}

// Function declaration for the 'addNumbers' function
function addNumbers() {
  // Get values from HTML form controls and convert them to numbers
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);

  // Call the 'add' function with the two arguments and assign the result to the 'sum' form element
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

// Add a "click" event listener to the HTML button with an ID of 'addNumbers'
document.querySelector('#addNumbers').addEventListener('click', addNumbers);



/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
  return number1 - number2;
};

// Function expression for the 'subtractNumbers' function
const subtractNumbers = function() {
  // Get values from HTML form controls and convert them to numbers
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);

  // Call the 'subtract' function with the two arguments and assign the result to the 'difference' form element
  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

// Add a "click" event listener to the HTML button with an ID of 'subtractNumbers'
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);



/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

// Arrow function for the 'multiplyNumbers' function
const multiplyNumbers = () => {
  // Get values from HTML form controls and convert them to numbers
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);

  // Call the 'multiply' arrow function with the two arguments and assign the result to the 'product' form element
  document.querySelector('#product').value = multiply(factor1, factor2);
};

// Add a "click" event listener to the HTML button with an ID of 'multiplyNumbers'
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
  return dividend / divisor;
}

// Function expression for the 'divideNumbers' function
const divideNumbers = function() {
  // Get values from HTML form controls and convert them to numbers
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);

  // Call the 'divide' function with the two arguments and assign the result to the 'quotient' form element
  document.querySelector('#quotient').value = divide(dividend, divisor);
};

// Add a "click" event listener to the HTML button with an ID of 'divideNumbers'
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);



/* Decision Structure */

// Function expression for the 'getTotalDue' function
const getTotalDue = function () {
  // Get the numeric value entered by the user in the subtotal field
  let subtotal = Number(document.querySelector('#subtotal').value);

  // Check if the membership checkbox has been checked
  let isMember = document.querySelector('#member').checked;

  // Apply a 15% discount if the user is a member
  if (isMember) {
    subtotal *= 0.85; // Apply a 15% discount
  }

  // Calculate the total amount with two decimal places
  let total = subtotal.toFixed(2);

  // Output the total amount to the total span
  document.querySelector('#total').textContent = `$ ${total}`;
};

// Add a "click" event listener to the HTML button with an ID of 'getTotal'
document.querySelector('#getTotal').addEventListener('click', getTotalDue);


/* ARRAY METHODS - Functional Programming */

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

/* Output Source Array */

document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);


/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);


/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number);


/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);


/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerText = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number);
