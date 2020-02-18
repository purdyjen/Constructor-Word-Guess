"use strict";
var fs = require("fs");
var Letter = require("./Letter");

var word = "banana";
var guessedLetter = process.argv[2];

function Word(word) {
    var characters = word.split("");
   var map = characters.map(function(character, index) {
    var letter = new Letter(character);
    //    console.log(letter.character);
    //    console.log(letter.guess);
    //    console.log(letter.check(guessedLetter));
      console.log("Display: " + letter.display(character));
       console.log({Key:index, value:character});
       console.log(guessedLetter);
       

    });
    
}

Word(word);