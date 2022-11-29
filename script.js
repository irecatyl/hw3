// Assignment Code
//1.  prompt user with password criteria
//      a. 8-128
//      b. lowercase, upper case, special characters
var charNum = (prompt ("How many characters would you like to use?", "8 to 128"));
  {
    console.log("The client would like " + charNum + " characters")
  }

var specialChars = prompt ("Would you like to use UPPER CASE and special characters !@#$%^&*?", "yes or no");
if (specialChars ===  "yes" ) {
  console.log("The client would like special characters used")
} 
if (specialChars ===  "no" ) {
  console.log("The client does not want special characters used")
} 

var generateBtn = document.querySelector("#generate"); // RED Generate Password button

function generatePassword() {
  var length = charNum,
      yes = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklmnbvcxz!@#$%^&*",
      no = "qwertyuiopasdfghjklzxcvbnm",
      retVal = "";
      
  if (specialChars === "no") {
      for (var x = 0, n = no.length; x < length; ++x) {
        retVal += no.charAt(Math.floor(Math.random() * n));
        }}

  if (specialChars === "yes") {
    for (var z = 0, y = yes.length; z < length; ++z) {
      retVal += yes.charAt(Math.floor(Math.random() * y));
      }}

  return retVal;
}

//2.  validate input, ensure all above selected criteria is met
//3.  generate password based on criteria
//4.  display the password on the page
// Assistance for this from Paul Keldsen youtube

function writePassword()

 {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // uses the write password function
