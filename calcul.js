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
    const operators = document.querySelectorAll('.operator');
    const calculation = document.querySelector('.equal');
    const negate = document.querySelector('.negate');
    const reset = document.querySelector('.reset');

    let justCalculated = false;

// loop through each number button to check witch one is clicked, and retrieve it's value
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener('click', function(e) {
            let value = e.target.innerHTML;

// check if value is '.' or not
            if (value === '.') {
                if (justCalculated === true) {
                    currentNumber = '0.';
                    justCalculated = false;
                    document.querySelector('.result').innerHTML = currentNumber;
                }
                if (currentNumber.includes('.')) 
                    return;
                if (currentNumber === '') {
                    currentNumber += '0.';
                }
            }                     
// check if a calculation has been done or not 
            if (justCalculated === true) {
                currentNumber = value;
                justCalculated = false;
            } else {
                currentNumber += value;
            }
            document.querySelector('.result').innerHTML = currentNumber;
        })
    }

// add listener to negate button 
    negate.addEventListener('click', function() {
        if (currentNumber === '') {
            currentNumber = '-';
            document.querySelector('.result').innerHTML = currentNumber;
        } else if (currentNumber.startsWith('-')) {
            currentNumber = currentNumber.slice(1);
            document.querySelector('.result').innerHTML = currentNumber;
        } else currentNumber = '-' + currentNumber;
        document.querySelector('.result').innerHTML = currentNumber;
    })

// loop through each operator button to see which one has been clicked
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener('click', function(e) {
            let value = e.target.innerHTML;
// check if an operator has already been selected or not
            if (currentNumber === '' && operator != '') {
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


// listener on = button to convert strings to number and effectuate calculation
    calculation.addEventListener('click', function() {
        if (previousNumber != '' && currentNumber != '' && operator != '') {
            let numericPrevious = Number(previousNumber);
            let numericCurrent = Number(currentNumber);

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
            justCalculated = true;

            document.querySelector('.result').innerHTML = currentNumber;
        }

    })

// listener on AC button
    reset.addEventListener('click', function() {
        currentNumber = '';
        previousNumber = '';
        operator = '';
        justCalculated = false;
        document.querySelector('.result').innerHTML = '0';
    })

} 
operation();


