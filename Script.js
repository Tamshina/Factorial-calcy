// script.js

// Function to calculate factorial iteratively
function iterativeFactorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

// Function to calculate factorial recursively
function recursiveFactorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * recursiveFactorial(num - 1);
}

// Main function to handle calculation and display result
function calculateFactorial(method) {
  const inputField = document.getElementById("number");
  const errorMessage = document.getElementById("error-message");
  const resultDiv = document.getElementById("result");

  const inputValue = parseInt(inputField.value);

  // Clear previous messages
  errorMessage.textContent = "";
  resultDiv.textContent = "";

  // Validate input
  if (isNaN(inputValue) || inputValue < 0) {
    errorMessage.textContent = "Please enter a valid positive integer.";
    return;
  }

  // Calculate factorial
  let factorial;
  if (method === "iterative") {
    factorial = iterativeFactorial(inputValue);
    resultDiv.textContent = `Iterative: ${inputValue}! = ${factorial}`;
  } else if (method === "recursive") {
    factorial = recursiveFactorial(inputValue);
    resultDiv.textContent = `Recursive: ${inputValue}! = ${factorial}`;
  }
}
