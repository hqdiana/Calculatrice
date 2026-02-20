// create empty variable for number being clicked
// create variable for previous number clicked
// create variable for selected operator
// create function to display operation
    // take current input and push it into the DOM
// create function to operate and display result
    // convert stringed numbers to actual numbers
    // perform calculation and return result

let currentNumber = '';
let previousNumber = '';
let operator = '';

function operation() {
    const numbers= document.querySelectorAll('.number');

    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function(e) {
            let value = e.target.innerHTML;
            currentNumber += value;
            document.querySelector('.result').innerHTML = currentNumber;
        })
    }
    const operators = document.querySelectorAll('.operator');

    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function(e) {
            let value = e.target.innerHTML;

            if (currentNumber === '' && operator != null) {
                operator = value;
                document.querySelector('.result').innerHTML = previousNumber + " " + operator;
            } else {
                previousNumber = currentNumber;
                currentNumber = '';
                operator = value;
                document.querySelector('.result').innerHTML = previousNumber + " " + operator;
            }
        })
    }

    const calculation = document.querySelector('.equal');

    calculation.addEventListener('click', function() {
        if (previousNumber != '' && currentNumber != '' && operator != '') {
            numericPrevious = Number(previousNumber);
            numericCurrent = Number(currentNumber);

            if (operator === '+') {
                currentNumber = numericPrevious + numericCurrent;
            } else if (operator === '-') {
                currentNumber = numericPrevious - numericCurrent;
            } else if (operator === 'x') {
                currentNumber = numericPrevious * numericCurrent;
            } else if (operator === '÷') {
                currentNumber = numericPrevious / numericCurrent;
            } else if (operator === '%') {
                currentNumber = numericPrevious % numericCurrent;
            }

            previousNumber = '';
            operator = '';

            document.querySelector('.result').innerHTML = currentNumber;
        }

    })
} operation();