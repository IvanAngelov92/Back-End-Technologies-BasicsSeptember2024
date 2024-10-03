function reversedChars(arr) {
    `use strict`;

    let reversedArray = "";

    for (let i = 0; i < arr.length; i++) {
        reversedArray = arr.reverse();
    }

    console.log(reversedArray.join(" "));
}