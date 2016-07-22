//This file randomly selects a word for the player to guess

var game = {
	wordList: ["WILL 'THE FRESH PRINCE' SMITH", "PHILIP BANKS", 
	"VIVIAN BANKS", "CARLTON BANKS", "HILLARY BANKS", "ASHLEY BANKS", 
	"GEOFFREY", "NICKY BANKS", "JAZZ", "VY SMITH", "LISA WILKES", "JACKIE AMES", "DEE DEE"],
	randomWord: function(){return this.wordList[this.randomInt(0, this.wordList.length)]},
	randomInt: function(min, max){return Math.floor(Math.random() * (max - min + 1)) + min},
}

exports.game = game;




