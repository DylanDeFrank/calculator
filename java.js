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
        divNumBtns.appendChild(btn)
    }}
addBtns()

const buttons = document.querySelectorAll('button')

buttons.forEach ((button) => {
    button.addEventListener('click', () => {
        divDisplay.textContent = button.textContent
       

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
