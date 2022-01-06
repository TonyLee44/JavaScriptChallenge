var x = parseInt(window.prompt("Enter first number here: "));
let str = window.prompt("Select one of the four options and hit enter (+ - * /): ");
var y = parseInt(window.prompt("Enter second number here: "));

function sum(x,y) {
    return (x+y);
};

function diff(x,y) {
    return (x-y);
};

function multiply(x,y) {
    return (x*y);
};

function divide(x, y) {
    return (x/y);
};

switch(str) {
    case '+': console.log("The sum of " + x + " and " + y + " is: " + sum(x,y));
    break;
    case '-': console.log("The difference of " + x + " and " + y + " is: " + diff(x,y));
    break;
    case '*': console.log("The multiplication of " + x + " and " + y + " is: " + multiply(x,y));
    break;
    case '/': console.log("The division of " + x + " and " + y + " is: " + divide(x,y));
    default: console.log('You did not choose a vailid option!');
};