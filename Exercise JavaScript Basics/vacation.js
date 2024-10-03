function vacation(arr) {
    `use strict`;
    
    
    let groupNumber = parseInt(arr[0]);
    let groupType = arr[1];
    let weekDay = arr[arr.length - 1];

    let price = 0;
    let totalPrice = 0;


    if (groupType === "Students") {
        if (weekDay === "Friday") {
            price = 8.45;
        } else if (weekDay === "Saturday") {
            price = 9.80;
        } else if (weekDay === "Sunday") {
            price = 10.46;
        }
    } else if (groupType === "Business") {
        if (weekDay === "Friday") {
            price = 10.90;
        } else if (weekDay === "Saturday") {
            price = 15.60;
        } else if (weekDay === "Sunday") {
            price = 16;
        }
    } else if (groupType === "Regular") {
        if (weekDay === "Friday") {
            price = 15;
        } else if (weekDay === "Saturday") {
            price = 20;
        } else if (weekDay === "Sunday") {
            price = 22.50;
        }
    }

    totalPrice = price * groupNumber;

    if (groupType === "Students" && groupNumber >= 30) {
        totalPrice *= 0.85;
    } else if (groupType === "Business" && groupNumber >= 100) {
        totalPrice = (groupNumber - 10) * price; 
    } else if (groupType === "Regular" && groupNumber >= 10 && groupNumber <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}