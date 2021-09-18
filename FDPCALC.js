"use strict"
let averageft = "50p";
let numberofflts = 1;
let startoffdp = "24:00-03:59"
const column2 =[9,10,11,12,13,12.5,12,11,10]
const column3 =[9,9,10,11,12,11.5,11,10,9]
const column4 =[9,9,9,10,11,10.5,10,9,9]


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
                column2MaxFdp()
            } else if (numberofflts > 4 & numberofflts < 7){
                console.log("5-6 flights")
                column3MaxFdp()
            } else if (numberofflts >= 7){
                console.log("7 or more flights")
                column4MaxFdp()
            } else {
                console.log("error")
            }
            document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp
            break;
        case "30m-l50":
            console.log("30 mins or more less than 50");
            if (numberofflts < 8){
                console.log("1-7 flights")
                column2MaxFdp()
            } else if (numberofflts > 7 & numberofflts < 12){
                console.log("8-11 flights")
                column3MaxFdp()
            } else if (numberofflts >= 12){
                console.log("12 or more flights")
                column4MaxFdp()
            } else {
                console.log("error")
            }
            document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp
            break;
        case "l30":
            console.log("less than 30");
            if (numberofflts < 12){
                console.log("1-11 flights")
                column2MaxFdp()
            } else if (numberofflts > 11 & numberofflts < 18){
                console.log("12-17 flights")
                column3MaxFdp()
            } else if (numberofflts >= 18){
                console.log("18 or more flights")
                column4MaxFdp()
            } else {
                console.log("error")
            }
            document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp
            break;
    }
};

function column2MaxFdp(){
    switch(startoffdp){
        case "24:00-03:59":
            console.log("MAX FDP " + column2[0] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column2[0]
            break;
        case "04:00-04:59":
            console.log("MAX FDP " + column2[1] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column2[1]
            break;
        case "05:00-05:59":
            console.log("MAX FDP " + column2[2] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column2[2]
            break;
        case "06:00-06:59":
            console.log("MAX FDP " + column2[3] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column2[3]
            break;
        case "07:00-12:59":
            console.log("MAX FDP " + column2[4] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column2[4]
            break;
        case "13:00-16:59":
            console.log("MAX FDP " + column2[5] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column2[5]
            break;
        case "17:00-21:59":
            console.log("MAX FDP " + column2[6] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column2[6]
            break;
        case "22:00-22:59":
            console.log("MAX FDP " + column2[7] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column2[7]
            break;
        case "23:00-23:59":
            console.log("MAX FDP " + column2[8] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column2[8]
            break;   
                            
    }
}

function column3MaxFdp(){
    switch(startoffdp){
        case "24:00-03:59":
            console.log("MAX FDP " + column3[0] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column3[0]
            break;
        case "04:00-04:59":
            console.log("MAX FDP " + column3[1] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column3[1]
            break;
        case "05:00-05:59":
            console.log("MAX FDP " + column3[2] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column3[2]
            break;
        case "06:00-06:59":
            console.log("MAX FDP " + column3[3] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column3[3]
            break;
        case "07:00-12:59":
            console.log("MAX FDP " + column3[4] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column3[4]
            break;
        case "13:00-16:59":
            console.log("MAX FDP " + column3[5] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column3[5]
            break;
        case "17:00-21:59":
            console.log("MAX FDP " + column3[6] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column3[6]
            break;
        case "22:00-22:59":
            console.log("MAX FDP " + column3[7] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column3[7]
            break;
        case "23:00-23:59":
            console.log("MAX FDP " + column3[8] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column3[8]
            break;   
                            
    }
}

function column4MaxFdp(){
    switch(startoffdp){
        case "24:00-03:59":
            console.log("MAX FDP " + column4[0] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column4[0]
            break;
        case "04:00-04:59":
            console.log("MAX FDP " + column4[1] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column4[1]
            break;
        case "05:00-05:59":
            console.log("MAX FDP " + column4[2] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column4[2]
            break;
        case "06:00-06:59":
            console.log("MAX FDP " + column4[3] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column4[3]
            break;
        case "07:00-12:59":
            console.log("MAX FDP " + column4[4] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column4[4]
            break;
        case "13:00-16:59":
            console.log("MAX FDP " + column4[5] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column4[5]
            break;
        case "17:00-21:59":
            console.log("MAX FDP " + column4[6] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column4[6]
            break;
        case "22:00-22:59":
            console.log("MAX FDP " + column4[7] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column4[7]
            break;
        case "23:00-23:59":
            console.log("MAX FDP " + column4[8] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + column4[8]
            break;   
                            
    }
}
