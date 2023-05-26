console.log("js ok");

const tariffa = 0.21
const distance = document.getElementById("distance");
const age = document.getElementById("age");
const price = document.getElementById("price");
const sale = document.getElementById("sale");
const priceSaled = document.getElementById("price_saled");

let isValid = true;
let distErr = false;
let ageErr = false;
let isSaled = false;
let message = "Incorrect fields:\n";
let mySale = 0;
let myPriceSaled = 0;

// userInput
const myDistance = parseInt(prompt("Quanti km vuoi percorrere?", "100").trim());
const myAge = parseInt(prompt("Quanti anni hai?", "20").trim());
const myPrice = parseFloat((myDistance * tariffa).toFixed(2));
// console.log(myDistance, myAge, myPrice);

// validation
if (isNaN(myDistance)){
    distErr = true;
    message += '"Distance"\n'
}
if (isNaN(myAge)){
    ageErr = true;
    message += '"Age"'
}
if (distErr || ageErr){
    isValid = false;
    alert(message);
}

if (myAge < 18 || myAge > 65){
    isSaled = true;
}

if (isValid){
    distance.innerText = myDistance;
    age.innerText = myAge;
    price.innerText = myPrice;

    if (isSaled){
        if (myAge < 18){
            mySale = 0.2;
        } else {
            mySale = 0.4;
        }
        myPriceSaled = myPrice - (myPrice * mySale);
        console.log("myPrice: " + myPrice);
        console.log("mySale: " + mySale);
        console.log("myPriceSaled: " + myPriceSaled);
        sale.innerText = mySale;
        priceSaled.innerText = myPriceSaled;
    }
}
