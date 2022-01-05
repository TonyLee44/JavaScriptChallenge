var a = parseInt(window.prompt("Enter first number here: "));
var b = parseInt(window.prompt("Enter second number here: "));

console.log("The sum of " + a + " and " + b + " is: " + sum(a,b));
console.log("The difference of " + a + " and " + b + " is: " + diff(a,b));
console.log("The multiplication of " + a + " and " + b + " is: " + multiply(a,b));
console.log("The division of " + a + " and " + b + " is: " + divide(a,b));

function sum(a,b) {
    return (a+b);
}

function diff(a,b) {
    return (a-b);
}

function multiply(a,b) {
    return (a*b);
}

function divide(a,b) {
    return (a/b);
}