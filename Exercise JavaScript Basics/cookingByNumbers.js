function cookingByNumbers(arr) {
    `use strict`;

    let number = parseFloat(arr[0]);
    let arrL = arr.length;

    for (let i = 1; i < arrL; i++) {
        let operation = arr[i];

        switch (operation) {
            case "chop":
                number /= 2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number += 1;
                break;
            case "bake":
                number *= 3;
                break;
            case "fillet":
                number = number - 0.2 * number;
                break;

        }
        console.log(number);
    }

}