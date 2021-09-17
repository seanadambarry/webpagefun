"use strict"

let randomword1 = allwords[Math.floor(Math.random() * allwords.length)];
let randomword2 = allwords[Math.floor(Math.random() * allwords.length)];
let randomword3 = allwords[Math.floor(Math.random() * allwords.length)];
let randomword4 = allwords[Math.floor(Math.random() * allwords.length)];
let randomword5 = allwords[Math.floor(Math.random() * allwords.length)];



document.getElementById("randomword1").innerHTML = randomword1;
document.getElementById("randomword2").innerHTML = randomword2;
document.getElementById("randomword3").innerHTML = randomword3;
document.getElementById("randomword4").innerHTML = randomword4;
document.getElementById("randomword5").innerHTML = randomword5;

let inputField = document.getElementById("userInput");
// Execute a function when the user releases a key on the keyboard
inputField.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    userEntry()
    //after pressing enter, clear the text box --maybe add fucntonality to log the previous commands below with a loop etc
    document.getElementById("userInput").value = "";
    
  } else if (event.keyCode === 38) {
 
  } else if (event.keyCode === 27) {
    document.getElementById("userInput").value = ""
  }
});

//this is the main user interface where the user enters commands.

function userEntry() {
    let entCom = (document.getElementById("userInput").value).toLowerCase();
    let wordExists = allwords.includes(entCom, 0);
 

    if (wordExists === true){
      document.getElementById("testareablank").innerHTML = "yes, this word exists";
    } else {
      document.getElementById("testareablank").innerHTML = "no, this words does not exist";
    }
}