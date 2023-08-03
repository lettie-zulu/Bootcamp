const arrayoption = ["Rock", "Paper", "Scissors"];
let playernum = Math.floor(Math.random() * 3); 
let compnum   = Math.floor(Math.random() * 3); 
let outputMessage = "Player Selected " + arrayoption[playernum] + " vs Computer Selected " + arrayoption[compnum] + " "; 

if (playernum === compnum) { 
    outputMessage += "This game is a tie"; 
} else if (playernum > compnum) { 
    if (compnum == 0 && playernum == 2) { 
        outputMessage += "The Computer Wins"; 
    } else { 
        outputMessage += "The Player Wins"; 
    } 
} else { 
    if (compnum == 2 && playernum == 0) { 
        outputMessage += "The Player Wins"; 
    } else { 
        outputMessage += "The Computer Wins"; 
    } 
} 

console.log(outputMessage);