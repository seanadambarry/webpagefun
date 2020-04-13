"use strict";
function calculate() {
    let outHH=document.forms["at-calc"]["outHH"].value;
    let outMM=document.forms["at-calc"]["outMM"].value;
    let offHH=document.forms["at-calc"]["offHH"].value;
    let offMM=document.forms["at-calc"]["offMM"].value;
    let onHH=document.forms["at-calc"]["onHH"].value;
    let onMM=document.forms["at-calc"]["onMM"].value;
    let inHH=document.forms["at-calc"]["inHH"].value;
    let inMM=document.forms["at-calc"]["inMM"].value;
    
    let outMM60 = (outMM / 60);
    //outMM60 = outMM60.toFixed(1);
    let outTime = Number(outHH) + Number(outMM60)

    let offMM60 = (offMM / 60);
    //offMM60 = offMM60.toFixed(1);
    let offTime = offHH + offMM60
    
    let onMM60 = (onMM / 60);
    //onMM60 = onMM60.toFixed(1);
    let onTime = Number(onHH) + Number(onMM60)
    
    let inMM60 = (inMM / 60);
    //inMM60 = inMM60.toFixed(1);
    let inTime = Number(inHH) + Number(inMM60)

    let flightTime = inTime - outTime
    if (flightTime <= 0) {
        flightTime = 24 + flightTime;
    }
    flightTime = flightTime.toFixed(1)
    
    let airTime = onTime - offTime
    if (airTime <= 0) {
        airTime = 24 + airTime;
    }
    airTime = airTime.toFixed(1)

    alert("OUT " + outTime + "\n"+ 
    "OFF " + offTime + "\n" + 
    "ON " + onTime + "\n" + 
    "IN " + inTime + "\n");

    alert(flightTime);
    alert(airTime);

    document.getElementById("flightTime").innerHTML=flightTime;
    document.getElementById("airTime").innerHTML=airTime;

}