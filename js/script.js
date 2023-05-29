console.log("js ok");

const tariffa = 0.21
const distance = document.getElementById("distance");
const age = document.getElementById("age");
const price = document.getElementById("price");
const minAge = 18;
const maxAge = 65;

let isValid = true;
let distErr = false;
let ageErr = false;
let isSaled = false;
let message = "Incorrect fields:\n";
let mySale = 0;

// userInput
const myDistance = parseInt(prompt("Quanti km vuoi percorrere?", "100").trim());
const myAge = parseInt(prompt("Quanti anni hai?", "20").trim());
const myPrice = parseFloat((myDistance * tariffa).toFixed(2));
let myPriceSaled = myPrice;
console.log(myDistance, myAge, myPrice, mySale, myPriceSaled);

// validation
if (isNaN(myDistance) || myDistance <= 0){
    distErr = true;
    message += '"Distance"\n'
}
if (isNaN(myAge) || myAge <= 0){
    ageErr = true;
    message += '"Age"'
}
if (distErr || ageErr){
    isValid = false;
    alert(message);
}

if (myAge < minAge || myAge > maxAge){
    isSaled = true;
}

if (isValid){
    distance.innerText = myDistance;
    age.innerText = myAge;
    price.innerText = myPrice;

    if (isSaled){
        const sale = document.getElementById("sale");
        const priceSaled = document.getElementById("price_saled");
        if (myAge < minAge){
            mySale = 0.2;
        } else {
            mySale = 0.4;
        }
        myPriceSaled -= (myPriceSaled * mySale);
        sale.innerText = "Sale: " + (mySale * 100) + "%";
        priceSaled.innerText = "Price saled: " + myPriceSaled + "€";
    }
    console.log("myPrice: " + myPrice);
    console.log("mySale: " + mySale);
    console.log("myPriceSaled: " + myPriceSaled);
}
