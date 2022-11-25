// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
prompt("Would you like 8, 10 or 12 characters?", "8, 10 or 12");
if ("8", "10", "12" === prompt ("Would you like all caps, lowercase or both", "caps, lowercase, both"));
if ("caps", "Caps", "CAPS", "lowercase", "Lowercase", "lower case", "both", "Both", "BOTH" === prompt ("Would you like to use special characters !@#$%^&*?", "yes or no"));
if ("yes", "no", "Yes", "No", "YES", "NO" === true)

