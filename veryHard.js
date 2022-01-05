var a = parseInt(window.prompt("Enter first number here: "));
var b = parseInt(window.prompt("Enter first number here: "));

console.log("The sum of " + a + " and " + b + " is: " + sum());
console.log("The difference of " + a + " and " + b + " is: " + diff());
console.log("The multiplication of " + a + " and " + b + " is: " + multiply());
console.log("The division of " + a + " and " + b + " is: " + divide());

function sum() {
    return a + b;
}

function diff() {
    return a - b;
}

function multiply() {
    return a * b;
}

function divide() {
    return a / b;
}