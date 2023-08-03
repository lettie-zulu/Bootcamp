let userVal = prompt("Please Enter No.");
userVal = Number(userVal);

let consVal = 100;
let outputMessage;

if (userVal > consVal) {
    outputMessage = userVal + "  is greater than " + consVal;
} else if (userVal === consVal) {
    outputMessage = userVal + "  is equal to " + consVal;
} else {
    outputMessage = userVal + " is less than " + consVal;
}

console.log(outputMessage);
