function countStringOccurrences(text, word) {
    `use strict`;

    let textArr = text.split(" ");
    let count = 0;

    for (let currWord of textArr) {
        if (currWord === word) {
            count++;
        }
    }
    console.log(count);
}