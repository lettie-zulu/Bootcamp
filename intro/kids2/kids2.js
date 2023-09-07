//Numbers and operators.
// console.log(123 * 99);
// console.log(22+23+44);
// console.log(1000-17);
// console.log(12345/250)
// console.log((1234+57)*3-31/4);
// console.log(8/(1+3));
// console.log((15+9)*2);//the symbols we used to calculate these numbers are called operators.

//variables
// let nick;
// let age = 12;
// console.log(nick);
// console.log(age);
// age = 13;// we can use the equal sign to update the variable. 
// console.log(age);

// let numberOfSiblings = 1+3;
// let numberOfCandles = 8;
// console.log("My answer is ", numberOfCandles/numberOfSiblings);//here javascript works out 8/4 which gives us 2.

////creating new variables using math.
////Seconds in hour.
// let secondsInAMinute = 60;
// let minutesInAnHour = 60;
// let secondsInAnHour = secondsInAMinute*minutesInAnHour;
// console.log(secondsInAnHour);//this gives us the value of seconds in an hour.

////seconds in a day.
// let hoursInADay = 24;
// let secondsInADay = secondsInAnHour*hoursInADay;
// console.log(secondsInADay);

////seconds in a year.
// let daysInAYear = 365;
// let secondsInAYear = secondsInADay*daysInAYear;
// console.log(secondsInAYear);

////age in seconds.
// age = 21;
// console.log("I am", age*secondsInAYear, "seconds old");

////incrementing and decrementing.
// let highFives = 0;
// ++highFives;
// console.log(highFives);
// --highFives;
// console.log(highFives);
// let highFives = 0;
// console.log(highFives++ + 5);

////plus equals and minus equals
// let x = 10;
// x = x + 5;
// console.log(x);
// let x = 10;
// x +=5;
// console.log(x)
// let score = 10;
// score += 7;
// score -= 3;
// console.log(score);

////Trying it out!
// let balloons = 100;
// balloons *= 2;
// console.log(balloons);//This gives the value of 200
// let balloons = 100;
// balloons /= 4;
// console.log(balloons);//This will give us the value of 25

////Strings
// let numberNine = 9;
// let stringNine = "9";
// console.log(numberNine + numberNine);
// console.log(stringNine + stringNine);

////joining strings
// let greeting = "Hello";
// let myName = "Nick";
// console.log(greeting + "" + myName);

////Finding the length of the string.

// console.log("Lettie".length);

// let string = "Lettie";
// console.log(string.length);

////Getting a single character from a string.
// let myName ="Nick";
// console.log(myName.indexOf("c"));
// console.log(myName.length-1);
// console.log(myName[myName.length-1]);
// let codeWord1 = "actual";
// let codeWord2 = "monk";
// let codeWord3 = "room";
// let codeWord4 = "akene";
// let code = codeWord1[1] + codeWord2[1] + codeWord3[1] + codeWord4[1];
// console.log(code);

////Cutting up strings.
// console.log("A string".slice(2));
// let longString = "My long string is long";
// console.log(longString.slice(3,14));
// console.log(longString.slice(8,17))
// let longString = "My string is long";
// console.log(longString.slice(3));

////changing strings to all capital or all lowercase letters.
// console.log("Hello there. How are you doing?".toUpperCase());
// console.log("Hello there. How are you doing?".toLocaleLowerCase());
// let x = "hELlo THERE, hOW ARE yOu doINg?";
// x = x[0].toUpperCase() + x.slice(1).toLowerCase();
// console.log(x);

////Booleans
// let javaScriptIsCool = true;
// console.log(javaScriptIsCool);

////Logical operators.
// let hadShower = true;
// let hasBackpack = true;
// let goToSchool = hadShower && hasBackpack;
// console.log(goToSchool);
// let hasApple = true;
// let hasOrange = true;
// let goToSchool = hasApple || hasOrange;
// console.log(goToSchool + "go to school");
// let isWeekend = confirm("Is it weekend?");
// let hadShower = confirm("Did you have a shower");
// let hasApple =  confirm("Do you have an apple");
// let hasOrange = confirm("Do you have an orange");
// let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
// alert("Should you got to school?" + shouldGoToSchool)

////Comparing numbers with booleans.
// let height = prompt("What is your height?"); 
// let heightRestriction = 60;
// alert("Is allowed on the ride?"+ (height >= heightRestriction));
//let height = prompt("What is your height?");
//let heightRestriction = 48;
//alert("Is allowed on the ride?" + height < heightRestriction);
// let mySecreteNumber = 5;
// let chicoGuess = 3;
// alert("Chico is " + (mySecreteNumber === chicoGuess));
// let harpoGuess = 7;
// alert("Harpo is " + (mySecreteNumber === harpoGuess));
// let grouchoGuess = 5;
// alert("Grouch is " + (mySecreteNumber === grouchoGuess));
// let stringNumber = "5";
// let actualNumber = 5;
// console.log(stringNumber == actualNumber);
// let age = prompt("What is your age?");
// let accompanied = confirm("Are you accompanied by an adult? ");
// alert("you are allowed to watch" + (age >=13 || accompanied));