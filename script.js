// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// --------------------------------------------------------Logic to generate the password ---------------------------------------------------------------------

var number = false;
var upperCase = false;
var lowerCase = false;
var symbol = false;

var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseLetters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symChar = " !#$%&'()*+,-.:;<=>?@[]^_`\{|}~/";

var aux = 0; //

var passSize = 10;
var array = [];
var arrayRandom=[];//to set the numbers that can be used in the switch

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
// This for loop is to set in a arrayRandom what the user select as a choice Number, uppercase, lowercase, symbols
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

var pass = array.join('');

console.log(pass);