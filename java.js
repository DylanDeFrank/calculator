const divNumBtns = document.querySelector('div.numbers')

function addBtns () {
    for(i = 0; i <= 9; i++) {
        const btn = document.createElement('button')
        btn.textContent = i
        divNumBtns.appendChild(btn)

    }
}

addBtns()



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
