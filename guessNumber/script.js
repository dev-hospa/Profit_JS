/**
 * Guess The Number Game
 * TODO: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses 
let guesses = [];

// Variable for store the correct random number 
let correctNumber = getRandomNumber();
console.log(correctNumber)


window.onload = function() {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", initGame);
}

/**
 * Functionality for playing the whole game
 */
function playGame(){
  let numberGuess = document.getElementById("number-guess").value;
  saveGuessHistory(numberGuess);
  displayResult(numberGuess);
  displayHistory();
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement 
 */
function displayResult(numberGuess){
    if (numberGuess > correctNumber){
        clearInputField();
        showNumberAbove();
    } else if(numberGuess < correctNumber){
        clearInputField();
        showNumberBelow();
    } else {
        showYouWon();
        changeTitle();
        playSound();
        removeInputField();
        removeButton();
        removeHistory();
    }
}



/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame(){
  // *CODE GOES BELOW HERE *
  // resetResultContent();
  location.reload();
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent(){
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random 
 */
function getRandomNumber(){
  let randomNuber = Math.floor(Math.random() * 100) + 1;
  return randomNuber;
}

/**
 * Save guess history 
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  guesses.push(guess);
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index = guesses.length; 
  let list = "<ul class='list-group'>";
  for(let i = index - 1; i >= 0 ; i--){
      list += '<li class="list-group-item">' +
      "You guessed " + guesses[i] + '</li>'
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}



/**
 * Retrieve the dialog based on if the guess is wrong or correct 
 */
function getDialog(dialogType, text){
  let dialog;
  switch(dialogType){
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>"
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>"
      break;
  }
  dialog += text;
  dialog += "</div>"
  return dialog;
}

function showYouWon(){
  const text = "Awesome job, you got it!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters 
   */
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove(){
  const text = "Your guess is too high!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow(){
  const text = "Your guess is too low!"
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters 
   */
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function changeTitle(){
    let title = document.getElementById("title");
    title.innerHTML = '<img src="https://i.gifer.com/VZvx.gif" alt="firework" height="250" width="239">' + correctNumber;
    title.style.setProperty("color", "red");
    title.style.setProperty("font-size", "90px");

}

function removeInputField(){
    document.getElementById("number-guess").remove();
}

function removeButton(){
    document.getElementById("number-submit").remove();
}

function removeHistory(){
    guesses = [];
}

/**
 * Clear the input field
 * and change it's placeholder to "Try again!"
 */
function clearInputField(){
    inputField = document.getElementById("number-guess");
    inputField.value = "";
    inputField.setAttribute("placeholder", "Try again!");
}

function playSound(){
    sound = document.createElement("audio");
    sound.setAttribute("src", "cheering.wav");
    sound.play();
}
