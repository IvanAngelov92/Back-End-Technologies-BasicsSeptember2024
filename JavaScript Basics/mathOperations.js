function mathOperations(numberOne, numberTwo, operator) {
    `use strict`;
    let result = 0;

    switch (operator) {
        case "+":
            result = numberOne + numberTwo;
            break;
        case "-":
            result = numberOne - numberTwo;
            break;
        case "*":
            result = numberOne * numberTwo;
            break;
        case "/":
            result = numberOne / numberTwo;
            break;
        case "%":
            result = numberOne % numberTwo;
            break;
        case "**":
            result = numberOne ** numberTwo;
            break;
    }
    
    console.log(result);
}