//medium Javascript Challenge
var str = window.prompt("Enter a phrase here: ");

if (isUpperCase(str) === true) {
    console.log("The user is shouting.");
}

if (isLowerCase(str) === true) {
    console.log("The user is whispering.");
}

if (isUpperCase(str) === false && isLowerCase(str) === false) {
    console.log("The user is neither shouting or whispering.");
}

function isUpperCase(str) {
    return /[A-Z]/.test(str) && !/[a-z]/.test(str);
}

function isLowerCase(str) {
    return /[a-z]/.test(str) && !/[A-Z]/.test(str);
}