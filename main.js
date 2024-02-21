const track = document.querySelector(".calculator__head__track");
const numberDisplay = document.querySelector(".calculator__head__number");

const btnDelete = document.querySelector(".delete");
const btnClear = document.querySelector("#clear");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector("#equal");

let number1Assigned = false;

let memoryNumber = "";

let number1 = "";
let number2 = "";
let operator = "";
let result = "";

/* Functions for numbers 0 -> 9 */ 
numbers.forEach((number) => {
    number.addEventListener("click", () => {
    if (numberDisplay.textContent.length !== 9){
        memoryNumber += number.textContent;
        numberDisplay.textContent = memoryNumber;
    }
    })
});

/* Function for Operators */
operators.forEach((ope) =>{
    ope.addEventListener("click", () => {
        /* First time to click on operator */
        if (!number1Assigned && memoryNumber !== ""){
            number1 = memoryNumber;
            operator = ope.textContent;
            memoryNumber = "";
            number1Assigned = true;
            track.textContent = `${number1} ${operator}`;
            return;
        }

        /* Second time to click on operator after a number */
        if (number1Assigned && memoryNumber !== ""){
            number2 = memoryNumber;
            memoryNumber = "";
            result = operate(number1, number2, operator);
            numberDisplay.textContent = result;
            number1 = result;
            operator = ope.textContent;
            track.textContent = `${result} ${operator}`;
            return;
        }
    })
});

/* Function for Equal */
equal.addEventListener("click", () => {
    if (number1Assigned && memoryNumber !== ""){
        number2 = memoryNumber;
        result = operate(number1, number2, operator);
        numberDisplay.textContent = result;
        track.textContent = `${number1} ${operator} ${number2} =`;
        number1Assigned = false;
        memoryNumber = result;
        number2 = "";
        operator = "";
        result = "";
        return;
    }
    
})

/* Function for Clear btn */
btnClear.addEventListener("click", () => {
    reset();
    numberDisplay.textContent = "";
    track.textContent = "";
});

/* Function for Delete btn */
btnDelete.addEventListener("click", () => {
    if (memoryNumber !== ""){
        memoryNumber = memoryNumber.slice(0, memoryNumber.length - 1);
        numberDisplay.textContent = memoryNumber;
    }

});

const operate = (num1, num2, sign) => {
    let a = Number(num1);
    let b = Number(num2);

    if (sign === '+') {
        return a + b;
    } else if (sign === '-') {
        return a - b;
    } else if (sign === 'x') {
        return a * b;
    } else if (sign === '/') {
        if (b != 0) {
            return (a / b).toFixed(1);
        } else {
            return 'ERROR';
        }
    } 
}

const reset = () => {
    number1Assigned = false;
    memoryNumber = "";
    number1 = "";
    number2 = "";
    operator = "";
    result = "";
}