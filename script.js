var Input = document.querySelector(".input");
var GenPassword = document.getElementById("password")
var Copy = document.getElementById("copy");
// const Btn = document.getElementById("btn")
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "!@#$%^&*~?"

const allChars = upperCase + lowerCase + number + symbol;
function createPassword() {
    let password1 = "";

    password1 += upperCase[Math.floor(Math.random() * upperCase.length)];
    password1 += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password1 += number[Math.floor(Math.random() * number.length)];
    password1 += symbol[Math.floor(Math.random() * symbol.length)];
    console.log(password1);

    while (length > password1.length) {
        password1 += allChars[Math.floor(Math.random() * allChars.length)];
    }
    GenPassword.value = password1;

}

function copyText() {
    GenPassword.select();
    document.execCommand("copy")
}