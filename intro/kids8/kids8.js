// let ourFirstFunction = function(){
//     alert('Hello');
// }
// ourFirstFunction();

// function ourFirstFunction(){
//     alert("Hello world!")
// }
// ourFirstFunction();

// function sayHello(name){
//     console.log("Hello ", name);
// }
// sayHello("Lettie");

// function drawCats(howManyTimes,whatToDraw){
//     for(let i=0; i<howManyTimes; i++){
//     console.log(i, whatToDraw);
// }
// }
// drawCats(15,"00");

// function double(number){
//     return number*2;
// }
// console.log(double(8) + double(10));
// console.log(double(double(3)));

// function product(x,y){
//     return x*y;
// }
// console.log("The product is " + product(14,2));

// function sportsMenAward(recipient, country){
//     let sportsMan = {"recipient": recipient , "country": country}
//     return  sportsMan;
// }
// let LsportsMan = sportsMenAward("Caster Semenya", "South Africa");
// alert(LsportsMan.recipient + " received the an award for the best athlete in 2020");

// function pickRandomWord(words){
//     return words [Math.floor(Math.random()*words.length)];
// }


/*var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// Pick a random body part from the randomBodyParts array:
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
// Pick a random adjective from the randomAdjectives array:
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)]; 
// Pick a random word from the randomWords array:
var randomWord = randomWords[Math.floor(Math.random() * 5)];
// Join all the random strings into a sentence:
var randomString = "Your " + randomBodyPart + " is like a " +
randomAdjective + " " + randomWord + "!!!";
randomString;

var randomBodyParts = ["Face", "Nose", "Hair"];
var randomAdjectives = ["Smelly", "Boring", "Stupid"];
var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
// Join all the random strings into a sentence:
var randomString = "Your " + pickRandomWord(randomBodyParts) + 
" is like a " + pickRandomWord(randomAdjectives) + 
" " + pickRandomWord(randomWords) + "!!!";
randomString;

generateRandomInsult = function () {
 var randomBodyParts = ["Face", "Nose", "Hair"];
 var randomAdjectives = ["Smelly", "Boring", "Stupid"];
 var randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];
 // Join all the random strings into a sentence:
 var randomString = "Your " + pickRandomWord(randomBodyParts) + 
 " is like a " + pickRandomWord(randomAdjectives) + 
 " " + pickRandomWord(randomWords) + "!!!";
 return randomString;
};
generateRandomInsult();
*/
/*function fifthLetter (name) {
    if (name.length < 5) {
        return;
    }
    return "The fifth letter of your name is " + name[4] + ".";
};
console.log(fifthLetter("Nick"));*/
/*
var add = function(a, b){
    return a + b;
}

var multiply = function(a, b) {
    return a * b;
}

var ansMulti = multiply(36325, 9824);
add(ansMulti, 777);


var areArraysSame = function(a, b){
    if (a.length != b.length){
        return false;
    } else{
        for (let i = 0; i < a.length; i++) {
            if(a[i] != b[i]){
                return false
            } else {
                return true;
            }
        }
    }
}
console.log(areArraysSame([1, 2, 3], [1, 2, 3]);

console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4]);

console.log(areArraysSame([1,2,3],[4,5,6])),


// Write your function here  
var pickWord = function () {
    // Return a random word
        var words = [
           "javascript",
           "monkey",
           "amazing",
           "pancake",
           "mother",
           "space",
           "loud",
           "happiness",
       ];
       //Pick a random word
       return words[Math.floor(Math.random() * words.length)];
   };
   var setupAnswerArray = function (word) {
       // Return the answer array
       var answerArray = [];
       for (var i = 0; i < word.length; i++) {
           answerArray[i] = "_";
       }
       return answerArray;
   };
   var showPlayerProgress = function (answerArray) {
    // Use alert to show the player their progress
       alert(answerArray.join(" "));
   };
   var getGuess = function () {
    // Use prompt to get a guess
       var guess = prompt("Guess a letter, or click Cancel to stop playing.").toLocaleLowerCase();
       return guess;
   };
   var updateGameState = function (guess, word, answerArray) {
    // Update answerArray and return a number showing how many
    // times the guess appears in the word so remainingLetters
    // can be updated
       for (var j = 0; j < word.length; j++) {
           if (word[j] === guess) {
               answerArray[j] = guess;
               remainingLetters --;
           }
       }
   };
   var showAnswerAndCongratulatePlayer = function (answerArray) {
    // Use alert to show the answer and congratulate the player
       alert(answerArray.join(" "));
       alert("Good job! The answer was " + word);
   };
   
   var word = pickWord();
   var answerArray = setupAnswerArray(word);
   var remainingLetters = word.length;
   
   while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
    break;
    } else if (guess.length !== 1) {
    alert("Please enter a single letter.");
    } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
    }
   }
   
   showAnswerAndCongratulatePlayer(answerArray)*/
