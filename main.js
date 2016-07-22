// "main.js will contain the logic of your app. Running it in Terminal/Bash will start the game."
// "The app should end when a player guesses the correct word or runs out of guesses."
/*

 0
-|-
 /\

*/
//Dependencies
var game = require("./game.js");
var word = require("./word.js");
var letter = require("./letter.js");
var inquire = require("inquirer");

//Game Variables
var question = [{
  name: "guess",
  message: "Guess a letter"
}]

var randomWord;
var wordObj;

// inquirer.prompt(questions).then(function(answers){
// 	var input = answers.guess;
// 	letter.wordScan()
//******************GAME**********************
var game = {
	wordList: ["abstract", "aesthetic", "alleviate", "ambivalent", "apathetic", "auspicious", "benevolent",
	 "candor", "cogent", "comprehensive", "contemporary", "conviction", "diligent", "dubious", "eclectic", "egregious",
	 "exculpate", "florid", "gratuitous", "hackneyed"],
	randomWord: function(){return this.wordList[this.randomInt(0, this.wordList.length)]},
	randomInt: function(min, max){return Math.floor(Math.random() * (max - min + 1)) + min}
}
//******************GAME**********************
//******************WORD**********************
// "word.js should contain all of the methods which will check the letters guessed versus the random word selected."

function Word(randomWord){
	this.randomWord = randomWord,
	this.displayWord = ""
	this.guessesLeft = Math.floor(randomWord.length*1.5)
}

Word.prototype.letterize = function(){
	for (var i = 0; i < this.randomWord.length; i++){
		this[i] = new Letter(this.randomWord[i]);
	}
}

Word.prototype.checkGuessLoop = function(userGuess){
	for (var i = 0; i < this.randomWord.length; i++){
		this[i].checkGuess(userGuess)
	}
	this.guessesLeft--;
}

Word.prototype.updateDispayWord = function(){
	this.displayWord = "";
	for (var i = 0; i < this.randomWord.length; i++){
		this.displayWord += this[i].display()
	}
}

Word.prototype.displayStats = function(){
	console.log("Complete this word: " + this.displayWord);
	console.log("You have " + this.guessesLeft + " guesses left");
}

//******************LETTER**********************
// "letter.js should control whether or not a letter appears as a "_" or as itself on-screen."

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
//******************GAME LOGIC**********************


function mainFunc(){
	if (wordObj.randomWord === wordObj.displayWord){
		console.log("You Win!")
		return;
	}
	else if (wordObj.guessesLeft){
		inquirer.prompt(questions).then(function(answers){
			var userGuess = answers.guess;
			wordObj.checkGuessLoop(userGuess);
			wordObj.updateDispayWord();
			wordObj.displayStats();
			mainFunc();
		})
	}
	else{
		console.log("Game Over!")
		return;
	}
}

//******************RUN GAME**********************


randomWord = game.randomWord();

wordObj = new Word(randomWord);

wordObj.letterize();

wordObj.displayStats();

mainFunc();






/* Storage
function Word(){
}

Word.prototype.letterize = function(randomWord){
	for (var i = 0; i < randomWord.length; i++){
		this[i] = new Letter(randomWord[i])
	}
}

Word.prototype.checkGuess = function(userGuess){
	//Display version of the random word, which will be visible to the user.
	var displayWord = "";
	//correctGuess flips to true if the user guesses a correct letter.
	var correctGuess = false;
	//completeWord controls the endgame sequence 
	var completeWord = true;

	//Check the user's guess against each letter object in this word object.
	for (key in this){

		//If this user guessed correctly, switch the respective letter object, and the variable correctGuess to "true".
		if (userGuess === this[key].letter){
			this[key].guessed = true;
			correctGuess = true;
		}

		//If any letters have not yet been guessed, the end-game sequence will not fire.
		if (!this[key].guessed){completeWord = false};

		//Either way, add the "display letter" (either the actualy letter, or an underscore) to displayWord.
		displayWord += this[key].display()
	}
	//Once the loop is finished, print displayWord to the console.
	if ()
	if (correctGuess){console.log("Good guess!")}
	else{console.log("Try again!")}
	console.log(displayWord)
	
}


Word.prototype.checkGuess = function(userGuess){
	//Display version of the random word, which will be visible to the user.
	var displayWord = "";
	//correctGuess flips to true if the user guesses a correct letter.
	var correctGuess = false;
	//completeTally checks if every letter has been guessed yet.
	var completeTally = true;

	//Check the user's guess against each letter object in this word object.
	for (key in this){

		//If this user guessed correctly, mark the respective letter object as "guessed", and switch correctGuess to true.
		if (userGuess === this[key].letter){
			this[key].guessed = true;
			correctGuess = true;
		}

		//Flips commpleteTally to false if any letters remain unguessed.
		if (!this[key].guessed){completeTally = false};

		//Either way, add the "display letter" (either the actualy letter, or an underscore) to displayWord.
		displayWord += this[key].display()
	}

	//Once the loop is finished, print displayWord to the console, along with the appropriate message.
	this.complete === completeTally;
	console.log(displayWord);
	if (correctGuess){
		console.log("Good guess!");
		//query function()
	}
	else{console.log("Try again!")};
}




*/
