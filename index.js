// Write your solution in this file!

// 1. Declare customerName in global scope using var
var customerName = 'bob';

// 2. Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Declare bestCustomer in global scope inside a function
function setBestCustomer() {
  bestCustomer = 'not bob'; // creates a global variable (bad practice)
}

// 4. Overwrite bestCustomer value
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'; // reassigns the global variable
}

// 5. Declare a constant in global scope
const leastFavoriteCustomer = 'someone';

// 6. Try to change the constant — this will throw an error
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // this will cause a TypeError
}

