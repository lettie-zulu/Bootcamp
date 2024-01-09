// let s = "Hello";
// console.log(s.concat("there!").toUpperCase().replace("THERE", " you").concat(" You're amazing!")
// );

// let x = 7;
// console.log(isNaN(x));

// let uri = "https://www.example.com/submit?name=maaike van putten";

// let encodedUri = encodeURI(uri);
// console.log(encodedUri);
// let decodedUri = decodeURI(encodedUri);
// console.log(decodedUri);
// let encodedString = "How's%20it%20going%3F";
// let decodedString = decodeURIComponent(encodedString);
// console.log(decodedString);
// encodedString = encodeURIComponent(decodedString);
// console.log(encodedString);

// //8.1
// let webUri = "http://www.basescripts.com?=Hello World";
// let encodedWebUri = encodeURI(webUri);
// console.log(encodedWebUri);

//example
// let str_float = "hhh";
// let int_float = Number(str_float);
// console.log("Type of", int_float, "is", typeof int_float);

// let str_float = "7.99";
// let float_float = Number(str_float);
// console.log("TypeOf", float_float, "is", typeof float_float);

// et arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//     console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff); l

// let arr = ["squirrel", 5, "Tjed", new Date(), true];

// arr.filter(checkString).forEach(printStuff);


function checkString(element, index) {
    return typeof element === "string";
}

function printStuff(element, index) {
    console.log("Printing stuff:", element, "on array position:", index);
}

function checkNumber(element) {
    return element > 100;
}

function startsWith(element) {
    return element.startsWith("T");
}

// let arr = ["Thato","Tobi","Thuli", "Sheryl"];
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// console.log(arr.every(startsWith));

// arr = ["grapefruit", 4, "hello", 5.6, true];
// console.log(arr);
// arr.copyWithin(0, 3);
// console.log(arr);

// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(arr);
// console.log(mapped_arr);

// let arr = [1, 2, 3, 4];
// arr.map(x=> x+1)
// arr.forEach(printStuff);

//8.2
// let arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike"];
// let arr2 = arr.filter ( (e, i, a) => {
// console.log(e,"in index",i);
// return a.indexOf(e) === i;
// })

// console.log(arr2)

// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3);

//example
// let caps = "HI HOW ARE YOU?";
// console.log(caps[0] + caps.slice(1).toLowerCase());

//example
// let encouragement = "You are doing great, keep up the good work!";
// let bool_start = encouragement.startsWith("You");
// console.log(bool_start);

//8.3
// const myArr = [1, 4, 5, 6];
// const myArr1 = myArr.map(function (ele) {
//     return ele * 2;
// });
// console.log(myArr1);
// const myArr2 = myArr.map((ele) => ele * 2);
// console.log(myArr2);

//8.4
// let sentence = "thIs will be capiTalized for each word";
// console.log(capWords(sentence));

// function capWords(sentence) {
//     let newArray = sentence.toLowerCase().split(" ");
//     let tempArr = [];
//     newArray.forEach(element=>{
//         let newE = element[0].toUpperCase() + element.slice(1).toLowerCase();
//         tempArr.push(newE);
//     });
//     return tempArr.join(" ");
// }

//8.5
// let sentence = "I love JavaScript";
// sentence = sentence.toLowerCase();

// let vowels = ["a","e","i","o","u"];

// vowels.forEach((element,index)=> {
//   sentence = sentence.replaceAll(element,index);
// });
// console.log(sentence);

//example
// let x = 1.23456;
// let newX = x.toPrecision(2);

// console.log(newX);

//example
// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);

//example
// let x = -6.78;
// let y = -5.34;
// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));
// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

//8.6
// console.log(Math.PI);
// console.log(Math.ceil(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());
// console.log(Math.floor(Math.random()* (10-0)+0));
// console.log(Math.floor(Math.random()* (10-1)+1));
// console.log(Math.floor(Math.random()* (100-1)+1));
// let min = 1;
// let max = 100;
// for(let i = 0;i<100;i++) {
//     console.log(Math.floor(Math.random()* (max-min)+min))
// }

// let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
// console.log(specificDate);

// let d1 = Date.parse("June 5, 2021");
// console.log(d1);

//8.7
// let Present = new Date(2023, 7, 13);
// console.log(Present);

// let months = ["January", "February", "March", "April", "May", "June",
// "July", "August", "September", "October", "November", "December"];

// let day = Present.getDate();
// let month = Present.getMonth();
// let year = Present.getFullYear();
// let myDate = `${months[month-1]} ${day} ${year}`;
// console.log(myDate);
