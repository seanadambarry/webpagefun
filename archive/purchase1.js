"use strict";
window.onload = function() {
    document.getElementById("innumApples").focus();
  };

let numApples = 0;
let numOranges = 0;
let numBananas = 0;
let numKiwis = 0;
let numStrawberries = 0;

let pricetotApples = 0;
let pricetotOranges = 0;
let pricetotBananas = 0;
let pricetotKiwis = 0;
let pricetotStrawberries = 0;

const priceperApples = 0.5;
const priceperOranges = 0.7;
const priceperBananas = 0.3;
const priceperKiwis = 0.6;
const priceperStrawberries = .15;

let subTotal = 0;
const tax = 0.15;
let taxAmount = 0;
let total = 0;

function buyFruit() {
    //is something other than a number entered?
   

    //get number of fruit per fruit
    numApples = document.getElementById("innumApples").value;
    numOranges = document.getElementById("innumOranges").value;
    numBananas = document.getElementById("innumBananas").value;
    numKiwis = document.getElementById("innumKiwis").value;
    numStrawberries = document.getElementById("innumStrawberries").value;
    //calculate total price per fruit
    pricetotApples = priceperApples * numApples;
    pricetotOranges = priceperOranges * numOranges;
    pricetotBananas = priceperBananas * numBananas;
    pricetotKiwis = priceperKiwis * numKiwis;
    pricetotStrawberries = priceperStrawberries * numStrawberries;
    //calculate subtotal
    subTotal = pricetotApples + pricetotOranges + pricetotBananas + pricetotKiwis + pricetotStrawberries;
    //calculate tax amount
    taxAmount = subTotal * tax;
    //calculate total
    total = subTotal + taxAmount;
    //display all on page
    document.getElementById("numApples").innerHTML=numApples;
    document.getElementById("numOranges").innerHTML=numOranges;
    document.getElementById("numBananas").innerHTML=numBananas;
    document.getElementById("numKiwis").innerHTML=numKiwis;
    document.getElementById("numStrawberries").innerHTML=numStrawberries;
    
    document.getElementById("pricetotApples").innerHTML='$'+ pricetotApples.toFixed(2);
    document.getElementById("pricetotOranges").innerHTML='$'+ pricetotOranges.toFixed(2);
    document.getElementById("pricetotBananas").innerHTML='$'+ pricetotBananas.toFixed(2);
    document.getElementById("pricetotKiwis").innerHTML='$'+ pricetotKiwis.toFixed(2);
    document.getElementById("pricetotStrawberries").innerHTML='$'+ pricetotStrawberries.toFixed(2);
    
    document.getElementById("subTotal").innerHTML='$'+ subTotal.toFixed(2);
    document.getElementById("taxAmount").innerHTML='$'+ taxAmount.toFixed(2);
    document.getElementById("Total").innerHTML='$'+ total.toFixed(2);

   

};

//check to see if the value entered is not a number. If it is, change the value back to 0 and run the buy fruit function to return the values with that fruit set to 0
function checkNumber() {
    if (isNaN(numApples)) {
        alert("Apples must be a number");
        document.getElementById("innumApples").value = 0;
        document.getElementById("innumApples").focus();
        buyFruit();
    }   else if (isNaN(numOranges)){
        alert("Oranges must be a number");
        document.getElementById("innumOranges").value = 0;
        document.getElementById("innumOranges").focus();
        buyFruit();
    }   else if (isNaN(numBananas)){
        alert("Bananas must be a number");
        document.getElementById("innumBananas").value = 0;
        document.getElementById("innumBananas").focus();
        buyFruit();
    }   else if (isNaN(numKiwis)){
        alert("Kiwis must be a number");
        document.getElementById("innumKiwis").value = 0;
        document.getElementById("innumKiwis").focus();
        buyFruit();
    }   else if (isNaN(numStrawberries)){
        alert("Strawberries must be a number");
        document.getElementById("innumStrawberries").value = 0;
        document.getElementById("innumStrawberries").focus();
        buyFruit();
    }
};

