var generateEl = document.querySelector('#submit');
var resultEl = document.querySelector('#result');
var copyEl = document.querySelector('#copy');

var desiredLength = prompt('Choose length of password between 8 and 128 characters');
if (desiredLength >= 129) {
  alert("You must choose a password lenght between 8 and 128 characters");
  prompt('Choose length of password between 8 and 128 characters');
}
else if (desiredLength <= 7) {
  alert("You must choose a password lenght between 8 and 128 characters");
  prompt('Choose length of password between 8 and 128 characters');
}

var lowercaseCon = confirm('Would you like to use lowercase letters?');
var uppercaseCon = confirm('Would you like to use uppercase letters?');
var numberCon = confirm('Would you like to use numbers?');
var characterCon = confirm('Would you like to use special characters?');

var pwLength = parseInt(desiredLength)
console.log(pwLength)

var lowercase = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var number = '0123456789'.split('');
var character = ' !"#$%&()*+,-./:;<=>?@[]^_`{|}~'.split('');
