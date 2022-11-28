// Assignment Code
//1.  prompt user with password criteria
//      a. 8-128
//      b. lowercase, upper case, special characters
var charNum = (prompt ("How many characters would you like to use?", "8 or 128"));
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


   for (var i = 0, n = yes.length; i < length; ++i) {
       retVal += yes.charAt(Math.floor(Math.random() * n));
       }

}

//2.  validate input, ensure all above selected criteria is met
//3.  generate password based on criteria
//4.  display the password on the page
// Assistance for this from Paul Keldsen

function writePassword(

)

 {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); // uses the write password function
