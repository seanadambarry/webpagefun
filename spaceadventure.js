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
    //name is blank for now but your name is Rick Sanchez
    _name : '',
    set name(newName){
        myself._name = newName;
        document.getElementById("name").innerHTML = newName;
    },
    //it will be between 60-70
    _age : '',
    set age(newAge){
        myself._age = newAge;
        document.getElementById("age").innerHTML = newAge;
    },
    _health : 70,
    set health(newHealth){
        //if health is lower than 20, just display 'low' on page
        if (this._health < 20){
            document.getElementById("health").innerHTML = 'Low'
            this._health = newHealth
        } else {
            document.getElementById("health").innerHTML = newHealth;
            this._health = newHealth
        }
    },
    _hunger : 'I could eat something',
    _strength : 50,
    set strength(newStrength){

    },
    universeLocation : '',
    set universeLocation(newUniverseLocation){

    },
    //what the active storyline is
    actStoryLine : '',
    //story progress number, increments by 0.1 but may not be 10 sections
    storyProgNum : 0
    
}

let totAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
let vowels = ['a','e','i','o','u'];

//---------------MONSTERS-they are randomized-------------
//monster generator function
let monsters = [];
function monsterGenerator(){
    const monsterTypes = [
        'Ollie', 'Andi', 'Sypereka', 'Panda', 'Flirt'
    ]
    const monsterStrength = [
        90, 70, 88, 77, 66
    ]
    
    
    let monsterName = [];
    let randomnum;
    //totally randomize a monster name
    for (let mn = 0; mn < 100; mn++){
        randomnum = Math.floor(Math.random() * 100);
        if (randomnum <= 20){
            //name is 5 char long
            monsterName[mn] = consonants[Math.floor(Math.random() * consonants.length)]
            + consonants[Math.floor(Math.random() * consonants.length)]
            + vowels[Math.floor(Math.random() * vowels.length)]
            + consonants[Math.floor(Math.random() * consonants.length)]
            + vowels[Math.floor(Math.random() * vowels.length)]
        } else if (randomnum >=21 && randomnum <= 40){
            //name is 6 char long
            monsterName[mn] = consonants[Math.floor(Math.random() * consonants.length)]
            + consonants[Math.floor(Math.random() * consonants.length)]
            + vowels[Math.floor(Math.random() * vowels.length)]
            + consonants[Math.floor(Math.random() * consonants.length)]
            + vowels[Math.floor(Math.random() * vowels.length)]
            + consonants[Math.floor(Math.random() * consonants.length)]
        
        } else if (randomnum >= 41 && randomnum <= 60) {
            //name is 3 char long
            monsterName[mn] = vowels[Math.floor(Math.random() * vowels.length)]
            + consonants[Math.floor(Math.random() * consonants.length)]
            + vowels[Math.floor(Math.random() * vowels.length)]
        } else if (randomnum >= 61 && randomnum <=70){
            //name is 4 char long plus a number from 1 to 100
            monsterName[mn] = vowels[Math.floor(Math.random() * vowels.length)]
            + vowels[Math.floor(Math.random() * vowels.length)]
            + consonants[Math.floor(Math.random() * consonants.length)]
            + Math.floor(Math.random() * 100)
        } else if (randomnum >= 71 && randomnum <= 90 ){
            monsterName[mn] = vowels[Math.floor(Math.random() * vowels.length)]
            + 'joe'
            + consonants[Math.floor(Math.random() * consonants.length)]
        } else {
            monsterName[mn] = vowels[Math.floor(Math.random() * vowels.length)]
            + 'massi'
            + consonants[Math.floor(Math.random() * consonants.length)]
            + vowels[Math.floor(Math.random() * vowels.length)]
        }
    }
    //actual generator
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
}
//---------------MONSTERS--------------

//---------------UNIVERSE - it is randomized--------------
let universes = [];
function universeGenerator(){
    //call all of the creation functions in here and maybe consoldate it later
    let universeName = [];
    for (let un = 0; un < 1000; un++){
        universeName[un] = totAlphabet[Math.floor(Math.random() * totAlphabet.length)] + '-' + (Math.floor(Math.random() * 1000))
        
    }
    let numGalaxies;
    let numTotalPlanets;
    let numHabitablePlanets;
    let numHabPlanetsHasLife;
    let numHabPlanetLifeCiv;
    let numHabPlanetsInRange;
    for (let u = 0; u < 1000; u++){
        numGalaxies = (Math.floor(Math.random() * 200000000000) + 1);
        numTotalPlanets = Math.floor(numGalaxies * 100000000000);
        numHabitablePlanets = Math.floor(numTotalPlanets / 11000000000);
        numHabPlanetsHasLife = Math.floor(numHabitablePlanets / 11000000000);
        numHabPlanetLifeCiv = Math.floor(numHabPlanetsHasLife / (Math.PI));
        numHabPlanetsInRange = Math.floor(numHabPlanetLifeCiv / (Math.PI));
       
        universes[u] = {
            name: universeName[Math.floor(Math.random() * universeName.length)],
            galaxies: numGalaxies,
            planets : numTotalPlanets,
            habitablePlanets: numHabitablePlanets,
            habPlanetsHasLife : numHabPlanetsHasLife,
            habPlanetLifeCiv : numHabPlanetLifeCiv,
            habPlanetsInRange: numHabPlanetsInRange
        }
        
    }
    console.log(universes)
}
//---------------UNIVERSE--------------


//---------------DESTINATIONS ON PLANET - randomized--------------
let destsOnPlanets = []


let currentenemy;
let lastCommand = '';

let storyLine = [
    'The Beginning',
    'Now that we know who we are and where we are'
]

let story = [
    'You wake up and find yourself in a bed, in a tent, and it smells like peanut butter and farts',
    "You call out, 'Hello? Hellooooooo.' A doctor with a stethescope comes through the tent entrance and says 'Hello Rick.' He looks like Mr. Peanut! Except with a stethescope and scrubs instead of a cane and glasses. He must have just left the room when you woke up! Your name is Rick! You want to know what your last name is and you see it on your chart."
]

let lastStory = '';


//----STARTUP STUFF----
//the active story determines the answers to the users commands and where rick is etc.
myself.actStoryLine = storyLine[0]
console.log(myself.actStoryLine)
monsterGenerator();

//make universe generator last after other elements are creates
universeGenerator()
document.getElementById("storyTitle").innerHTML = storyLine[0];
document.getElementById("storyArea1").innerHTML = story[0];
document.getElementById("storyArea2").innerHTML = '';
//show hunger stat since you would feel hungry even if you didn't know anything else
document.getElementById("health").innerHTML = myself._health;
document.getElementById("hunger").innerHTML = myself._hunger;

// Get the input field
let inputField = document.getElementById("userInput");
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

//this is the main user interface where the user enters commands.
function userCommand() {
    let entCom;
    //make the lastStory line show in StoryArea1
    document.getElementById("storyArea1").innerHTML = lastStory
    //make value from text entry box all lowercase
    entCom = (document.getElementById("userInput").value).toLowerCase();
    lastCommand = entCom
    console.log(entCom)
    if (entCom === 'my stats'){
        //displays the persons stats from the myself object
        document.getElementById("name").innerHTML = myself._name;
        document.getElementById("age").innerHTML = myself._age;
        document.getElementById("health").innerHTML = myself._health;
        document.getElementById("hunger").innerHTML = myself._hunger;
        document.getElementById("strength").innerHTML = myself._strength;
    } else if (entCom === 'change'){
        myself.age = Number(prompt("What is your new age?"));
       
        
    } else if (entCom === 'who am i' || entCom === 'who am i?'){
        //find out who you are. Generally one the first questions to ask
        if (myself._name === ''){
            document.getElementById("storyArea2").innerHTML = "Huh. You don't remember who you are. Someone around here should know. Maybe I should call out! You sit up at the edge of your bed and think of a PB&J sandwich";    
            lastStory = "Huh. You don't remember who you are. Someone around here should know. Maybe I should call out! You sit up at the edge of your bed and think of a PB&J sandwich";    
        } else if (myself._name === 'Rick'){
            document.getElementById("storyArea2").innerHTML = "You already know your own name, idiot! You are Rick!"
            lastStory = "You already know your own name, idiot! You are! Rick!"
        }
    } else if (entCom === 'talk'){
        console.log('talk command entered and talkProgNum is :' + myself.storyProgNum + myself.actStoryLine)
        if (myself.actStoryLine === storyLine[0] && myself.storyProgNum === 0){
            document.getElementById("storyArea2").innerHTML = story[1]
             //setting rick's name and using the method
            myself.name = 'Rick';
            lastStory = story[1]
            myself.storyProgNum = 0.1
            console.log(myself.storyProgNum)
        }
    } else if (entCom === 'look'){
    
    } else if (entCom === 'fight'){

    } else if (entCom === 'new enemy'){
        currentenemy = getNewEnemy()
        document.getElementById("ename").innerHTML = currentenemy.name;
        document.getElementById("etype").innerHTML = currentenemy.type;
        document.getElementById("ehealth").innerHTML = currentenemy.health;
        document.getElementById("estrength").innerHTML = currentenemy.strength;
        console.log(currentenemy)
    } else {
        document.getElementById("errorinput").innerHTML = 'Command not recognized'
    }
}

/*
function square(x) {
    return x = x * x;
}
var y = 10;
square(y);
console.log(y); // -- no change
console.log(result)
*/