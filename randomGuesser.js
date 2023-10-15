const prompt = require("prompt-sync")();

const target = 10 + Math.round (Math.random() *90);

let guesses = 0;

const guess = Number (prompt("Guess the number (0-100): "));
console.log(guess);