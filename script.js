var generateEl = document.querySelector('#submit');
var resultEl = document.querySelector('#result');
var copyEl = document.querySelector('#copy');

var desiredLength = prompt('Choose length of password between 8 and 128 characters');

if (desiredLength >= 8 && desiredLength <= 128) {
  var lowercaseCon = confirm('Would you like to use lowercase letters?');
  var uppercaseCon = confirm('Would you like to use uppercase letters?');
  var numberCon = confirm('Would you like to use numbers?');
  var characterCon = confirm('Would you like to use special characters?');
}
else {
  alert("You must choose a password lenght between 8 and 128 characters");
}

var pwLength = parseInt(desiredLength)
console.log(pwLength)

var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var character = String.fromCharCode(33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60, 61, 62, 63, 64);

var newPassword = '';
var userPassword = [];

if (lowercaseCon === true) {
  userPassword = userPassword + lowercase
  console.log(userPassword)
}

if (uppercaseCon === true) {
  userPassword = userPassword + uppercase
  console.log(userPassword)
}

if (numberCon === true) {
  userPassword = userPassword + number
  console.log(userPassword)
}

if (characterCon === true) {
  userPassword = userPassword + character
  console.log(userPassword)
}
 
for (var i = 0; i <= pwLength; i++) {
  newPassword = newPassword + userPassword[Math.floor(Math.random() * userPassword.length)]
}
console.log(newPassword)

generateEl.addEventListener('click', clickGen);
function clickGen() {
  resultEl.value = newPassword;
}

function clipboard() {
  document.getElementById("result").select();
  document.execCommand("copy");
}