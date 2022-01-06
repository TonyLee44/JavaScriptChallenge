//medium Javascript Challenge
var str = window.prompt("Enter a phrase here: ");

if (isUpperCase(str)) {
    console.log("The user is shouting.");
}

else if (isLowerCase(str)) {
    console.log("The user is whispering.");
}

else {
    console.log("The user is talking normally.");
}

function isUpperCase(str) {
    return /[A-Z]/.test(str) && !/[a-z]/.test(str);
};

function isLowerCase(str) {
    return /[a-z]/.test(str) && !/[A-Z]/.test(str);
};