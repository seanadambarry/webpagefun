"use strict"
let averageft = "50p";
let numberofflts = 1;
let startoffdp = "24:00-03:59"
const columnData = [
    [9,10,11,12,13,12.5,12,11,10],
    [9,9,10,11,12,11.5,11,10,9 ],
    [9,9,9,10,11,10.5,10,9,9]
]
console.log(columnData)
let columnNum = 0

let startFDPHH = 0
let startFDPMM = 0
let startFDPHH60 = 0
let startFDPMM60 = 0
let startFDPdec = 0

let maxFDPdec = 0

let endFDPdec = 0
let endFDPHH = 0
let endFDPMM = 0
let isSplit = ""
let extension100 = 0
let extension50 = 0

console.log(averageft + ' averageft default')
console.log(numberofflts + ' numberofflts default')
console.log(startoffdp + ' startoffdp default')
document.getElementById("output").innerHTML = averageft + " " + numberofflts + " " + startoffdp
//calculate()

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
            maxFDPdec = columnData[columnNum][0]
            endFDP()
            break;
        case "04:00-04:59":
            console.log("MAX FDP " + columnData[columnNum][1] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][1]
            maxFDPdec = columnData[columnNum][1]
            endFDP()
            break;
        case "05:00-05:59":
            console.log("MAX FDP " + columnData[columnNum][2] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][2]
            maxFDPdec = columnData[columnNum][2]
            endFDP()
            break;
        case "06:00-06:59":
            console.log("MAX FDP " + columnData[columnNum][3] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][3]
            maxFDPdec = columnData[columnNum][3]
            endFDP()
            break;
        case "07:00-12:59":
            console.log("MAX FDP " + columnData[columnNum][4] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][4]
            maxFDPdec = columnData[columnNum][4]
            endFDP()
            break;
        case "13:00-16:59":
            console.log("MAX FDP " + columnData[columnNum][5] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][5]
            maxFDPdec = columnData[columnNum][5]
            endFDP()
            break;
        case "17:00-21:59":
            console.log("MAX FDP " + columnData[columnNum][6] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][6]
            maxFDPdec = columnData[columnNum][6]
            endFDP()
            break;
        case "22:00-22:59":
            console.log("MAX FDP " + columnData[columnNum][7] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][7]
            maxFDPdec = columnData[columnNum][7]
            endFDP()
            break;
        case "23:00-23:59":
            console.log("MAX FDP " + columnData[columnNum][8] + " hrs")
            document.getElementById("maxFDP").innerHTML = "Maximum FDP (hours) = " + columnData[columnNum][8]
            maxFDPdec = columnData[columnNum][8]
            endFDP()
            break;   
                            
    }
}

function endFDP(){
    console.log("change time")
    startFDPHH = document.getElementById("startFDPHH").value
    startFDPMM = document.getElementById("startFDPMM").value

    startFDPHH60 = Number(startFDPHH)
    startFDPMM60 = Number(startFDPMM) / 60
    startFDPdec = startFDPHH60 + startFDPMM60
    
    
    endFDPdec = startFDPdec + maxFDPdec

    console.log(typeof startFDPHH60)
    console.log(typeof startFDPMM60)
    console.log(startFDPHH60)

    console.log(startFDPdec + " start of FDP")
    console.log(maxFDPdec + " max FDP")
    console.log(endFDPdec + " end of FDP")
    splitDuty()

    if (endFDPdec > 24){
        
        endFDPdec = endFDPdec - 24
        endFDPHH = Math.floor(endFDPdec)
        endFDPMM = Math.floor((endFDPdec - Math.floor(endFDPdec)) * 60)
        console.log(endFDPHH + " end FDP hour")
        console.log(endFDPMM + " end fdp minutes")
        console.log(endFDPdec + " end of FDP was greater than 24")

        document.getElementById("endFDPHH").value = endFDPHH
        document.getElementById("endFDPMM").value = endFDPMM
        
    } else {
        
        endFDPHH = Math.floor(endFDPdec)
        endFDPMM = Math.floor((endFDPdec - Math.floor(endFDPdec)) * 60)
        console.log(endFDPHH + " end FDP hour")
        console.log(endFDPMM + " end fdp minutes")
        console.log(endFDPdec + " end of FDP was less than 24")

        document.getElementById("endFDPHH").value = endFDPHH
        document.getElementById("endFDPMM").value = endFDPMM

    }
}

function splitDuty(){
    isSplit = document.getElementById("splitDuty").value 
    console.log(isSplit + " before IF")

    let atHotelHH = Number(document.getElementById("atHotelHH").value)
    let atHotelMM = Number(document.getElementById("atHotelMM").value)
    let leaveHotelHH = Number(document.getElementById("leaveHotelHH").value)
    let leaveHotelMM = Number(document.getElementById("leaveHotelMM").value)
    let atHoteldec = atHotelHH + (atHotelMM/60)
    let leaveHoteldec = leaveHotelHH + (leaveHotelMM/60)
    let totalRest = 0
    let rest0600to2359 = 0
    let rest2400to0559 = 0
    let restExtension = 0
    console.log(totalRest + " total rest calc")
    console.log(atHotelHH)
    console.log(atHoteldec + " at hotel decimal")

    console.log(leaveHotelHH)
    console.log(leaveHoteldec + " leave hotel decimal")

    if (isSplit == "yes") {
        console.log("-----it is a split-----")
        console.log(startFDPdec + " start of FDP")
        console.log(endFDPdec + " end of FDP")
        
        if (atHoteldec < 24 & leaveHoteldec < atHoteldec){
            
            console.log("at hotel before midnight")

            totalRest = (24 - atHoteldec) + leaveHoteldec 

            console.log(totalRest + " total rest hrs before sectioning it out")

            if (leaveHoteldec >= 6){
                console.log(leaveHoteldec + " leave hotel at or after 6am")
             
                rest0600to2359 = ((23 + (59/60)) - atHoteldec) + (leaveHoteldec - (5 + (59/60)))

                rest2400to0559 = (5 + (59/60))

                console.log(rest0600to2359 + " total rest 0600 to 2359 midnight leave hotel at or after 6am")
                console.log(rest2400to0559 + " total rest 2400 to 0559 leave hote at or after 6 am")
            } else if (leaveHoteldec < 6){
                console.log(leaveHoteldec + " leave hotel before 6am")
                rest0600to2359 = (23 + (59/60)) - atHoteldec
                rest2400to0559 = leaveHoteldec
                console.log(rest0600to2359 + " rest before midnight leave hotel before 6am")
                console.log(rest2400to0559 + " rest after midnight leave before 6 am")
            } 
            
            let totalRestm45 = (rest0600to2359 + rest2400to0559) - 0.75

            console.log(totalRestm45 + " rest minue 45 mins")

            restExtension = totalRestm45 - (rest0600to2359 * 0.5)

            console.log(restExtension + " rest extension ")
            endFDPdec += restExtension

        } else if (atHoteldec >= 0 & leaveHoteldec > atHoteldec) {

            console.log("at hotel after midnight")

            totalRest = leaveHoteldec - atHoteldec 

            console.log(totalRest + " total rest hrs before sectioning it out")

            if (leaveHoteldec >= 6){
                console.log(leaveHoteldec + " leave hotel at or after 6am")
             
                rest0600to2359 = leaveHoteldec - 6

                rest2400to0559 = (5 + (59/60)) - atHoteldec

                console.log(rest0600to2359 + " total rest 0600 to 2359 arrive after midnight leave hotel at or after 6am")
                console.log(rest2400to0559 + " total rest 2400 to 0559 arrive after midnight leave hote at or after 6 am")

                

            } else if (leaveHoteldec < 6){
                console.log(leaveHoteldec + " leave hotel before 6am")

                rest0600to2359 = 0
                rest2400to0559 = leaveHoteldec - atHoteldec

                console.log(rest0600to2359 + " rest before midnight leave hotel before 6am")
                console.log(rest2400to0559 + " rest after midnight leave before 6 am")


            } 

            
            let totalRestm45 = (rest0600to2359 + rest2400to0559) - 0.75

            console.log(totalRestm45 + " rest minus 45 mins")

            restExtension = totalRestm45 - (rest0600to2359 * 0.5)
            
            console.log(restExtension + " rest extension ")
            
            endFDPdec += restExtension

        }


    } else if (isSplit == "no"){
        console.log("-----it is NOT a split----")
        console.log(startFDPdec + " start of FDP")
        console.log(endFDPdec + " end of FDP - no rest extension")
        
    }
    console.log(isSplit + " end of function")
}
