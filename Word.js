"use strict";
var fs = require("fs");
var Letter = require("./Letter");

// var word = "banana";
// var guessedLetter = process.argv[2];

function Word(word) {
    var characters = word.split("");
   var map = characters.map(function(character, index) {
    var letter = new Letter(character);
    // this.char = function(char) {letter.check(char)};
    return letter.display(character);
    //   console.log("Display: " + letter.display(character));
    //    console.log({Key:index, value:character});
    });
    
}

module.exports = Word;