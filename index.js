// 1. Write a JavaScript function to calculate the sum of two numbers.  
const a = 10;
const b = 20;
console.log(a + b)
// ---------------------------------------------------
function calculate(a, b) {
    return a + b;
}

console.log(calculate(4, 5));

// =========================================================================

// 2. Write a JavaScript program to find the maximum number in an array. 

const number = [4, 6, 7, 20, 56, 58];

console.log(Math.max(...number));
// -------------------------------------------------------------
function maximumNumber(arr) {
    return Math.max(...arr)
}

console.log(maximumNumber(number));

// ==============================================================================

// 3. Write a JavaScript program to reverse a given string. 

function reversedString(str) {
    return str.split('').reverse().join('');
}

const original = "Hello World!"
const reversedsstring = reversedString(original);

console.log(reversedsstring)