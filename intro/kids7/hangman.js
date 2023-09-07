 // var message = "Hello World";
// alert(message);

// var name = prompt("what's your name?");
// console.log("Hello " + name);

// var likesCats = confirm("Do you like cats?");
// if (likesCats) {
//     console.log("You're a cool cat!");
// } else {
//     console.log("Yeah, that's fine. You're still cool!")
// }

// alert("javaScript is awesome!");
// var words = [
//     "javascript",
//     "monkey",
//     "amazing",
//     "pancake"
//     ];
// var word = words[Math.floor(Math.random() * words.length)];

// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }

// var remainingLetters = word.length;

// while (remainingLetters > 0) {
//     // Game code goes here
//     // Show the player their progress
//     // Take input from the player
//     // Update answerArray and remainingLetters for every correct guess
// }
//alert(answerArray.join(" "));

// var guess = prompt("Guess a letter, or click Cancel to stop playing.");
//  if (guess === null) {
//     break;
//      } else if (guess.length !== 1) {
//     alert("Please enter a single letter.");
//     } else {
//     // Update the game state with the guess
//     }
// for (var j = 0; j < word.length; j++) {
//      if (word[j] === guess) {
//     answerArray[j] = guess;
//      remainingLetters--;
//     }
//     }
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);
 
////Programme challenges.
 /*// Create an array of words
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
var word = words[Math.floor(Math.random() * words.length)];
// Set up the answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
var noguess = 0;
// The game loop
while (remainingLetters > 0 && noguess < 4) {
    // Show the player their progress 
    alert(answerArray.join(" "));
    // Get a guess from the player
    var guess = prompt("Guess a letter, or click Cancel to stop playing.").toLocaleLowerCase();
    if (guess === null) {
        // Exit the game loop
        break;
    } else if (guess.length !== 1){
        alert("Please enter a single letter.");
    }else {
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters --;
            }
        }
    }
    noguess ++;
    //The end of the game loop
}
// Show the answer and congratulate the player
alert(answerArray.join(" "));
alert("Good job! The answer was " + word);*/
