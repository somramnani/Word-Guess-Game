var batmanCharacter = ["Bruce Wayne", "Dick Grayson", 
                        "Nightwing" , "Jason Todd" ];


// Create the vairables to hold the number of wins, the words

var wins = 0;
var guessCount = 15;
var currentGuesses = [];

// Create variables that hold references to the places in the Html where we want to display things.
var winsText = document.getElementById("wins-text");
var userChoiceText = document.getElementById("userchoice-text");
var guessText =  document.getElementById("guess-text");

 // Create the computers random word
 var computerGuess = batmanCharacter[Math.floor(Math.random() * batmanCharacter.length)];
console.log(computerGuess);




document.onkeyup = function (event){
  var userGuess = event.key;
  currentGuesses.push(userGuess);


for (let i = 0; i < computerGuess.length; i++){
  var letter =  computerGuess[i];
  
  if (userGuess === letter){
    alert("Got one right!");
  }
  
}







  winsText.textContent = "Wins: " ;
  guessText.textContent = "Guesses:" + guessCount;
  userChoiceText.textContent =  currentGuesses;
}