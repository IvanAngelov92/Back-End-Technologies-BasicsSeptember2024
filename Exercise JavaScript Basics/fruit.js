function fruit(arr) {
    `use strict`;

    let fruit = arr[0];
    let weightInGrams = Number(arr[1]);
    let pricePerKilogram = Number(arr[2]);

    let weightInKilograms = weightInGrams / 1000;

    let totalCost = weightInKilograms * pricePerKilogram;

    console.log(`I need $${totalCost.toFixed(2)} to buy ${weightInKilograms.toFixed(2)} kilograms ${fruit}.`);
}