


class Calculator { // constructor will control all the inputs and the functions for the calculator
    constructor(previousOperandTextElement, currentOperandTextElement) {// will take previous and current text elements and set them in the calculator class
       this.currentOperandTextElement = previousOperandTextElement
       this.previousOperandTextElement = currentOperandTextElement
       this.clear()
    } 

    clear() {// function to clear whole output section
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
  
    }

    average() {
        // I am unsure how to continue in this format
    }

    delete() { // function to delete just one number in output section
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) { // what will happen when someone clicks on one of the numbers
        if (number === '.' && this.currentOperand.includes ('.')) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) { // when a user clicks on one of operation buttons
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute() {
        let computation 
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '/':
                computation = prev / current
                break
            default:
                return
            }
            this.currentOperand = computation
            this.operation = undefined
            this.previousOperand = ''
    }

    updateDisplay() { //function to update values in output display
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}


const numberButton = document.querySelectorAll('[data-number]') //querySelectorAll gets all elements related to 'data number'
const operationButton = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const delButton = document.querySelector('[data-del]')
const acButton = document.querySelector('[data-ac]')
const previousOperandTextElement = document.querySelector('[data-previous]')
const currentOperandTextElement = document.querySelector('[data-current]')
const avgButton = document.querySelector('[data-avg')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButton.forEach(button => {//this is not working and I am unsure why update: fixed note: check spelling
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


operationButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {//always check spelling  
    calculator.compute()
    calculator.updateDisplay()
  })


acButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

delButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

avgButton.addEventListener('click', button => {
    calculator.average()
    calculator.updateDisplay()
})