//__________________________________________________________
//VARIABLES
//__________________________________________________________

var batmanCharacter = ["Bruce Wayne", "Dick Grayson", 
                        "Nightwing" , "Jason Todd" ];




// Create the vairables to hold the number of wins, the words

var wins = 0;
var guessCount = 15;
var correctWord = [];
var currentGuesses = [];
var lettersOfRandomWord =[] ;

// Create variables that hold references to the places in the Html where we want to display things.
var winsText = document.getElementById("wins-text");
var userChoiceText = document.getElementById("userchoice-text");
var guessText =  document.getElementById("guess-text");
var correctText =  document.getElementById("correct-text");

 // Create the computers random word
var computerGuess = batmanCharacter[Math.floor(Math.random() * batmanCharacter.length)];
console.log(computerGuess);

//__________________________________________________________
//GAME FUNCTION
//__________________________________________________________
document.onkeyup = function (event){
  var userGuess = event.key;
  currentGuesses.push(userGuess);

  lettersOfRandomWord = computerGuess.split("");
  console.log(lettersOfRandomWord);

  if(userGuess === lettersOfRandomWord){
    correctWord.push(userGuess);
  }
  console.log(correctText);
  



  

//__________________________________________________________
//RESET FUNCTION
//__________________________________________________________

 // if the user is out of guesses:
  if (guessCount === 0){
    alert("You lost! The letter I was thinking of was " + computerGuess);

    //Erases the current guesses the user has guessed
    currentGuesses.length = 0;
  
    // sets  the guess counter back to 9
    guessCount = 15;

     //Erases the current guesses the user has guessed
     correctWord.length = 0;
  
    // Resets the computer guesss
    computerGuess = batmanCharacter[Math.floor(Math.random() * batmanCharacter.length)];
    console.log(computerGuess);
  }  
  else {
    // If none of the others are true decrease the guesses
    guessCount--;
  }






  winsText.textContent = "Wins: " ;
  correctText.textContent = correctWord;
  guessText.textContent = "Guesses:" + guessCount;
  userChoiceText.textContent = "Letters Already Guessed:" + currentGuesses;
}