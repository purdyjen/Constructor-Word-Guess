"use strict";
var fs = require("fs");
var Letter = require("./Letter");

var Word = function(currentWord, guessedLetter, rightGuesses) {
  this.currentWord = currentWord;
  this.guessedLetter = guessedLetter;
  this.rightGuesses = rightGuesses;
  this.break = currentWord.split("").map(function(char) {
    return new Letter(char, guessedLetter);
  });

  (this.check = function(char, guessedLetter) {
    for (var i = 0; i < this.break.length; i++) {
      this.break[i].check();
    }
  }),
    (this.combine = function() {
      var output = "";
      for (var i = 0; i < this.break.length; i++) {
        output += this.break[i].display();
      }
      console.log("Output: " + output);
      return output;
    });
};

module.exports = Word;
