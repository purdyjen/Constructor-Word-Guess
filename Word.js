"use strict";
var fs = require("fs");
var Letter = require("./Letter");
var currentWord = "banana";
var guessedLetter = "a";

function Word(currentWord) {
    var characters = currentWord.split("");
    // this.guessLetter = function (guessedLetter) {letter.check(guessedLetter)};
    
   var map = characters.map(function(character, index) {
    var letter = new Letter();
     letter.check(guessedLetter, character);
     console.log(guessedLetter, character);
    letter.display(letter.guess, character);
     console.log({Key:index, value:character});
    //   console.log("Display: " + letter.display(character));
    });
    
}
Word(currentWord);
module.exports = Word;