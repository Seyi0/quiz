const prompt = require("prompt-sync")();

const target = Math.round (Math.random() *100);

let guesses = 0;

// console.log(target)
// understand while loop.

while (true){
const guess = Number (prompt("Guess the number (0-100): "));
// understand conditional statement.....
if (guess > target ) {
    console.log("Your guess is too high.");
} else if (guess<target){
    console.log("Your guess is too low.");
} else{
    console.log ("You guessed it!")
    break
    // break is used to terminate the code....
}
}

console.log("You guessed the number in", guesses,"tries!");