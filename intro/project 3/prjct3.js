
let secret = Math.floor(Math.random() * 10);

let answer = false;

while (answer == false) {
    guess = parseInt(prompt("Please guess the secret number (1-10)"));

    if (guess === secret) {
        alert("Correct!");
        answer = true;
    } else if (guess > secret) {
        alert("Sorry, incorrect!, too High");
    } else {
        alert("Sorry, incorrect!, too Low");
    }
}

