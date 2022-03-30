let prevNumber = ''
let calcOperator = ''
let currentNumber = '0'

// show the value to the screen
const resultScreen = document.querySelector('.result-screen')

const updateScreen = (number) => {
    resultScreen.value = number
}

// Numbers
const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}
const numbers = document.querySelectorAll(".btn-number")

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
    
})

// operators
const inputOperator = (operator) => {
    if (calcOperator === '') {
        prevNumber = currentNumber
    }
    calcOperator = operator
    currentNumber = '0'
}
const operators = document.querySelectorAll(".btn-operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
    })
})

//equal
const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentNumber)
})

//calculate
const calculate = () => {
    let result = ''
    switch(calcOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = prevNumber - currentNumber
            break
        case "*":
            result = prevNumber * currentNumber
            break
        case "/":
            result = prevNumber / currentNumber
            break
        case "%":
            result = parseInt(prevNumber) / parseInt(currentNumber) * 100
            break
        case "mod":
            result = prevNumber % currentNumber
            break
        default:
            return
    }
    currentNumber = result
    calcOperator = ''
}

// clear screen
const clearBtn = document.querySelector('.btn-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

const clearAll = () => {
    prevNumber = ''
    calcOperator = ''
    currentNumber = '0'
}

// decimal
inputDecimal = (dot) => {
    if (currentNumber.includes('.')) {
        return    
    }
    currentNumber += dot
}

const decimal = document.querySelector('.btn-decimal')

decimal.addEventListener('click', (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
})