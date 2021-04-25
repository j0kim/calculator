"use strict";
/**
 * A simple Calculator program
 */
// Reference html elements
let num1 = document.querySelector('#num1');
let num2 = document.querySelector('#num2');
let answer = document.querySelector('#answer');
let btnAdd = document.querySelector('.btn1');
let btnSubtract = document.querySelector('.btn2');
let btnDivide = document.querySelector('.btn3');
let btnMultiply = document.querySelector('.btn4');
let btnReset = document.querySelector('.btn5');
// Addition
const add = () => {
    let result = parseInt(num1.value) + parseInt(num2.value);
    answer.innerHTML = result.toString();
};
// Subtraction
const subtract = () => {
    let result = parseInt(num1.value) - parseInt(num2.value);
    answer.innerHTML = result.toString();
};
// Division
const divide = () => {
    let result = parseInt(num1.value) / parseInt(num2.value);
    answer.innerHTML = result.toString();
};
// Multiplication 
const multiply = () => {
    let result = parseInt(num1.value) * parseInt(num2.value);
    answer.innerHTML = result.toString();
};
// Reset 
const reset = () => {
    answer.innerHTML = "0";
    num1.value = "";
    num2.value = "";
};
btnAdd.addEventListener('click', add, false);
btnSubtract.addEventListener('click', subtract, false);
btnDivide.addEventListener('click', divide, false);
btnMultiply.addEventListener('click', multiply, false);
btnReset.addEventListener('click', reset, false);
