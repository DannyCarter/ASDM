let num1 = 37
let num2 = 17
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum = document.getElementById("sum-el")



function add() {
    let answer = num1 + num2;
    sum.textContent = "Answer: " + answer;
}

function subtract() {
    let answer = num1 - num2;
    sum.textContent = "Answer: " + answer;
}

function divide() {
    let answer = num1 / num2;
    sum.textContent = "Answer: " + answer;
}

function multiply() {
    let answer = num1 * num2;
    sum.textContent = "Answer: " + answer;
}