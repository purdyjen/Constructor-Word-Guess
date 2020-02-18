"use strict";
var fs = require("fs");
var Word = require("./Word.js");
var inquirer = require('inquirer');
// var Word = new Word();
var arr = ["one", "two", "three"];

// function Game() {
//     var random = Math.floor(Math.random() * arr.length);
//     var word = new Word(arr[random]);
// }

var Game = function () {
    // this.currentWord = '';
    var self = this; //if issues with inquirer, fix this
    var random = Math.floor(Math.random() * arr.length)
    self.currentWord = new Word(arr[random])
};


// Game();
inquirer.prompt([
    {
        type: "input",
        message: "Choose a letter!",
        name: "choose"
    }
]).then(function(answer) {
    if(answer.choose){
        var char = answer.choose;
        Game();

    }
});