function multiplicationTable(number) {
    `use strict`;

    for (let i = 1; i <= 10; i++) {
        let product = number * i;
        console.log(`${number} X ${i} = ${product}`);
    }
}
multiplicationTable(5);