/**
 * A simple Calculator program
 */


// Reference html elements
let num1 = document.querySelector('#num1') as HTMLInputElement;
let num2 = document.querySelector('#num2') as HTMLInputElement;
let answer = document.querySelector('#answer') as HTMLHeadElement;
let btnAdd = document.querySelector('.btn1') as HTMLButtonElement;
let btnSubtract = document.querySelector('.btn2') as HTMLButtonElement;
let btnDivide = document.querySelector('.btn3') as HTMLButtonElement;
let btnMultiply = document.querySelector('.btn4') as HTMLButtonElement;
let btnReset = document.querySelector('.btn5') as HTMLButtonElement;


// Addition
const add = (): void => {
    let result = parseInt(num1.value) + parseInt(num2.value);
    answer.innerHTML = result.toString();
};


// Subtraction
 const subtract = (): void => {
    let result = parseInt(num1.value) - parseInt(num2.value);
    answer.innerHTML = result.toString();
};

// Division
 const divide = (): void => {
    let result = parseInt(num1.value) / parseInt(num2.value);
    answer.innerHTML = result.toString();
};


// Multiplication 
 const multiply = (): void => {
    let result = parseInt(num1.value) * parseInt(num2.value);
    answer.innerHTML = result.toString();
};

// Reset 
const reset = (): void => {
    answer.innerHTML = "0";
    num1.value = "";
    num2.value = "";
}

btnAdd.addEventListener('click', add, false);
btnSubtract.addEventListener('click', subtract, false);
btnDivide.addEventListener('click', divide, false);
btnMultiply.addEventListener('click', multiply, false);
btnReset.addEventListener('click', reset, false);