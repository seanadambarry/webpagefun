"use strict";
function calculate() {
    let firstNumber=document.forms["calculator"]["numBox1"].value;
    let secondNumber=document.forms["calculator"]["numBox2"].value;
    let resultCalc=firstNumber*secondNumber
    document.getElementById("p1").innerHTML=resultCalc;
}