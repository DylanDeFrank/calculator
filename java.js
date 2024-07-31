const divNumBtns = document.querySelector('div.numbers')
const operators = ['+', '-', '*', '/', '=', 'clear' ] 
const divDisplay = document.querySelector('div.display')

let split = 0
let displayNum = 0
let firstNum = ''
let operator = ''
let secondNum = ''
function operate () {
    let a = Number(firstNum)
    let b = Number(secondNum)

    if (operator == '+') {
        return add(a,b)
    } 
}


function addBtns () {
    for(i = 0; i <= 9; i++) {
        const btn = document.createElement('button')
        btn.textContent = i
        divNumBtns.appendChild(btn)

    }
    for(let operator of operators) {
        const btn = document.createElement('button')
        btn.textContent = operator
        btn.id = operator
        divNumBtns.appendChild(btn)
    }}
addBtns()

const buttons = document.querySelectorAll('button')

buttons.forEach ((button) => {
    button.addEventListener('click', () => {
     
        let input = button.textContent
        divDisplay.textContent += input 
        firstNum = divDisplay.textContent
      })
       })


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


