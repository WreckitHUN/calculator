const track = document.querySelector(".calculator__head__track");
const numberDisplay = document.querySelector(".calculator__head__number");

const btnDelete = document.querySelector(".delete");
const btnClear = document.querySelector("#clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

let number1 = "";
let number2 = "";
let operator = "";

numbers.forEach((number) => {
    number.addEventListener("click", () => {
    if (numberDisplay.textContent.length !== 9){
        number1 += number.textContent;
        numberDisplay.textContent = number1;
    }
    } )
})
