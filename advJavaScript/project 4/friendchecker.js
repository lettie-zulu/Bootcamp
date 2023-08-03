let nameval = prompt("Please enter a name");
let outputVal;

switch (nameval) {
    case "Palesa":
        outputVal = nameval + " is a friend";
        break;
    case "Mbali":
        outputVal = nameval + " is a friend";
        break;
    case "Max" :
        outputVal = nameval + " is a friend";
        break;
    case "Gomolemo" :
        outputVal = nameval + " is a friend";
        break;
    default :
        outputVal = "I don't know " + nameval;
        break;
}

console.log(outputVal);