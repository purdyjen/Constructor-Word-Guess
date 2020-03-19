"use strict";

var Letter = function(character, guessedLetter) {
  this.character = character;
  this.guessed = false;
  this.check = function() {
    if (this.character == guessedLetter) {
      this.guessed = true;
    }
  };
  this.display = function(character) {
    if (this.guessed) {
      return this.character;
    } else {
      return " _ ";
    }
  };
};

module.exports = Letter;
