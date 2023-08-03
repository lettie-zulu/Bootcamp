// let rain = true;
// if(rain){
// console.log("** Taking my umbrella when I need to go outside **");
// } else {
// console.log("** I can leave my umbrella at home **");
// }

// let age = 18
// if(age < 18) {
//     console.log("We're very sorry, but you can't get in under 18");
//     } else {
//     console.log("Welcome!");
//     }

//practice exercise 4.1
// const test = false;
// console.log(test);
// if (!test) {
//     console.log("It's True");
// }
// if (test) {
//     console.log("False now");
// }

//example:

// let age = 10;
// let cost = 0;
// let message;
// if (age < 3) {
//     cost = 0;
//     message = "Access is free under three.";
// } else if (age >= 3 && age < 12) {
//     cost = 5;
//     message = "With the child discount, the fee is 5 dollars";
// } else if (age >= 12 && age < 65) {
//     cost = 10;
//     message = "A regular ticket costs 10 dollars.";
// } else {
//     cost = 7;
//     message = "A ticket is 7 dollars.";
// }
// console.log(message);
// console.log("Your Total cost " + cost);

// practice exercise 4.2
// let age = prompt("How old are you?");
// age = Number(age);
// let message;
// if (age >= 21) {
//     message = "You can enter and drink.";
// } else if (age >= 19) {
//     message = "You can enter but not drink.";
// } else {
//    message = "You are not allowed in!";
// }
// console.log(message);


//practice exercise 4.3
// const id = id;
// const mess = (id) ? "Allowed In" : "Denied Entry";
// console.log(mess);




// let activity = " ";
// switch(activity) {
//     case "Get up":
//     console.log("It is 6:30AM");
//     break;
// case "Breakfast":
// console.log("It is 7:00AM");
// break;
// case "Drive to work":
// console.log("It is 8:00AM");
// break;
// case "Lunch":
// console.log("It is 12:00PM");
// break;
// case "Drive home":
// console.log("It is 5:00PM");
// break;
// case "Dinner":
// console.log("It is 6:30PM");
// break;
// default:
// console.log("I cannot determine the current time.");
// break;
// }


// //practice exercise 4.4
// const randomNumber = Math.floor(Math.random() * 6);
// let answer = "Something went wrong";
// let question = prompt("Ask me anything");
// switch (randomNumber) {
//     case 0:
//         answer = "It will work out";
//         break;
//     case 1:
//         answer = "Maybe, maybe not";
//         break;
//     case 2:
//         answer = "Probably not";
//         break;
//     case 3:
//         answer = "Highly likely";
//         break;
//     default:
//         answer = "I don't know about that";
// }
// let output = "You asked me " + question + ". I think that " + answer;
// console.log(output);

// let grade = " ";
// switch (grade) {
//     case "F":
//     case "D":
//         console.log("You've failed!");
//         break;
//     case "C":
//     case "B":
//         console.log("You've passed!");
//         break;
//     case "A":
//         console.log("Nice!");
//         break;
//     default:
//         console.log("I don't know this grade.");
// }

// //practice exercise 4.5
// let prize = prompt("Pick a number 0-10");
// prize = Number(prize);
// let output = "My Selection: ";
// switch (prize){
// case 0:
// output += "Gold ";
// case 1:
// output += "Coin ";
// break;
// case 2:
// output += "Big ";
// case 3:
// output += "Box of ";
// case 4:
// output += "Silver ";
// case 5:
// output += "Bricks ";
// break;
// default:
// output += "Sorry Try Again";
// }
// console.log(output);