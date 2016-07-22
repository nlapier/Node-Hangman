//Constructor
// "letter.js should control whether or not a letter appears as a "_" or as itself on-screen."
var game = require("./game.js");
var Word = require("./word.js");

function Letter(letter){
	this.letter = letter.toLowerCase(),
	this.guessed = false
}

Letter.prototype.display = function(){
	if (this.guessed){return this.letter}
	else{return"_"}
}

Letter.prototype.checkGuess = function(userGuess){
	if (userGuess === this.letter){
		this.guessed = true;
	}
}

module.exports = Letter;