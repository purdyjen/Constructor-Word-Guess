"use strict";
var fs = require("fs");
var Letter = require("./Letter");
// var currentWord = "banana";
// var guessedLetter = "a";

function Word(currentWord, guessedLetter) {

    this.wordToLetters = function (currentWord, guessedLetter) {
        var characters = currentWord.split("");
        this.newArr = characters.map(function(character, index) {
        this.letters = new Letter().letter.check(guessedLetter, character);
        console.log("Letter Check Parameters: " + guessedLetter, character);
        letter.display(letter.guess, character);
        console.log({Key:index, value:character});
    });
}
}

module.exports = Word;