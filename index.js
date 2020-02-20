"use strict";
var fs = require("fs");
var Word = require("./Word.js");
var inquirer = require('inquirer');
var word = new Word();
var arr = ["one", "two", "three"];
var random = Math.floor(Math.random() * arr.length);
var currentWord = "banana";

word.Word(currentWord);
word.display;