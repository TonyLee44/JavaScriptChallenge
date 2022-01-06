var x = parseInt(window.prompt("Enter first number here: "));
let oper = window.prompt("Select one of the four operators and hit enter (+ - * /): ");
var y = parseInt(window.prompt("Enter second number here: "));

function doMath(x,y,oper) {
    switch(oper) {
        case '+': console.log("The sum of " + x + " and " + y + " is: " + (x + y));
        break;
        case '-': console.log("The difference of " + x + " and " + y + " is: " + (x - y));
        break;
        case '*': console.log("The multiplication of " + x + " and " + y + " is: " + (x * y));
        break;
        case '/': console.log("The division of " + x + " and " + y + " is: " + (x / y));
        break;
        default: console.log('You did not choose a vailid option!');
    };
};
doMath(x,y,oper);