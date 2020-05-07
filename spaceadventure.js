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
    _age : 41,
    _health : 100,
    get health(){
        //if health is lower than 20, just say it's 'low'
        if (this._health < 20){
            return 'Low'
        } else {
            return this._health;
        }
    },
    hunger : 0,
    strength : 50,
    set age(newAge){
        //check to see if the prompt from userCommand() !isNaN
        if (!isNaN(newAge)){
          this._age = newAge;
        } else {
            alert('You must assign a number to age');
            console.log('You must assign a number to age');
            myself.age = Number(prompt("What is your new age?"));
        }
      }
}

let lastCommand = '';

for (let key in spaceShip) {
    console.log(key, spaceShip[key])
    
};  





function userCommand() {
    let entCom;
    //make value from text entry box all lowercase
    entCom = (document.getElementById("userInput").value).toLowerCase();
    lastCommand = entCom
    console.log(entCom)
    document.getElementById("lastcommand1").innerHTML = entCom;
    if (entCom === 'my stats'){
        //displays the persons stats from the myself object
        document.getElementById("displayArea").innerHTML = `Your stats are to the right`;
        document.getElementById("name").innerHTML = myself.name;
        document.getElementById("age").innerHTML = myself._age;
        document.getElementById("health").innerHTML = myself.health;
        document.getElementById("hunger").innerHTML = myself.hunger;
        document.getElementById("strength").innerHTML = myself.strength;
    } else if (entCom === 'change age'){
        myself.age = Number(prompt("What is your new age?"));
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
    
  } else if (event.keyCode === 38) {
    document.getElementById("userInput").value = lastCommand
  } else if (event.keyCode === 27) {
    document.getElementById("userInput").value = ""
  }
});