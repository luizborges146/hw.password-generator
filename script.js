// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  userInput();// it calls the function to get user input
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// --------------------------------------------------------Global Variables ---------------------------------------------------------------------
var number = false;
var upperCase = false;
var lowerCase = false;
var symbol = false;

var passSize = 0;
// --------------------------------------------------------get user information  ---------------------------------------------------------------------
function userInput() {
 
  array = [];// set the global variable to empty array, to reset password info saved in the memory
  arrayRandom=[];// set the global variable to empty array, it will clear it out the saved criteria the user has already used the Password generator

  var input = prompt("How many characters would you like to be?\n Between 8 to 128 character ");
  if (input >=8 && input <=128) {
    passSize = input;
    promptNumber();
  } else if (input === null){
    return;
  } else if(input > 128) {
    alert("You added a number that is bigger than 128.\n Please add a number between 8 - 128!");
    userInput();
  }  else if(input < 8) {
    alert("You added a number that is lower than 8.\n Please add a number between 8 - 128!");
    userInput();
  } else {
    alert("Hey, it seems that you added something different from a number!\n Please add a number between 8 - 128!");
    userInput();
  }
// ------------------------------------------------Check what type of password the user would like to have -----------------------------------------------
  function promptNumber() {
    number = confirm("Would you like to add a NUMBERS in your password?");
    console.log(number);
    promptUpper();
  }
  function promptUpper() {
    upperCase = confirm("Would you like to add a UPPERCASE LETTERS in your password?");
    console.log(upperCase);
    promptLower();
  }
  
  function promptLower() {
    lowerCase = confirm("Would you like to add a LOWERCASE LETTERS in your password?");
    console.log(lowerCase);
    promptSymbol()
  }
  
  function promptSymbol() {
    symbol = confirm("Would you like to add a SYMBOL in your password?");
    console.log(symbol);
  }
  checkAllOptions ()// create a new function to check if the user will add all the option as false
  createRandomChar (); // it calls the function to generate the password, adding the user choices
}

// --------------------------------------------------------Logic to generate the password ---------------------------------------------------------------------

var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symChar = " !#$%&'()*+,-.:;<=>?@[]^_`\{|}~/";

var aux = 0; //
var array = [];
var arrayRandom=[];//to set the numbers that can be used in the switch



function createRandomChar () {
  function randomNumber () {// create a random number from 0 - 9
    var randomN = Math.floor(Math.random()*10);
    aux = randomN;
  }
  function randomUpperCase() { //Select a random Uppercase letter
    var randomU = upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
    aux = randomU;
  }
  function randomLowerCase() { //Select a random Lowercase letter
    var randomL = lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
    aux = randomL;
  }
  function randomSymbol() { // Select a random Symbol
    var randomS = symChar[Math.floor(Math.random() * symChar.length)];
    aux = randomS;
  }

  //---------------------------------------------Store the user choice inside a array -------------------------------------
  for(var i = 0; i<1; i++) {
    aux= 0;
    if (number) {
      arrayRandom[aux] = 0;
      aux++ 
    } 
    if (upperCase){
      arrayRandom[aux] = 1;
      aux++; 
    }

    if (lowerCase){
      arrayRandom[aux] = 2;
      aux++; 
    }

    if (symbol){
      arrayRandom[aux] = 3;
      aux++; 
    }
  }

  // Based on the user selection, the system will chose what would be the function will be applied to create a random password
  // This in inside a for loop, so it will iterate according to the size of the password the user chosen
  for (var i = 0; i < passSize;i++){
    var random = arrayRandom[Math.floor(Math.random()* arrayRandom.length)];
    switch(random){
      case 0:/*Create a random number----------------------*/
      randomNumber ();
        array[i] = aux;
        break;
  
      case 1:/*create a UpperCase--------------------------*/
      randomUpperCase();
        array[i] = aux;
        break;
  
      case 2:/*create lowerCase----------------------------*/
      randomLowerCase();
        array[i] = aux;
        break;
      
      case 3:/*Create a symbol------------------------------*/
        randomSymbol();
        array[i] = aux;
        break;
    }
  }
}

function generatePassword(){
  return array.join('');
}

function checkAllOptions (){// create a new function to check if the user will add all the option as false
  if (number === false &&
    upperCase === false &&
    lowerCase === false &&
    symbol=== false) {
      alert("Hey, it seems that you did not select any criteria to generate your password!");
      var option = confirm("Press ok to start over or \ncancel, to leave the application!");
      if (option === true) { // user press ok, it set the confirm to true, and the user will be able to start all over
        userInput();
      } else if (option === false) { // it will return to the main page
        return;
      }

    }

}



