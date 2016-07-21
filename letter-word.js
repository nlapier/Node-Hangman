//Constructor
//This file determines what is displayed to the screen, starting with a string of underscores, 
//then replacing those underscores with correctly-guessed letters

var game = require("./game.js");

String.prototype.replaceAt = function(index, letter) {
    return this.slice(0, index) + letter + this.slice(index+letter.length);
};

function createDisplayWord(){
	for (var i = 0; i < currentWord.length; i++){
		if (currentWord[i] === " "){
			displayWord += " ";
		}
		else {displayWord += "_"}
	}
}


function wordScan(){
	for (var i = 0; i < currentWord.length; i++){
		if (userInput === currentWord[i]){
			displayWord = displayWord.replaceAt(i, userInput);
		}
	}
}
