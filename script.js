// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseLetters = ['a', 'b', 'c', 'd']
var upperCaseLetters = ['A', 'B', 'C', 'D']
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var symbols = ['!', '@', '#', '%']

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() { 
  var possibleCars = []
  var length = parseInt(prompt('How long would you like your password to be?'))
  console.log(length)
  
  if (length < 8 || length > 128) {
    return alert('Invalid Length')
  }
  
  var shouldContainLower = confirm('Would you like to include lowercase letters?')
  var shouldContainUpper = confirm('Would you like to include uppercase letters')
  var shouldContainNumbers = confirm('Would you like to include numbers?')
  var shouldContainSymbols = confirm('Would you like to include symbols?')
// For every true add to possible characters 
// Randomly select from pot 
// Return final password 
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
