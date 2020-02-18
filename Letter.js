"use strict";
// var guessedLetter = "a";
var Letter = function (character) {
    this.character = character;
    this.guess = false;
    this.check = function(guessedLetter) {
        if (guessedLetter === character) {
            this.guess = true;
            console.log("True");
            return true;
        } else {
            console.log(guessedLetter, character);
        }
    }
}

Letter.prototype.display = function(character) {
    if (this.guess === false) {
        return "_"
    } else {
        return character;
    }
}

module.exports = Letter;
