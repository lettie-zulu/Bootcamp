// function sayHello() {
//     let you = prompt("What's your name? ");
//     console.log("Hello", you + "!");
//     }

// sayHello();

// //practice exercise 6.2

// let compliment = ["you hard working", "dont doubt yourself", "you are a winner"];

// getCompliment();

// function getCompliment() {
//     let user = prompt("what is your name?");
//     let Compliment = compliment[Math.floor(Math.random()* compliment.length)];
//     alert(`${user} ${compliment}`);
// }

//exercise 6.3
// function calculate(num1, num2, operator) {
//     if (operator === "*") {
//         return num1 * num2;
//     } else if (operator === "-") {
//         return num1 - num2;
//     } else if (operator === "/") {
//         return num1 / num2;
//     } else if (operator === "%") {
//         return num1 % num2;
//     } else if (operator === "**") {
//         return num1 ** num2;
//     } else {
//         return num1 + num2;

//         return num1 + operator + num2;
//     }
// }
// alert(calculate(10, 3, "%"));

//example
// function addTwoNumbers(x = 0, y = 0) {
//     return x + y;
// }

// alert(addTwoNumbers(13, 12));

// //Arrow functions

// let doingArrowStuff = (x) => console.log(x);

// doingArrowStuff("Great!");

// let sayHi = () => alert("Hi");

// sayHi();

//example
// const arr = ["Squirrel", "alpaca", "buddy"];

// arr.forEach(e => alert(e));

// let result = arr.find(e => e === "buddy");
// alert(result);
//example
// let spread = ["so", "much", "fun"];
// let message = ["JavaScript", "is", ...spread, "and", "very","powerful"];

// console.log(message);

// function addTwoNumbers(x = 0, y = 0) {
// return x + y;
// }
// let arr = [ 5,9];

// addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a) {
//    console.log(x + y + z + a);
//    }

// arr = [5, 9];
// arr2 = [6, 7];

// addFourNumbers(...arr, ...arr2);

// function someFunction(param1,param2,...param3) {
//     console.log(param1, param2, param3);
// }

// someFunction("hi", "there!", "How are you?", "I am well", "lets have ice-cream", "its cold");

/*function addTwonumbers(x = 0, y = 0) {
    return x + y;
}

let result = addTwoNumbers(4,5);
console.log(result is ${result});*/

/*let resultsArr = [];
for (let i = 0; i < 10; i++) {
    let result = addTwoNumbers(i, i * 2);
    resultsArr.push(result);
}
console.log(resultsArr);*/

//6.4
// let resultsArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = (i*5,i*i);
//     resultsArr.push(result);
// }
// console.log(resultsArr);

// let addTwoNumbers = (x = 0, y = 0) => {
//     console.log("busy adding");
//     return x + y;
// };

// let resultArr = [];

// for (let i = 0; i < 10; i++) {
//     let result = (i * 5, i * i);
//     resultArr.push(result);
// }
// console.log(resultArr);

// testAvailability("Hi");
// function testAvailability(x) {
//     console.log(`Available here ${x}`);
// }

// console.log(`not available here ${x}`);
// function testAvailability(x) {
//     let y = "local variable";
//     console.log(`Available here ${y}`);
// }

// testAvailability("Hi");
// console.log(`not available here ${y}`);
// function testAvailability(x){
//     let y = "local variable";
//     console.log(`x is available here ${x}`);
//     console.log(`y is available here ${y}`);
// }

// testAvailability("Hi");
// console.log(`x is not available here ${x}`);
// console.log(`y is not available here ${y}`);

// function testAvailability() {
//     let y = "I'll return!";
//     console.log(`y is available here ${y}`);
//     console.log(`x is available here ${x}`);
//     return y
// }

// let a = "hi";
// let z = testAvailability(a);
// console.log(`z is available here ${z}`);
// console.log(`y is not available here ${y}`);

// let x;
// function doingStuff() {

//     if (true) {

//         x = "local";
//     }
//     console.log(x);
// }

// doingStuff();

// let x = "global";
// function doingStuff() {
//     let x = "local";
//     console.log(x);
// }
// console.log(x);

// doingStuff();
// console.log(x);

// doingStuff();
// function doingStuff() {
//     let x = "local";
//     console.log(x);
// }


//6.5
// ((name) => console.log(name))("Code College")

// let val = 1000;

// let val2 = (()=>{
//    let val = "Lettie";
//    console.log(`inside function val ${val}`);
//    return val;
// })()

// console.log(`outside function val ${val}`);
// console.log(`outside function val2 ${val2}`);

// function getRecursive(nr) {
//     console.log("start function: " + nr);
//     console.log(nr);
//     if (nr>0){
//     getRecursive(--nr);
//     }else{
//         console.log("done with recursion" + nr);
//     }
//     console.log("finished function" + nr);
// }

// getRecursive(3);
//6.6
// function calcFactorial(nr) {
//     if (nr === 0) {
//         return 1;
//     } else {
//         return nr * calcFactorial(nr - 1);
//     }
// }

// let num = Number(prompt("Give me a number to calculate a factorial"));
// let factorial = calcFactorial(num);
// alert(`The factorial of ${num} is ${factorial}`);



// function doOuterFunctionStuff(nr) {
//     console.log("outer Function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log(nr);
//     }
//     console.log("I can access outer variables:", nr);
// }
// doOuterFunctionStuff(2);

// let myFunc = function (college) {
//     alert(`I learn a lot at this ${college}`);
// }

// myFunc("javascript");

// function functionVariable() {
//     console.log("Not so secret though.");
// }

// function doFlexiblestuff(executeStuff) {
//   executeStuff();
// }

// doFlexiblestuff(functionVariable);

// function sayHey () {
//     alert("Hi Java");
// }
// doFlexiblestuff(sayHey);

//6.7
// const test = function(val){
//     console.log(val);
//     }
//     test('hello 1');
//     function test1(val){
//     console.log(val);
//     }
//     test1("hello 2");

//example 
// function doOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
//     console.log("Not accessible:", z);
// }
// doOuterFunctionStuff(2);

// function doOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
// }
// doInnerFunctionStuff(3);

//6.7
// let start = 10;
// function loop1(val) {
//     console.log(val);
//     if (val < 1) {
//         return;
//     }
//     return loop1(val - 1);
// }
// loop1(start);
// function loop2(val) {
//     console.log(val);
//     if (val > 0) {
//         val--;
//         return loop2(val);
//     }
//     return;
// }
// loop2(start);

//examples
// function doingStuffAnonymously() {
//     console.log("Not so secret though.");
// }

// function () {
//     console.log("Not so secret though.");
// };

// let functionVariable = function () {
//     console.log("Not so secret though.");
// };

//6.8
// const test = function (val) {
//     console.log(val);
// }
// test('hello 1');
// function test1(val) {
//     console.log(val);
// }
// test1("hello 2");