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
    name : 'Rick',
    _age : 41,
    _health : 70,
    get health(){
        //if health is lower than 20, just say it's 'low'
        if (this._health < 20){
            return 'Low'
        } else {
            return this._health;
        }
    },
    hunger : 'I could eat something',
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

//monster attributes
const monsterTypes = [
    'Ollie', 'Andi', 'Sypereka', 'Panda', 'Flirt'
]
const monsterStrength = [
    90, 70, 88, 77, 66
]



let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
let vowels = ['a','e','i','o','u'];

//totally randomize a monster name
let monsterName = [];
for (let m = 0; m < 100; m++){
    let randomnum = Math.floor(Math.random() * 100);
    if (randomnum <= 20){
        //name is 5 char long
        monsterName[m] = consonants[Math.floor(Math.random() * consonants.length)]
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
    }else if (randomnum >=21 && randomnum <= 40){
        //name is 6 char long
        monsterName[m] = consonants[Math.floor(Math.random() * consonants.length)]
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
        + consonants[Math.floor(Math.random() * consonants.length)]
    
    }else if (randomnum >= 41 && randomnum <= 60) {
        //name is 3 char long
        monsterName[m] = vowels[Math.floor(Math.random() * vowels.length)]
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
    } else if (randomnum >= 61 && randomnum <=70){
        //name is 4 char long plus a number from 1 to 100
        monsterName[m] = vowels[Math.floor(Math.random() * vowels.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
        + consonants[Math.floor(Math.random() * consonants.length)]
        + Math.floor(Math.random() * 100)
    } else if (randomnum >= 71 && randomnum <= 90 ){
        monsterName[m] = vowels[Math.floor(Math.random() * vowels.length)]
        + 'joe'
        + consonants[Math.floor(Math.random() * consonants.length)]
    } else {
        monsterName[m] = vowels[Math.floor(Math.random() * vowels.length)]
        + 'massi'
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
    }
}

//monster generator
let monsters = [];
for (let m = 0; m < 100; m++){
    monsters[m] = {
        //randomize type and strength
        name: monsterName[Math.floor(Math.random() * monsterName.length)],
        type : monsterTypes[Math.floor(Math.random() * monsterTypes.length)],
        strength : monsterStrength[Math.floor(Math.random() * monsterTypes.length)],
        health : Math.floor(Math.random() * 50) + 50
    }
    
}
console.log(monsters)
console.log(monsterName)

let currentenemy;

//show hunger stat since you would feel hungry even if you didn't know anything else
document.getElementById("health").innerHTML = myself.health;
document.getElementById("hunger").innerHTML = myself.hunger;

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

//get a new enemy that are monsters from the monster array
function getNewEnemy() {
    return monsters[Math.floor(Math.random() * 100)]
}

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
    } else if (entCom === 'who am i'){
        document.getElementById("name").innerHTML = myself.name;
    } else if (entCom === 'new enemy'){
        currentenemy = getNewEnemy()
        document.getElementById("ename").innerHTML = currentenemy.name;
        document.getElementById("etype").innerHTML = currentenemy.type;
        document.getElementById("ehealth").innerHTML = currentenemy.health;
        document.getElementById("estrength").innerHTML = currentenemy.strength;
        console.log(currentenemy)
    }
};