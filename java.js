const divNumBtns = document.querySelector('div.numbers')
const operators = ['+', '-', '*', '/', '=' ] 


function addBtns () {
    for(i = 0; i <= 9; i++) {
        const btn = document.createElement('button')
        btn.textContent = i
        divNumBtns.appendChild(btn)

    }
    for(let operator of operators) {
        const btn = document.createElement('button')
        btn.textContent = operator
        divNumBtns.appendChild(btn)
    }}
addBtns()

test


function add (a, b) {
    return a + b
}
function subtract (a, b) {
    return a - b
}
function multiply (a, b) {
    return a * b
}
function divide (a, b) {
    return a / b
}
