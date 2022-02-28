var upperCase;
var lowerCase;
var numbers;
var special;
var characterLength;
var createPassword = [];
var options;
var generateBtn = document.querySelector("#generate");

upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
numberCharacters = "1234567890";
specialCharacters = "@#$%^&*(){}[]=<>/,.";



function generatePassword () {
  characterLength = window.prompt (" Please choose between 8 and 128 characters to generate your unique password. ");
  
if (!characterLength || characterLength  <= 7 || characterLength >= 129 ) {
  window.alert("Try again! Please choose between 8 and 128 characters to generate your unique password. ");
return '';
}
else {
  lowerCase = window.confirm("Do you want to add lowercase letters to your unique password?");
  upperCase = window.confirm("Do you want to add uppercase letters to your unique password?");
  numbers = window.confirm("Do you want to add numbers to your unique password?");
  special = window.confirm("Do you want to add special characters to your unique password?");
}

if (!lowerCase && !upperCase && !numbers && !special) {
  options = window.alert(" Try again. Please choose between 8 and 128 characters to generate your unique password. ");
}
else if (lowerCase && upperCase && numbers && special) {
  options = lowerCaseCharacters + upperCaseCharacters + numberCharacters + specialCharacters;
}
else if (lowerCase && upperCase && numbers) {
  options = lowerCaseCharacters + upperCaseCharacters + numberCharacters;
}
else if (lowerCase && upperCase && special) {
  options = lowerCaseCharacters + upperCaseCharacters + special;
}
else if (lowerCase && numbers && special) {
  options = lowerCaseCharacters + numbers + special;
}
else if (lowerCase && upperCase) {
  options = lowerCaseCharacters + upperCaseCharacters;
}
else if (lowerCase && numbers) {
  options = lowerCaseCharacters + numbers;
}
else if (lowerCase && special) {
  options = lowerCaseCharacters + specialCharacters;
}
else if (upperCase && numbers && special) {
  options = upperCaseCharacters + numberCharacters + specialCharacters;
}
else if (upperCase && numbers) {
  options = upperCaseCharacters + numberCharacters;
}
else if (upperCase && special) {
  options = upperCaseCharacters + specialCharacters;
}
else if (numbers && special) {
  options = numberCharacters + specialCharacters;
}
for (var i = 0; i < characterLength; i++) {
  var randomNumber = options[Math.floor(Math.random() * options.length)];
  createPassword.push(randomNumber);
} 
var generatePassword = createPassword.join("");
window.alert("Here is your unique password!");
return generatePassword;
};

generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


