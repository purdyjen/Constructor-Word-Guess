"use strict";
var fs = require("fs");
var Word = require("./Word.js");
var inquirer = require("inquirer");
var arr = [
//   "JEDI",
//   "SITH",
//   "FORCE",
//   "YODA",
//   "SKYWALKER",
//   "LIGHTSABER",
//   "BLASTER",
//   "EMPIRE",
//   "DROIDS",
//   "PRINCESS",
//   "SHIP",
//   "SPACE",
//   "LANDO",
//   "JABBA",
//   "CHEWBACCA",
//   "LIGHTSPEED",
//   "REBEL",
//   "ALLIANCE",
//   "STARDESTROYER",
//   "PLANET",
//   "GALAXY",
//   "STORMTROOPER",
//   "PADAWAN",
  "MASTER"
];
var random = Math.floor(Math.random() * arr.length);
var randomWord = arr[random];
var rightGuesses = [];
var wrongGuesses = [];
var guessesLeft = 10;

function initialDisplay() {
    var display = "";
    for (var i =0; i < randomWord.length; i++) {
        display += " _ ";
    }
    console.log(display);
}
initialDisplay();

function initialCheck (input) {
    var check = randomWord.split("").includes(input);
    // console.log("Split: " + randomWord.split(""));
    console.log("Check: " + check);
    if (check) {
        var upperCaseInput = input.toUpperCase();
        rightGuesses.push(upperCaseInput);
        console.log("Right Guesses: " + rightGuesses);
        insertCorrectLetters();
    } else {
        wrongGuesses.push(input);
        console.log("Wrong Guesses: " + wrongGuesses);
        console.log(wrongGuesses);
        guessesLeft--;
        if (guessesLeft > 0) {
        insertCorrectLetters();
        console.log("Guesses Left: " + guessesLeft);
        } else {
            console.log("No more guesses! You lose!");
        }
    }
    userInput();
}

function insertCorrectLetters() {
    for (var i = 0; i < rightGuesses.length; i++) {
        var guessedLetter = rightGuesses[i];
        var word = new Word(randomWord, guessedLetter);
        console.log("Guessed Letter: " + guessedLetter);
        // initialCheck(guessedLetter);
        word.check();
        word.combine();
    }
}

function userInput() {
inquirer.prompt([
    {
        name: "guess",
        type: "input",
        message: "Guess a Letter"
    }
]).then(function(answer) {
    // insertCorrectLetters();
    // var guessedLetter = answer.guess;
    //     guessedLetter = guessedLetter.toUpperCase();
    //     var word = new Word(randomWord, guessedLetter);
    //     console.log("Guessed Letter: " + guessedLetter);
    //     // initialCheck(guessedLetter);
    //     word.check();
    //     word.combine();
    var upperize = answer.guess;
    upperize = upperize.toUpperCase();
    console.log(upperize);
    initialCheck(upperize);
    userInput();
});
}

userInput();

//guessed letter array
//wrong guess array
//check guess against arrays
//return characters in guessed letter array before additional user input
//call functions outside of inquirer function