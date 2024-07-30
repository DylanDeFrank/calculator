const divNumBtns = document.querySelector('div.numbers')
const operators = ['+', '-', '*', '/', '=', 'clear' ] 
const divDisplay = document.querySelector('div.display')


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
        displayNum = divDisplay.textContent
      })
       })
function displaySplit() {
       let variableSplit = displayNum.split('')
       for(let symbol of operators) {
            for(let variable of variableSplit) {
        if (variable == symbol ) {
            split = variableSplit.indexOf(variable)
            operator = variable

        }}}
       for(let variable of variableSplit) {
        if (variableSplit.indexOf(variable) < split) {
           firstNum += variable
        } else if (variableSplit.indexOf(variable) > split) {
            secondNum += variable
        }
       }
       console.log(firstNum)
       console.log(secondNum)
       console.log(operator)
    }   

    const equals = document.querySelector('#=')
    equals.textContent = YOO 
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

let split = 0
let displayNum = 0
let firstNum = ''
let operator = ''
let secondNum = ''
function operate (num, op, num) {}
