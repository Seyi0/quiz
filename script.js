const prompt = require("prompt-sync")()

console.log("Welcome to Seyi's safe space quiz!");

let correctAnswer = 0;
const totalQuestions = 3;

const answer1 = prompt("What is my full name?")
const correctAnswer1 = "OLUWASEYI MAKANJUOLA";

//now conditional statement comes in$$$$. It evaluate true or false statement......

if (answer1.toUpperCase() === correctAnswer1) {
    console.log("You're correct");
    correctAnswer++;
} else{
    console.log("You're wrong....");
}

const answer2 = prompt("Who is the president of Nigeria?");
const correctAnswer2 = "BOLA AHMED TINUBU";

if (answer2.toUpperCase() === correctAnswer2) {
    console.log("You're correct");
    correctAnswer++;
} else{
    console.log("You're wrong....")
}

const answer3 = prompt("How many states does Nigeria have?");
const correctAnswer3 = 36;

if (answer3 == correctAnswer3) {
    console.log("You're correct");
    correctAnswer++;
} else{
    console.log("You're wrong....")
}

const percent = Math.round((correctAnswer/totalQuestions) * 100)

console.log("You got", correctAnswer, "questions correct");
console.log("You scored",percent.toString + "%");