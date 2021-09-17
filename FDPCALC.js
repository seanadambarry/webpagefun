"use strict"
let averageft = "50p";
let numberofflts = 1;
let startoffdp = "24:00-03:59"
console.log(averageft + ' averageft default')
console.log(numberofflts + ' numberofflts default')
console.log(startoffdp + ' startoffdp default')
document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp


function calculate() {
    averageft = document.getElementById("averageft").value;
    numberofflts = parseInt(document.getElementById("numberofflts").value)
    startoffdp = document.getElementById("startoffdp").value

    console.log(averageft + ' averageft')
    console.log(numberofflts + ' numberofflts')
    console.log(startoffdp + ' startoffdp')
    console.log(typeof numberofflts)

    switch(averageft){
        case "50p":
            console.log("50 plus case");
            if (numberofflts < 5){
                console.log("1-4 flights")
            } else if (numberofflts > 4 & numberofflts < 7){
                console.log("5-6 flights")
            } else if (numberofflts >= 7){
                console.log("7 or more flights")
            } else {
                console.log("error")
            }
            document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp
            break;
        case "30m-l50":
            console.log("30 mins or more less than 50");
            if (numberofflts < 8){
                console.log("1-7 flights")
            } else if (numberofflts > 7 & numberofflts < 12){
                console.log("8-11 flights")
            } else if (numberofflts >= 12){
                console.log("12 or more flights")
            } else {
                console.log("error")
            }
            document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp
            break;
        case "l30":
            console.log("less than 30");
            if (numberofflts < 12){
                console.log("1-11 flights")
            } else if (numberofflts > 11 & numberofflts < 18){
                console.log("12-17 flights")
            } else if (numberofflts >= 18){
                console.log("18 or more flights")
            } else {
                console.log("error")
            }
            document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp
            break;
    }
};

