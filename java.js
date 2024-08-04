const divNumBtns = document.querySelector('div.numbers')
const operators = ['+', '-', '*', '/'] 
const divDisplay = document.querySelector('div.display')
const btns = ['=', 'clear']

let split = 0
let displayNum = 0
let firstNum = ''
let operator = ''
let secondNum = ''
let symbolCheck = ''

function display (a, b, c) {
    a = firstNum 
    b = operator
    c = secondNum

    divDisplay.textContent = a + b + c 
    return a+b+c
}

function operate (a, b, c) {
    a = Number(firstNum )
    b = operator
    c = Number(secondNum)
    if (b == '+') {
        let result = add(a,c)
        divDisplay.textContent = result
        return result 
    }
    else if (b == '-') {
        let result = subtract(a,c)
        divDisplay.textContent = result 
        return result
    }
    else if (b == '/') {
        let result = divide(a,c)
        divDisplay.textContent = result 
        return result 
    }
    else if (b == '*') {
        let result = multiply(a,c) 
        divDisplay.textContent = result
        return result
    }

}

function cycleOp (symbol) {
    for (let operator of operators) {
        for(let sign of symbol){
        if (sign == operator) {
            return true 
        }}
    } 
    return false
}

function addBtns () {
    for(i = 0; i <= 9; i++) {
        const btn = document.createElement('button')
        btn.textContent = i
        divNumBtns.appendChild(btn)

    }
    for(let op of operators) {
        const btn = document.createElement('button')
        btn.textContent = op
        btn.id = op
        divNumBtns.appendChild(btn)
    }

    for (let but of btns) {
        const btn = document.createElement('button') 
        btn.textContent = but
        divNumBtns.appendChild(btn)
    }
    }
addBtns()

const buttons = document.querySelectorAll('button')

buttons.forEach ((button) => {
    button.addEventListener('click', () => {
        if (button.textContent == '=') {
            operate()
        }
        else if (button.textContent == 'clear') {
            window.location.reload()
        }
        else if (cycleOp(button.textContent) == true) {
            if (symbolCheck == 2) {
                firstNum = operate()
                operator = button.textContent
                secondNum = ''
                symbolCheck = 1
                display()
            }
            else {
            operator = button.textContent
            symbolCheck = 1
            display()
        }}
        else if (cycleOp(display()) == true) {
            symbolCheck = 2
            secondNum += button.textContent
            display()
        }
        else {
        firstNum += button.textContent
        display()
}})})



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


