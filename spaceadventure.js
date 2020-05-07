"use strict"

window.onload = function() {
    document.getElementById("userInput").focus();
  };

let spaceShip = {
    name: 'RickMobile',
    systems: {
        engineering: {
            manager: 'Rick',
            powerlevel: 50
        },
        combat: {
            manager: 'Summer'
        },
        medical: {
            manager: 'Beth',
            assManager: 'Greg'
        },
        waste: {
            manager: 'Jerry'
        },
    },
    fueltype: 'green death crystals'
}

let myself = {
    name : 'Sean',
    age : 41,
    health : 100,
    hunger : 0,
    strength : 50,
}

for (let key in spaceShip) {
    console.log(key, spaceShip[key])
    
};  





function userCommand() {
    let entCom;
    entCom = document.getElementById("userInput").value;
    console.log(entCom)
    document.getElementById("lastcommand1").innerHTML = entCom;
    if (entCom === 'mystats'){
        document.getElementById("displayArea").innerHTML = `Your stats are to the right`;
        document.getElementById("name").innerHTML = myself.name;
        document.getElementById("age").innerHTML = myself.age;
        document.getElementById("health").innerHTML = myself.health;
        document.getElementById("hunger").innerHTML = myself.hunger;
        document.getElementById("strength").innerHTML = myself.strength;
    }
};

// Get the input field
var inputField = document.getElementById("userInput");

// Execute a function when the user releases a key on the keyboard
inputField.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("userCommandButton").click();
    //after pressing enter, clear the text box --maybe add fucntonality to log the previous commands below with a loop etc
    document.getElementById("userInput").value = "";
    
  }
});