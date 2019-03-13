//__________________________________________________________
//GLOBAL VARIABLES
//__________________________________________________________

var wordGuess = [ "Catwomen", "Nightwing", "Robin", "Alfred","Joker",
									"Scarecrow","Riddler"];


// Create the vairables to hold the number of wins, the words
var wins = 0;
var guessCount = 15;
var correctWord = [];
var currentGuesses = [];



// Create the computers random word
var computerGuess = wordGuess[Math.floor(Math.random() * wordGuess.length)];
//Turns the random word into a variable
var computerGuessStr = computerGuess.split("");

console.log(computerGuess);
console.log(computerGuessStr);

$(document).ready(function(){
	//__________________________________________________________
	//ON KEYUP FUNCTION
	//__________________________________________________________
	document.onkeyup = function (event){
		var userGuess =  event.key;
		currentGuesses.push(userGuess);
		

		$("#userchoice-text").html(currentGuesses);
		// console.log("userGuess: " + userGuess);
		// console.log("currentGuess Array: " + currentGuesses);
	
		//__________________________________________________________
		//FOR LOOP 
		// checks if the letter inputed is correct. 	
		//__________________________________________________________

		// for(let i =0; i<computerGuessStr.length;i ++){
		// 	correctWord.push(' _ ');

		// }
		for(let i = 0; i <computerGuessStr.length; i++){
			var letter = computerGuessStr[i];
			console.log(letter);
			console.log("i = " + i)
		
			if(userGuess === letter.toLowerCase()){
				correctWord.splice(i, 0, letter);
				console.log("correctWord Array:" + correctWord)
				$("#correct-text").html(correctWord);
			}
		}
		//__________________________________________________________
	
	
	}
	//__________________________________________________________


});