"use strict";
// var guessedLetter = "a";
var Letter = function () {
    // this.character = character;
    // var guess = this.guess;
    this.guess = false;
    this.check = function(guessedLetter, character) {
        if (guessedLetter == character) {
            this.guess = true;
            console.log("True");
            return this.guess;
        } else {
            console.log(guessedLetter, character);
        }
    }
}

Letter.prototype.display = function(guess, character) {
    if (guess == false) {
        return "_"
    } else {
        return character;
    }
}

module.exports = Letter;
