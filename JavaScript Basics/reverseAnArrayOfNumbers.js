function reverseAnArrayOfNumbers(n, array) {
    let slicedArray = [];

    for(let i = 0; i < n; i++) {
        slicedArray.push(array[i]);
    }

    let result = [];

    for(let i = slicedArray.length - 1; i >= 0; i--) {
        result.push(slicedArray[i]);
    }

    console.log(result.join(` `));
}
