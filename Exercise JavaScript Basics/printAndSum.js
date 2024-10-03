function printAndSum(input) {
    startNumber = parseInt(input[0]);
    endNumber = parseInt(input[1]);
    
    let resultString = ``;
    let sum = 0;

    for(let i = startNumber; i <= endNumber; i++) {
        resultString += i + " ";
        sum += i;
    }

    console.log(resultString);
    console.log(`Sum: ${sum}`);
}

printAndSum([5, 10]);
printAndSum([0, 26]);
printAndSum([50, 60]);