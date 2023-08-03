// function doSomething(callback) {
//     callback();
//     }
//     function sayHi() {
//         console.log("Hi!");
// }
// doSomething(sayHi);

// function judge(grade) {
//     switch (grade) {
//         case  "A":
//             console.log("You got an", grade, ": amazing!");
//             break;
//         case  "B":
//             console.log("You got a", grade, ": well done!");
//             break;
//         case  "C":
//             console.log("You got a", grade, ": alright.");
//             break;
//         case  "D":
//             console.log("You got a", grade, ": hmmm...");
//             break;
//         default:
//             console.log("An", grade, "! What?!");
//     }
// }
// function getGrade(score, callback) {
//     let grade;
//     switch (true) {
//         case score >= 90:
//             grade = "A";
//             break;
//         case score >= 80:
//             console.log(score);
//             grade = "B";
//             break;
//         case score >= 70:
//             grade = "C";
//             break;
//         case score >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     callback(grade);
// }
// getGrade(85, judge);

//Practice exercise 13.1
// splitName("Lettie Zulu", greet);
// ''

// function splitName(stringFullname,callback) {
//     let arrayFullname = stringFullname.split(" ");
//     callback(arrayFullname)
// }

// function greet(arrayFullname) {
//     console.log(`Hello ${arrayFullname[0]} ${arrayFullname[1]}`);
// }

// let promise = new Promise(function (resolve, reject) {
//     // do something that might take a while
//     // let's just set x instead for this example
//     let x = 2;
//     if (x > 10) {
//         resolve(x); // on success
//     } else {
//         reject("Too low"); // on error
//     }
// });
// promise.then(
//     function (value) {
//         console.log("Success:", value);
//     },
//     function (error) {
//         console.log("Error:", error);
//     }
// ).catch(error => console.log(error));

//const promise = new Promise((resolve, reject) => {
//     resolve("success!");
// })
//     .then(value => {
//         console.log(value);
//         return "we";
//     })
//     .then(value => {
//         console.log(value);
//         return "can";
//     })
//     .then(value => {
//         console.log(value);
//         return "chain";
//     })
//     .then(value => {
//         console.log(value);
//         return "promises";
//     })
//     .then(value => {
//         console.log(value);
//     })
//     .catch(value => {
//         console.log(value);
//     })

// function counter(val) {
//     console.log(val);
// }

//Practice exercise 13.2
// new Promise(function (resolve, reject) {
//     resolve("Start Counting");
// })
//     .then(val => {
//         counter(val);
//         return "One";
//     })
//     .then(val => {
//         counter(val);
//         return "Two";
//     })
//     .then(val => {
//         counter(val);
//         return "Three";
//     })
//     .catch(error => console.log(error))

// function saySomething(x) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("something" + x);
//         }, 2000);
//     });
// }
// async function talk(x) {
//     const words = await saySomething(x);
//     console.log(words);
// }
// talk(2);
// talk(4);
// talk(8);

// Practice exercise 13.3
// let cnt = 0;
// function outputTime(val) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             cnt++;
//             resolve(`x value ${val} counter:${cnt}`);
//         }, 10);
//     });
// }
// async function aCall(val) {
//     console.log(`ready ${val} counter:${cnt}`);
//     const res = await outputTime(val);
//     console.log(res);
// }
// for (let x = 1; x < 4; x++) {
//     aCall(x);
// }

//Envent Loop / call stack and callback queque
// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 1000);
// console.log(add(4, 5));
// function add(x, y) {
//     return x + y;
// }

// console.log("Hi there");
// setTimeout(() => console.log("Sorry I'm late"), 0);
// console.log(add(4, 5));
// function add(x, y) {
//     return x + y;
// }