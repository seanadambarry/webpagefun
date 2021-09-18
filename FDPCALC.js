"use strict"
let averageft = "50p";
let numberofflts = 1;
let startoffdp = "24:00-03:59"
const columnData = [
    [9,10,11,12,13,12.5,12,11,10],
    [9,9,10,11,12,11.5,11,10,9 ],
    [9,9,9,10,11,10.5,10,9,9]
    
]
let columnNum = 0
let cdat = columnData[0][5]
console.log(cdat)

console.log(averageft + ' averageft default')
console.log(numberofflts + ' numberofflts default')
console.log(startoffdp + ' startoffdp default')
document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp
calculate()

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
                columnNum = 0
                MaxFdp()
            } else if (numberofflts > 4 & numberofflts < 7){
                console.log("5-6 flights")
                columnNum = 1
                MaxFdp()
            } else if (numberofflts >= 7){
                console.log("7 or more flights")
                columnNum = 2
                MaxFdp()
            } else {
                console.log("error")
            }
            document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp
            break;
        case "30m-l50":
            console.log("30 mins or more less than 50");
            if (numberofflts < 8){
                console.log("1-7 flights")
                columnNum = 0
                MaxFdp()
            } else if (numberofflts > 7 & numberofflts < 12){
                console.log("8-11 flights")
                columnNum = 1
                MaxFdp()
            } else if (numberofflts >= 12){
                console.log("12 or more flights")
                columnNum = 2
                MaxFdp()
            } else {
                console.log("error")
            }
            document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp
            break;
        case "l30":
            console.log("less than 30");
            if (numberofflts < 12){
                console.log("1-11 flights")
                columnNum = 0
                MaxFdp()
            } else if (numberofflts > 11 & numberofflts < 18){
                console.log("12-17 flights")
                columnNum = 1
                MaxFdp()
            } else if (numberofflts >= 18){
                console.log("18 or more flights")
                columnNum = 2
                MaxFdp()
            } else {
                console.log("error")
            }
            document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp
            break;
    }
};

function MaxFdp(){
    switch(startoffdp){
        case "24:00-03:59":
            console.log("MAX FDP " + columnData[columnNum][0] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][0]
            break;
        case "04:00-04:59":
            console.log("MAX FDP " + columnData[columnNum][1] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][1]
            break;
        case "05:00-05:59":
            console.log("MAX FDP " + columnData[columnNum][2] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][2]
            break;
        case "06:00-06:59":
            console.log("MAX FDP " + columnData[columnNum][3] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][3]
            break;
        case "07:00-12:59":
            console.log("MAX FDP " + columnData[columnNum][4] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][4]
            break;
        case "13:00-16:59":
            console.log("MAX FDP " + columnData[columnNum][5] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][5]
            break;
        case "17:00-21:59":
            console.log("MAX FDP " + columnData[columnNum][6] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][6]
            break;
        case "22:00-22:59":
            console.log("MAX FDP " + columnData[columnNum][7] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][7]
            break;
        case "23:00-23:59":
            console.log("MAX FDP " + columnData[columnNum][8] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][8]
            break;   
                            
    }
}

