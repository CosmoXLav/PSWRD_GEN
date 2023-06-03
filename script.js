// List items into an array

var num = ['0','1','2','3','4','5','6','7','8','9',];
var upper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var spec = ['!','@','#','$','%','^','&','*','(',')','_','+','~','|','}','{','[',']',':',';','?','>','<',',','.','/','-','=',];

var passMix = []; //empty array to add user's password criteria into
var length = 8;

// Assignment Code
// Password Randomize button
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
function generatePassword () {  
  passMix = []; //blank array to reset password criteria

  //parseInt() changes input value into an integer value
  passwordLength = parseInt(prompt("Enter a numerical character length, must be between 8-128 characters"));

  //if statements to determine if "length" value is Nan, lower than 8, or larger than 128. Returns false if input is invalid
  if (isNaN(length)) {
      alert("Invalid input type, only enter numeric characters.");
      return false;
      }
  if (length<8) {
      alert("Length is too short, enter a value that is larger than or equal to 8 number characters.");
      return false;
      }
  if (length>128) {
      alert("Length is too long, enter a value that is less than or equal to 128 number characters.");
      return false;
      }
  
  //if statements to determine which arrays to combine into a passMix. Confirm statements that are 'true' are added and returned
  if (confirm("Include numbers in your password?")) {
      passMix = passMix.concat(num);
      }
  if (confirm("Include uppercase letters in your password?")) {
      passMix = passMix.concat(upper);
      }
  if (confirm("Include lowercase letters in your password?")) {
      passMix = passMix.concat(lower);
      }   
  if (confirm("Include special characters in your password? (Ex.!@#$%?)")) {
      passMix = passMix.concat(spec);
      }
      var generatedPassword
      for (let i = 0; i < passwordLength; i++) {
        generatedPassword=passMix[Math.floor(Math.random()*passMix.length)]
      }
      return generatedPassword 
    }
