function sumFirstandLastArrayElements(input) {
    `use strict`;

    let first = Number(input[0]);
    let last = Number(input[input.length - 1]);

    let result = first + last;
    console.log(result);
}