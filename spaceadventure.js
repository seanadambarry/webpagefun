"use strict"

window.onload = function() {
    document.getElementById("userInput").focus();
    
  };
let myself = {};
let totAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
let vowels = ['a','e','i','o','u'];
let monsters = [];
let universes = [];
let planets = [];
let destsOnPlanets = []
let currentenemy;
let allCommands;
let runStartStop = 'start'
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
let spaceShip = '';
let compIntervalID;
let ssRunningIntervalID;
let ssStartStopSeqIntervalID;

function createSpaceShip(){
    //i hid the spaceship table on startup for now
    spaceShip = {
        _name : '',
        _isRunning : false,
        set isRunning(statusCHG){
            this._isRunning = statusCHG;
            if (statusCHG === true){
                document.getElementById("ssRunningOrShutDown").style.color = "green";
                document.getElementById("ssRunningOrShutDown").innerHTML = "RUNNING";
                document.getElementById("ssStatusMessage").innerHTML = '';
                document.getElementById("ssStartStop").innerHTML = 'Stop';
                document.getElementById("ssStartStop").onclick = stopSpaceShip;
                ssRunningIntervalID = setInterval(spaceShipParaAnim, 1000)

                runStartStop = 'stop'
            } else if (statusCHG === false) {
                document.getElementById("ssRunningOrShutDown").style.color = "red";
                document.getElementById("ssRunningOrShutDown").innerHTML = "SHUTDOWN";
                document.getElementById("ssStartStop").innerHTML = 'Start';
                document.getElementById("ssStartStop").onclick = startSpaceShip;
                spaceShip.computerRunning = false;
                
                runStartStop = 'start'
            }
        },
        get isRunning(){
            return this._isRunning;
        },
        _fuelAmount : 0,
        set fuelAmount(newFuelAmount){
            this._fuelAmount = newFuelAmount;
            document.getElementById("ssFuelAmount").innerHTML = newFuelAmount.toFixed(0) + ' Warparods';
        },
        get fuelAmount(){
            return Math.floor(this._fuelAmount);
        },
        _generatorOut : 0,
        set generatorOut(newGeneratorOut){
            this._generatorOut = newGeneratorOut;
            document.getElementById("ssGenOut").innerHTML = newGeneratorOut.toFixed(1) + ' %'
        },
        get generatorOut(){
            return this._generatorOut
        },
        _computerRunning : false,
        set computerRunning(onOff){
            if (onOff === true){
                this._computerRunning = onOff;
                compIntervalID = setInterval(computerRunning, 100);
            } else if (onOff === false){
                this._computerRunning = onOff;
                clearInterval(compIntervalID)
                document.getElementById("ssComputerRunning").innerHTML = "OFF";
            }
        },
        get computerRunning(){
            return this._computerRunning;
        },
        //FF is 1000 warparods per light year
        _fuelFlow : 1000,
        set fuelFlow (newFF){
            this._fuelFlow = newFF;
            document.getElementById("ssFuelFlow").innerHTML = spaceShip.fuelFlow.toFixed(1) + ' PSI'
        },
        get fuelFlow(){
            return this._fuelFlow;
        },
        toFromChecked : false,
        configuredFuelFlow : 1000
    }
}





function startSpaceShip(){
    if (spaceShip.isRunning === false){
        if (spaceShip.fuelAmount <= 10){
            document.getElementById("ssStatusMessage").innerHTML = 'Not enough fuel for start';
            document.getElementById("ssStatusMessage").style.color = "red";
        } else if (spaceShip.fuelAmount > 10){
            ssStartStopSeqIntervalID = setInterval(startStopSequence, Math.random() * 1000 + 500)
        }
    } 
}

function stopSpaceShip(){
    startStopSequence()
    console.log('stopping space ship and is running is: ' + spaceShip.isRunning);
    document.getElementById("ssStatusMessage").innerHTML = 'Shutting down ship';
    ssStartStopSeqIntervalID = setInterval(startStopSequence, Math.random() * 500 + 500)
}

let ss = 0
let st = 0
function startStopSequence(){
    if (runStartStop === 'start'){
        document.getElementById("ssRunningOrShutDown").innerHTML = "START SEQ";
        ss++
        if (ss === 1){
            console.log('ss1')
            document.getElementById("ssStatusMessage").style.color = "green";
            document.getElementById("ssStatusMessage").innerHTML = 'Start Sequence initiated';
            spaceShip.generatorOutput += 10
        } else if (ss === 2){
            document.getElementById("ssStatusMessage").innerHTML = 'Boost pumps on';
            console.log('ss2');
            spaceShip.fuelAmount -= 1;
            console.log(spaceShip.fuelAmount);
            spaceShip.generatorOut += 1;
            
        } else if (ss === 3){
            document.getElementById("ssStatusMessage").innerHTML = 'spooling';
            console.log('ss3');
            spaceShip.generatorOut += 1;
            
        } else if (ss === 4){
            console.log('ss4')
            spaceShip.generatorOut += 1;
            
        } else if (ss === 5){
            document.getElementById("ssStatusMessage").innerHTML = 'Igniters on';
            console.log('ss5');
            
            spaceShip.fuelAmount -= 2;
            console.log(spaceShip.fuelAmount);
            
        } else if (ss === 6){
            document.getElementById("ssStatusMessage").innerHTML = 'Positive fuel flow';
            console.log('ss6');
            
            
        } else if (ss === 7){
            console.log('ss7');
            spaceShip.generatorOut = Math.random() * 10 + 30;
            
        } else if (ss === 8){
            document.getElementById("ssStatusMessage").innerHTML = 'We have ignition!';
            console.log('ss8');
            spaceShip.generatorOut = Math.random() * 10 + 50;
            spaceShip.fuelAmount -= 1;
            console.log(spaceShip.fuelAmount);
            
        } else if (ss === 9){
            console.log('ss9');
            spaceShip.generatorOut = Math.random() * 10 + 70;
            
        } else if (ss === 10){
            document.getElementById("ssStatusMessage").innerHTML = 'Generators online';
            console.log('ss10');
            spaceShip.generatorOut = Math.random() * 10 + 80;
            spaceShip.fuelAmount -= 1;
            console.log(spaceShip.fuelAmount);
            console.log(`next value for gen out is 99.8 ${spaceShip.generatorOut}`)
            
        } else if (ss === 11){
            console.log('ss11');
            spaceShip.generatorOut = 99.8;
            ss = 0;
            spaceShip.isRunning = true;
            console.log('starting space ship and is running is: ' + spaceShip.isRunning)
            clearInterval(ssStartStopSeqIntervalID)
            runStartStop = 'stop'
        };
        console.log(ss)
    } else if (runStartStop === 'stop'){
        clearInterval(ssRunningIntervalID)
        document.getElementById("ssRunningOrShutDown").innerHTML = "STOP SEQ";
        st++
        if (st === 1){
            console.log('st1')
            spaceShip.generatorOut = Math.random() * 10 + 90;
            spaceShip.fuelFlow = Math.random() * 100 + 900;
            
        } else if (st === 2){
            console.log('st2');
            spaceShip.generatorOut = Math.random() * 10 + 80;
            spaceShip.fuelFlow = Math.random() * 100 + 800;
           
        } else if (st === 3){
            console.log('st3');
            spaceShip.generatorOut = Math.random() * 10 + 70;
            spaceShip.fuelFlow = Math.random() * 100 + 700;
           
        } else if (st === 4){
            console.log('st4');
            spaceShip.generatorOut = Math.random() * 10 + 60;
            spaceShip.fuelFlow = Math.random() * 100 + 600;
            
        } else if (st === 5){
            console.log('st5');
            spaceShip.generatorOut = Math.random() * 10 + 50;
            spaceShip.fuelFlow = Math.random() * 100 + 500;
          
        } else if (st === 6){
            console.log('st6');
            spaceShip.generatorOut = Math.random() * 10 + 40;
            spaceShip.fuelFlow = Math.random() * 100 + 400;
           
        } else if (st === 7){
            console.log('st7');
            spaceShip.generatorOut = Math.random() * 10 + 30;
            spaceShip.fuelFlow = Math.random() * 100 + 300;
            
        } else if (st === 8){
            console.log('st8');
            spaceShip.generatorOut = Math.random() * 10 + 20;
            spaceShip.fuelFlow = Math.random() * 100 + 200;
            
        } else if (st === 9){
            console.log('st9');
            spaceShip.generatorOut = Math.random() * 10 + 10;
            spaceShip.fuelFlow = Math.random() * 100 + 100;
            
        } else if (st === 10){
            console.log('st10');
            spaceShip.generatorOut = Math.random() * 10;
            spaceShip.fuelFlow = Math.random() * 100;
            
        } else if (st === 11){
            console.log('st11');
            spaceShip.isRunning = false;
            spaceShip.generatorOut = 0;
            spaceShip.fuelFlow = 0;
            spaceShip.computerRunning = false;
            clearInterval(ssStartStopSeqIntervalID)
            st = 0
        };
    }
}

//just want the spaceship diplays to fluctuate
let ssp = 0;
function spaceShipParaAnim(){
    if (ssp === 0){
        spaceShip.fuelFlow = Math.random() * 15.5 + 990;
        spaceShip.generatorOut = Math.random() * 3.1459 + 98;
        ssp++
    } else if (ssp === 1){
        spaceShip.fuelFlow = Math.random() * 15.5 + 990;
        spaceShip.generatorOut = Math.random() * 3.1459 + 98;
        ssp++
    } else if (ssp === 2){
        spaceShip.fuelFlow = Math.random() * 15.5 + 990;
        spaceShip.generatorOut = Math.random() * 3.1459 + 98;
        ssp++
    } else if (ssp === 3){
        spaceShip.fuelFlow = Math.random() * 15.5 + 990;
        spaceShip.generatorOut = Math.random() * 3.1459 + 98;
        ssp++
    } else if (ssp === 4){
        spaceShip.fuelFlow = Math.random() * 15.5 + 990;
        spaceShip.generatorOut = Math.random() * 3.1459 + 98;
        ssp++
    } else if (ssp === 5){
        spaceShip.fuelFlow = Math.random() * 15.5 + 990;
        spaceShip.generatorOut = Math.random() * 3.1459 + 98;
        ssp++
    } else if (ssp === 6){
        spaceShip.fuelFlow = Math.random() * 15.5 + 990;
        spaceShip.generatorOut = Math.random() * 3.1459 + 98;
        ssp = 0;
    }

}

function createMyself(){
myself = {
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
    _health : 0,
    set health(newHealth){
        //if health is lower than 20, just display 'low' on page
        this._health = newHealth
        if (newHealth <= 20){
            document.getElementById("health").innerHTML = 'Low'
        } else if (newHealth > 20 ){
            document.getElementById("health").innerHTML = newHealth;
        }
    },
    get health (){
        return this._health
    },
    _hunger : 'I could eat something',
    _strength : 50,
    set strength(newStrength){
        
    },
    _currentUniverse : [],
    set currentUniverse(newCurrentUniverse){
        this._currentUniverse = newCurrentUniverse;
        document.getElementById("currentUniverse").innerHTML = myself._currentUniverse.name;
        document.getElementById("currentNumHabPlanets").innerHTML = myself._currentUniverse.habPlanetsInRange;
    },
    _currentPlanet : [],
    set currentPlanet(newPlanet){
        this._currentPlanet = newPlanet;
        document.getElementById("currentPlanet").innerHTML = myself._currentPlanet.name;
        document.getElementById("ssFromInput").value = myself._currentPlanet.name;
        document.getElementById("fromCOORD").innerHTML = myself._currentPlanet.planetCOORD;
    },
    //i can define my fight method here
    fight(){

    },
    //what the active storyline is
    actStoryLine : '',
    //story progress number, increments by 0.1 but may not be 10 sections
    storyProgNum : 0
    
}
}

//---------------MONSTERS-they are randomized-------------
//monster generator function

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
            monsterName[mn] = consonants[Math.floor(Math.random() * consonants.length)].toUpperCase()
            + consonants[Math.floor(Math.random() * consonants.length)]
            + vowels[Math.floor(Math.random() * vowels.length)]
            + consonants[Math.floor(Math.random() * consonants.length)]
            + vowels[Math.floor(Math.random() * vowels.length)]
        } else if (randomnum >=21 && randomnum <= 40){
            //name is 6 char long
            monsterName[mn] = consonants[Math.floor(Math.random() * consonants.length)]
            + consonants[Math.floor(Math.random() * consonants.length)]
            + vowels[Math.floor(Math.random() * vowels.length)]
            + consonants[Math.floor(Math.random() * consonants.length)].toUpperCase()
            + vowels[Math.floor(Math.random() * vowels.length)]
            + consonants[Math.floor(Math.random() * consonants.length)]
        
        } else if (randomnum >= 41 && randomnum <= 60) {
            //name is 3 char long
            monsterName[mn] = vowels[Math.floor(Math.random() * vowels.length)].toUpperCase()
            + consonants[Math.floor(Math.random() * consonants.length)]
            + vowels[Math.floor(Math.random() * vowels.length)]
        } else if (randomnum >= 61 && randomnum <=70){
            //name is 4 char long plus a number from 1 to 100
            monsterName[mn] = vowels[Math.floor(Math.random() * vowels.length)].toUpperCase()
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
            + consonants[Math.floor(Math.random() * consonants.length)].toUpperCase()
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
            health : Math.floor(Math.random() * 50) + 50,
            alive : true
        }
    
    }
}
//---------------MONSTERS--------------

//---------------UNIVERSE - it is randomized--------------

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
        let planetDeets = []
        //use num of planets in range then get random planet deets and assigne the right amountof planets with deets
        for (let p = 0; p < numHabPlanetsInRange; p++){
            planetDeets[p] = planets[Math.floor(Math.random() * planets.length)]
        }
       
        universes[u] = {
            name: universeName[Math.floor(Math.random() * universeName.length)],
            galaxies: numGalaxies,
            planets : numTotalPlanets,
            habitablePlanets: numHabitablePlanets,
            habPlanetsHasLife : numHabPlanetsHasLife,
            habPlanetLifeCiv : numHabPlanetLifeCiv,
            habPlanetsInRange: numHabPlanetsInRange,
            planetsInRange : planetDeets,
        }

        
    }
}
//---------------UNIVERSE--------------
//---------------PLANETS randomized--------------

function planetGenerator(){
    let planetName =[];
    let randomnum;
    for (let pl = 0; pl < 1000; pl++){
    randomnum = Math.floor(Math.random() * 1000);
        if (randomnum <= 200){
        //name is 5 char long
        planetName[pl] = consonants[Math.floor(Math.random() * consonants.length)].toUpperCase()
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
        } else if (randomnum >=21 && randomnum <= 400){
        //name is 6 char long
        planetName[pl] = consonants[Math.floor(Math.random() * consonants.length)].toUpperCase()
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
        + consonants[Math.floor(Math.random() * consonants.length)]
    
        } else if (randomnum >= 41 && randomnum <= 600) {
        //name is 3 char long
        planetName[pl] = vowels[Math.floor(Math.random() * vowels.length)].toUpperCase()
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
        } else if (randomnum >= 61 && randomnum <=700){
        //name is 4 char long plus a number from 1 to 100
        planetName[pl] = vowels[Math.floor(Math.random() * vowels.length)].toUpperCase()
        + vowels[Math.floor(Math.random() * vowels.length)]
        + consonants[Math.floor(Math.random() * consonants.length)]
        + Math.floor(Math.random() * 100)
        } else if (randomnum >= 71 && randomnum <= 950 ){
        planetName[pl] = vowels[Math.floor(Math.random() * vowels.length)].toUpperCase()
        + 'backho'
        + consonants[Math.floor(Math.random() * consonants.length)]
        + 'aa'
        } else {
        planetName[pl] = vowels[Math.floor(Math.random() * vowels.length)].toUpperCase()
        + 'buffa'
        + consonants[Math.floor(Math.random() * consonants.length)]
        + vowels[Math.floor(Math.random() * vowels.length)]
        }
     planets[pl] = {
         name : planetName[pl],
         //146900000 is one astrononmical unit
         planetCOORD : Math.floor((Math.random() * 146900000 * (Math.random() * 10))),
     }   
    }
    
    
}

//----trip check distance and that they are the correct planets available in the current universe
let travelDistance = 0;
let fuelRequired = 0;
let fromCOORD = 0;
let toCOORD = 0;
function checkTravel(){
    //console.log(myself._currentUniverse.planetsInRange.find(document.getElementById("ssFrom").value))
    
    let checkFrom = document.getElementById("ssFromInput").value
    let checkTo = document.getElementById("ssToInput").value
    checkFrom = checkFrom.toLowerCase()
    checkTo = checkTo.toLowerCase()
    //console.log('before loop check FROM field which value is : ' + checkFrom)
    //console.log('before loop check TO field which value is : ' + checkTo)
   
    
    //check FROM
    let td = 0;
    while (td < myself._currentUniverse.planetsInRange.length){
        //console.log('//FROM LOOP//planet from planets in range ' + myself._currentUniverse.planetsInRange[td].name.toLowerCase())
        //console.log('//FROM LOOP//loop num: ' + td)
        //console.log('//FROM LOOP//in loop checkfrom: ' + checkFrom)
        if (checkFrom === myself._currentUniverse.planetsInRange[td].name.toLowerCase()){
            fromCOORD = myself._currentUniverse.planetsInRange[td].planetCOORD
            document.getElementById("fromCOORD").innerHTML = fromCOORD
            console.log('//FROM LOOP////-correct-// FROM: planet entered-/-/-/-/-/-/-/-/-/-');
            document.getElementById("ssFromMessage").style.color = "black"
            document.getElementById("ssFromMessage").innerHTML = "&nbsp;"
            
            
            td = myself._currentUniverse.planetsInRange.length
        } else if (checkFrom != myself._currentUniverse.planetsInRange[td].name.toLowerCase()){
            td++
            document.getElementById("ssFromMessage").style.color = "red"
            document.getElementById("ssFromMessage").innerHTML = "Incorrect FROM planet entered"
            spaceShip.toFromChecked = false;
        }
    }
    //check TO
    td = 0;
    while (td < myself._currentUniverse.planetsInRange.length){
        //console.log(myself._currentUniverse.planetsInRange[td].name)
        //console.log(td)
        //console.log('//TO LOOP// check TO input which is: ' + checkTo)
        //console.log('//TO LOOP// planet from list :' + myself._currentUniverse.planetsInRange[td].name.toLowerCase())
        if (checkTo === myself._currentUniverse.planetsInRange[td].name.toLowerCase()){
            toCOORD = myself._currentUniverse.planetsInRange[td].planetCOORD
            document.getElementById("toCOORD").innerHTML = toCOORD
            console.log('//TO LOOP// //-correct-// TO: planet entered-/-/-/-/-/-/-/-/-/-');
            document.getElementById("ssToMessage").style.color = "black"
            document.getElementById("ssToMessage").innerHTML = "&nbsp;"
            
            td = myself._currentUniverse.planetsInRange.length
        } else if (checkTo != myself._currentUniverse.planetsInRange[td].name.toLowerCase()){
            td++
            document.getElementById("ssToMessage").style.color = "red"
            document.getElementById("ssToMessage").innerHTML = "Incorrect TO entered"
            spaceShip.toFromChecked = false;
        }
    }
    if (fromCOORD > 0 && toCOORD > 0){
        if (fromCOORD > toCOORD){
            travelDistance = fromCOORD - toCOORD;
        } else if (fromCOORD <  toCOORD){
            travelDistance = toCOORD - fromCOORD
        }

        console.log('FROM planet coord ' + fromCOORD)
        console.log('TO planet coord ' + toCOORD)
        spaceShip.toFromChecked = true;
        //divide the distance by 299792 and then by 60 seconds to get light minutes travel
        travelDistance = (travelDistance / 299792) / 60
        
        fuelRequired = Math.floor(travelDistance * spaceShip.configuredFuelFlow) //change fuel flow later
        document.getElementById("ssFuelRequired").innerHTML = fuelRequired
        document.getElementById("ssTravelDist").innerHTML = `${travelDistance.toFixed(2)} light minutes`

        console.log(travelDistance)
        console.log(fuelRequired)
    }
}


//intervalID = setInterval(computerRunning, 200)
//trying a computer running spinning characters
let cr = 0;
function computerRunning(){
    
    if (cr === 0){
        document.getElementById("ssComputerRunning").innerHTML = "+"
        cr++
    } else if (cr === 1){
        document.getElementById("ssComputerRunning").innerHTML = "_+"
        cr++
    } else if (cr === 2){
        document.getElementById("ssComputerRunning").innerHTML = "__+"
        cr++
    } else if (cr === 3){
        document.getElementById("ssComputerRunning").innerHTML = "___+"
        cr++
    } else if (cr === 4){
        document.getElementById("ssComputerRunning").innerHTML = "____+"
        cr++
    } else if (cr === 5){
        document.getElementById("ssComputerRunning").innerHTML = "_____+"
        cr++
    } else if (cr === 6){
        document.getElementById("ssComputerRunning").innerHTML = "______+"
        cr++
    } else if (cr === 7){
        document.getElementById("ssComputerRunning").innerHTML = "_______+"
        cr = 0;
    } 
}

let str = 0;
function flyAnimation(){
    
    if (str === 0){
        document.getElementById("spacetravel1").innerHTML = "*";
        document.getElementById("spacetravel2").innerHTML = "\\\\";
        document.getElementById("spacetravel3").innerHTML = "*";
        document.getElementById("spacetravel4").innerHTML = "--";
        document.getElementById("spacetravel5").innerHTML = "*";
        document.getElementById("spacetravel6").innerHTML = "--";
        document.getElementById("spacetravel7").innerHTML = "*";
        document.getElementById("spacetravel8").innerHTML = "--";
        document.getElementById("spacetravel9").innerHTML = "*";
        document.getElementById("spacetravel10").innerHTML = "--";

        document.getElementById("spacetravel11").innerHTML = "--";
        document.getElementById("spacetravel12").innerHTML = "\\\\\\__";
        document.getElementById("spacetravel13").innerHTML = "\\\\\\__";
        document.getElementById("spacetravel14").innerHTML = "___";
        document.getElementById("spacetravel15").innerHTML = "___";
        document.getElementById("spacetravel16").innerHTML = "*";
        document.getElementById("spacetravel17").innerHTML = "--";
        document.getElementById("spacetravel18").innerHTML = "*";
        document.getElementById("spacetravel19").innerHTML = "--";
        document.getElementById("spacetravel10").innerHTML = "*";

        document.getElementById("spacetravel21").innerHTML = "*";
        document.getElementById("spacetravel22").innerHTML = "\\\\\\";
        document.getElementById("spacetravel23").innerHTML = "o";
        document.getElementById("spacetravel24").innerHTML = "o";
        document.getElementById("spacetravel25").innerHTML = "o";
        document.getElementById("spacetravel26").innerHTML = "\\\\";
        document.getElementById("spacetravel27").innerHTML = "*";
        document.getElementById("spacetravel28").innerHTML = "--";
        document.getElementById("spacetravel29").innerHTML = "*";
        document.getElementById("spacetravel30").innerHTML = "--";

        document.getElementById("spacetravel31").innerHTML = "--";
        document.getElementById("spacetravel32").innerHTML = "{__";
        document.getElementById("spacetravel33").innerHTML = "___";
        document.getElementById("spacetravel34").innerHTML = "___";
        document.getElementById("spacetravel35").innerHTML = "___";
        document.getElementById("spacetravel36").innerHTML = "//";
        document.getElementById("spacetravel37").innerHTML = "--";
        document.getElementById("spacetravel38").innerHTML = "*";
        document.getElementById("spacetravel39").innerHTML = "--";
        document.getElementById("spacetravel40").innerHTML = "*";

        document.getElementById("spacetravel41").innerHTML = "*";
        document.getElementById("spacetravel42").innerHTML = "--";
        document.getElementById("spacetravel43").innerHTML = "*";
        document.getElementById("spacetravel44").innerHTML = "--";
        document.getElementById("spacetravel45").innerHTML = "*";
        document.getElementById("spacetravel46").innerHTML = "--";
        document.getElementById("spacetravel47").innerHTML = "*";
        document.getElementById("spacetravel48").innerHTML = "--";
        document.getElementById("spacetravel49").innerHTML = "*";
        document.getElementById("spacetravel50").innerHTML = "--";

        str++
    } else if (str === 1){
        document.getElementById("spacetravel1").innerHTML = "--";
        document.getElementById("spacetravel2").innerHTML = "\\\\";
        document.getElementById("spacetravel3").innerHTML = "--";
        document.getElementById("spacetravel4").innerHTML = "*";
        document.getElementById("spacetravel5").innerHTML = "--";
        document.getElementById("spacetravel6").innerHTML = "*";
        document.getElementById("spacetravel7").innerHTML = "--";
        document.getElementById("spacetravel8").innerHTML = "*";
        document.getElementById("spacetravel9").innerHTML = "--";
        document.getElementById("spacetravel10").innerHTML = "*";

        document.getElementById("spacetravel11").innerHTML = "--";
        document.getElementById("spacetravel12").innerHTML = "\\\\\\__";
        document.getElementById("spacetravel13").innerHTML = "\\\\\\__";
        document.getElementById("spacetravel14").innerHTML = "___";
        document.getElementById("spacetravel15").innerHTML = "___";
        document.getElementById("spacetravel16").innerHTML = "--";
        document.getElementById("spacetravel17").innerHTML = "*";
        document.getElementById("spacetravel18").innerHTML = "--";
        document.getElementById("spacetravel19").innerHTML = "*";
        document.getElementById("spacetravel10").innerHTML = "--";

        document.getElementById("spacetravel21").innerHTML = "--";
        document.getElementById("spacetravel22").innerHTML = "\\\\\\";
        document.getElementById("spacetravel23").innerHTML = "o";
        document.getElementById("spacetravel24").innerHTML = "o";
        document.getElementById("spacetravel25").innerHTML = "o";
        document.getElementById("spacetravel26").innerHTML = "\\\\";
        document.getElementById("spacetravel27").innerHTML = "--";
        document.getElementById("spacetravel28").innerHTML = "*";
        document.getElementById("spacetravel29").innerHTML = "--";
        document.getElementById("spacetravel30").innerHTML = "*";

        document.getElementById("spacetravel31").innerHTML = "--";
        document.getElementById("spacetravel32").innerHTML = "{__";
        document.getElementById("spacetravel33").innerHTML = "___";
        document.getElementById("spacetravel34").innerHTML = "___";
        document.getElementById("spacetravel35").innerHTML = "___";
        document.getElementById("spacetravel36").innerHTML = "//";
        document.getElementById("spacetravel37").innerHTML = "--";
        document.getElementById("spacetravel38").innerHTML = "--";
        document.getElementById("spacetravel39").innerHTML = "*";
        document.getElementById("spacetravel40").innerHTML = "--";

        document.getElementById("spacetravel41").innerHTML = "--";
        document.getElementById("spacetravel42").innerHTML = "--";
        document.getElementById("spacetravel43").innerHTML = "--";
        document.getElementById("spacetravel44").innerHTML = "--";
        document.getElementById("spacetravel45").innerHTML = "--";
        document.getElementById("spacetravel46").innerHTML = "--";
        document.getElementById("spacetravel47").innerHTML = "--";
        document.getElementById("spacetravel48").innerHTML = "--";
        document.getElementById("spacetravel49").innerHTML = "--";
        document.getElementById("spacetravel50").innerHTML = "--";

        str = 0;
    }
}


let ssFlying;
let ssAnimation;
function takeOff(){
    if (fuelRequired > spaceShip.fuelAmount){
        document.getElementById("ssFromMessage").style.color = "red"
        
        document.getElementById("ssFromMessage").innerHTML = 'Not enough fuel for takeoff'
        
    } else if (fuelRequired < spaceShip.fuelAmount){
            if (spaceShip.isRunning === true){
                if (spaceShip.toFromChecked === true){
                ssAnimation =  setInterval(flyAnimation, 200);
                ssFlying = setInterval(spaceTravel, 100);
                document.getElementById("ssStatusMessage").style.color = "black"
                document.getElementById("ssStatusMessage").innerHTML = "&nbsp;"
              
                console.log('fuel required' + fuelRequired + ' fuel per stage ')
                } else if (spaceShip.toFromChecked === false) {
                document.getElementById("ssStatusMessage").style.color = "red"
                
                document.getElementById("ssStatusMessage").innerHTML = 'Check FROM or TO'
                
                }
            } else if (spaceShip.isRunning === false) {
                document.getElementById("ssStatusMessage").style.color = "red"
                
                document.getElementById("ssStatusMessage").innerHTML = 'Space Ship Not Running!'
                
            }
    }
}

function spaceTravel(){
    if (fuelRequired > 0.1){
        spaceShip.fuelAmount -= (fuelRequired / 20);
        fuelRequired -= fuelRequired / 20;
        travelDistance -= (travelDistance / 20)
        document.getElementById("ssFuelRequired").innerHTML = fuelRequired.toFixed(2)
        document.getElementById("ssTravelDist").innerHTML = `${travelDistance.toFixed(4)} light minutes`

        console.log(spaceShip.fuelAmount+ ' ' + fuelRequired)
    } else if (fuelRequired < 0.1){
        clearInterval(ssAnimation)
        clearInterval(ssFlying)
        changeTodesttoFromdest()
        document.getElementById("ssStatusMessage").style.color = "green"
        
        document.getElementById("ssStatusMessage").innerHTML = 'Destination Reached!';
        document.getElementById("ssFromMessage").innerHTML = '';
        document.getElementById("ssToMessage").innerHTML = '';
    }
    

}



//----STARTUP STUFF----
//the active story determines the answers to the users commands and where rick is etc.
//make universe generator last after other elements are creates
monsterGenerator();
planetGenerator();
universeGenerator()
createMyself()
createSpaceShip()
myself.currentUniverse = universes[Math.floor(Math.random()* 1001)]

//if you start in a universe with no habitable planets in range, randomize the universe again
if (myself._currentUniverse.habPlanetsInRange === 0){
    myself.currentUniverse = universes[Math.floor(Math.random()* 1001)]
}

//put myself on my first planet
myself.currentPlanet = myself._currentUniverse.planetsInRange[Math.floor(Math.random() * myself._currentUniverse.planetsInRange.length)]
myself.actStoryLine = storyLine[0]

document.getElementById("storyTitle").innerHTML = storyLine[0];
document.getElementById("storyArea1").innerHTML = story[0];
document.getElementById("storyArea2").innerHTML = '';

//initialize stats and vairables
myself.health = (Math.floor(Math.random() * 30)) + 40
document.getElementById("hunger").innerHTML = myself._hunger;
spaceShip.isRunning = false;
spaceShip.fuelAmount = 40000;
spaceShip.generatorOut = 0;
spaceShip.fuelFlow = 0;

//document.getElementById("ssFromInput").readOnly = true;



//hide spaceshpi table for now
//document.getElementById("spaceShipDiv").style.visibility =  "hidden";
//document.getElementById("spaceShipDiv2").style.visibility =  "hidden";


//show objects and values
console.log(monsters)
console.log(universes)
console.log(myself)
console.log(spaceShip)
console.log(myself._currentUniverse.planetsInRange)

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
    document.getElementById("storyArea2").style.color = "black"
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
    
    } else if (entCom === 'start computer'){
        spaceShip.computerRunning = true;
    } else if (entCom === 'stop computer'){
        spaceShip.computerRunning = false;

    } else if (entCom === 'start ship' || entCom === 'start spaceship'){
        startSpaceShip()
    } else if (entCom === 'stop ship' || entCom === 'stop spaceship'){
        stopSpaceShip()
    } else if (entCom === 'where am i?' || entCom === 'where am i'){

    } else if (entCom === 'fly'){
        takeOff();
    } else if (entCom === 'planets'){
        //prints out the names of the planets in the centre page
        let textnode;
        let node;
        for (let p = 0; p < myself._currentUniverse.planetsInRange.length; p++){
            console.log(myself._currentUniverse.planetsInRange[p].name)
            node = document.createElement("P");
            node.style.fontSize = "15px"
            textnode = document.createTextNode(myself._currentUniverse.planetsInRange[p].name);
            node.appendChild(textnode);
            document.getElementById("storyArea2").appendChild(node);
        }
    
    } else if (entCom === 'help' || entCom === '?'){
        document.getElementById("storyArea2").innerHTML = 'Commands are: fly, space ship, look, talk, who am i, planets, start/stop space ship, start/stop computer'
    } else if (entCom === 'add fuel'){
        spaceShip.fuelAmount += 50000
    } else if (entCom === 'space ship?' || entCom === 'spaceship?' || entCom === 'space ship'){
        document.getElementById("spaceShipDiv").style.visibility =  "visible";
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



function searchPlanetIndexes(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

function changeTodesttoFromdest(){
    let CCFrom = document.getElementById("ssFromInput").value;
    let CCTo = document.getElementById("ssToInput").value;
    CCTo = CCTo.charAt(0).toUpperCase() + CCTo.slice(1)
    let newCurrPlanetVal = searchPlanetIndexes(CCTo, myself._currentUniverse.planetsInRange)
    console.log(CCTo.charAt(0).toUpperCase() + CCTo.slice(1))
    myself._currentPlanet.name = newCurrPlanetVal.name
    myself._currentPlanet.planetCOORD = newCurrPlanetVal.planetCOORD
    document.getElementById("ssFromInput").value = myself._currentPlanet.name
    document.getElementById("ssToInput").value = ""
    console.log(CCFrom)
    console.log(CCTo)
    console.log(searchPlanetIndexes(CCFrom, myself._currentUniverse.planetsInRange))
    console.log(searchPlanetIndexes(CCTo, myself._currentUniverse.planetsInRange))
    checkTravel()
}