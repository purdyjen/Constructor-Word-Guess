"use strict";
// var guessedLetter = "a";
var Letter = function (character) {
    this.character = character;
    this.guess = false;
    this.check = function(char) {
        if (char === character) {
            this.guess = true;
            console.log("True");
            return true;
        } else {
            console.log(char, character);
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
