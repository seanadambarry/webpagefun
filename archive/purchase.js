"use strict";

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

let payAmount = 0;
const tax = 0.15
let taxAmount = 0;

//apples functions
function addApples() {
    numApples +=1;
    pricetotApples += priceperApples;
    payAmount += priceperApples;
    taxAmount = payAmount * tax;
    document.getElementById("numApples").innerHTML=numApples;
    document.getElementById("pricetotApples").innerHTML='$'+ pricetotApples.toFixed(2);
    document.getElementById("payAmount").innerHTML='$'+ payAmount.toFixed(2);
    document.getElementById("taxAmount").innerHTML='$'+ taxAmount.toFixed(2);
};

function removeApples() {
    numApples -=1;
    pricetotApples -= priceperApples;
    payAmount -= priceperApples;
    taxAmount = payAmount * tax;
    document.getElementById("numApples").innerHTML=numApples;
    document.getElementById("pricetotApples").innerHTML='$'+ pricetotApples.toFixed(2);
    document.getElementById("payAmount").innerHTML='$'+ payAmount.toFixed(2);
    document.getElementById("taxAmount").innerHTML='$'+ taxAmount.toFixed(2);
};


//Oranges functions
function addOranges() {
    numOranges +=1;
    pricetotOranges += priceperOranges;
    payAmount += priceperOranges;
    taxAmount = payAmount * tax;
    document.getElementById("numOranges").innerHTML=numOranges;
    document.getElementById("pricetotOranges").innerHTML='$'+ pricetotOranges.toFixed(2);
    document.getElementById("payAmount").innerHTML='$'+ payAmount.toFixed(2);
    document.getElementById("taxAmount").innerHTML='$'+ taxAmount.toFixed(2);
};

function removeOranges() {
    numOranges -=1;
    pricetotOranges -= priceperOranges;
    payAmount -= priceperOranges;
    taxAmount = payAmount * tax;
    document.getElementById("numOranges").innerHTML=numApples;
    document.getElementById("pricetotOranges").innerHTML='$'+ pricetotOranges.toFixed(2);
    document.getElementById("payAmount").innerHTML='$'+ payAmount.toFixed(2);
    document.getElementById("taxAmount").innerHTML='$'+ taxAmount.toFixed(2);
};

/*
//apples functions
function addApples() {
    numApples +=1;
    pricetotApples += priceperApples;
    payAmount += priceperApples;
    document.getElementById("numApples").innerHTML=numApples;
    document.getElementById("pricetotApples").innerHTML='$'+ pricetotApples.toFixed(2);
    document.getElementById("payAmount").innerHTML='$'+ payAmount.toFixed(2);
};

function removeApples() {
    numApples -=1;
    pricetotApples -= priceperApples;
    payAmount -= priceperApples;
    document.getElementById("numApples").innerHTML=numApples;
    document.getElementById("pricetotApples").innerHTML='$'+ pricetotApples.toFixed(2);
    document.getElementById("payAmount").innerHTML='$'+ payAmount.toFixed(2);
};

//apples functions
function addApples() {
    numApples +=1;
    pricetotApples += priceperApples;
    payAmount += priceperApples;
    document.getElementById("numApples").innerHTML=numApples;
    document.getElementById("pricetotApples").innerHTML='$'+ pricetotApples.toFixed(2);
    document.getElementById("payAmount").innerHTML='$'+ payAmount.toFixed(2);
};

function removeApples() {
    numApples -=1;
    pricetotApples -= priceperApples;
    payAmount -= priceperApples;
    document.getElementById("numApples").innerHTML=numApples;
    document.getElementById("pricetotApples").innerHTML='$'+ pricetotApples.toFixed(2);
    document.getElementById("payAmount").innerHTML='$'+ payAmount.toFixed(2);
};

//apples functions
function addApples() {
    numApples +=1;
    pricetotApples += priceperApples;
    payAmount += priceperApples;
    document.getElementById("numApples").innerHTML=numApples;
    document.getElementById("pricetotApples").innerHTML='$'+ pricetotApples.toFixed(2);
    document.getElementById("payAmount").innerHTML='$'+ payAmount.toFixed(2);
};

function removeApples() {
    numApples -=1;
    pricetotApples -= priceperApples;
    payAmount -= priceperApples;
    document.getElementById("numApples").innerHTML=numApples;
    document.getElementById("pricetotApples").innerHTML='$'+ pricetotApples.toFixed(2);
    document.getElementById("payAmount").innerHTML='$'+ payAmount.toFixed(2);
};

*/