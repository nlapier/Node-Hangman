//This file randomly selects a word for the player to guess
var wordList = ["WILL 'THE FRESH PRINCE' SMITH", "PHILIP BANKS", 
"VIVIAN BANKS", "CARLTON BANKS", "HILLARY BANKS", "ASHLEY BANKS", 
"GEOFFREY", "NICKY BANKS", "JAZZ", "VY SMITH", "LISA WILKES", "JACKIE AMES", "DEE DEE"]

var currentWord = wordList[randomInt(0, wordList.length)];

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.currentWord = currentWord;
