    "use strict"

window.onload = function() {
    document.getElementById("userInput").focus();
    
  };
let myself;
let totAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
let vowels = ['a','e','i','o','u'];
let monsters = [];
let universes = [];
let planets = [];
let destsOnPlanets = []
let allCommands;
let runStartStop = 'start'
let lastCommand = '';
let storyLine = [
    'The Beginning',
    'Now that we know who we are and where we are'
]
let story = [
    'You wake up and find yourself in a bed, in a tent, and it smells like peanut butter',
    "You call out, 'Hello? Hellooooooo.' A doctor with a stethescope comes through the tent entrance and says 'Hello Rick.' He looks like Mr. Peanut! Except with a stethescope and scrubs instead of a cane and glasses. He must have just left the room when you woke up! Your name is Rick! You want to know what your last name is and you see it on your chart."
]
let lastStory = '';
let spaceShip = '';
let compIntervalID;
let ssRunningIntervalID;
let ssStartStopSeqIntervalID;
let enemyArrayNum = 0;
let weapons = [
    {   type : 'gun',
        power : 50},
    {   type : 'blaster',
        power : 70},
    {   type : 'deAtomzier',
        power : 100},
    {   type: 'BMFG',
        power : 500
    }
]
let travelDistance = 0;
let fuelRequired = 0;
let fromCOORD = 0;
let toCOORD = 0;
let ss = 0
let st = 0
let ssp = 0;
let cr = 0;
let ssFlying;
let ssAnimateInterval;
let money = []



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
        //space ship ilde running uses fuel too
        spaceShip.fuelAmount--
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
        document.getElementById("myage").innerHTML = newAge;
    },
    _health : 0,
    set health(newHealth){
        //if health is lower than 20, just display 'low' on page
        this._health = newHealth
        if (newHealth <= 20){
            document.getElementById("myhealth").innerHTML = 'Low'
        } else if (newHealth > 20 ){
            document.getElementById("myhealth").innerHTML = newHealth;
        }
    },
    get health (){
        return this._health
    },
    _hunger : 'I could eat something',
    _strength : 50,
    set strength(newStrength){
        this._strength = newStrength
        document.getElementById("mystrength").innerHTML = myself.strength;
    },
    get strength(){
        return this._strength
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
    _currentEnemy : monsters[enemyArrayNum],
    set currentEnemy(newEnemy){
        this._currentEnemy = newEnemy
    },
    get currentEnemy(){
        return this._currentEnemy
    },
    //what the active storyline is
    actStoryLine : '',
    //story progress number, increments by 0.1 but may not be 10 sections
    storyProgNum : 0,
    money : 500,
    skill : 80,
    _weapon : {},
    set weapon(newWeapon){
        this._weapon = newWeapon;
        document.getElementById("myweapon").innerHTML = myself.weapon.type;
        document.getElementById("myweaponpwr").innerHTML = myself.weapon.power;
    },
    get weapon(){
        return this._weapon;
    },
    _x: 0,
    set x(newX){
      this._x = newX;
      this.myLeft = this.x;
      this.myRight = this.x + 55;
    },
    get x(){
      return this._x
    },
    _y : 0,
    set y(newY){
      this._y = newY;
      this.myTop = this.y;
      this.myBottom = this.y + 88;
    },
    get y(){
      return this._y;
    },
    myLeft : 0,
    myRight : 0,
    myTop : 0,
    myBottom : 0,
    speedX: 0.0,
    speedY: 0.0,
    _money : 0,
    set money(newmoney){
      this._money = newmoney;
      document.getElementById("moneytotal").innerHTML = `$ ${this._money}`
      console.log('add money method');
    },
    get money(){
      return this._money;
    },
    addmoney(addmoney){
      this.money = this.money + addmoney;
    }
}
}

//---------------MONSTERS-they are randomized-------------
//monster generator function

function monsterGenerator(){
    const monsterTypes = [
        'Humanoid', 'Alien', 'Gas', 'Pyschological', 'Bacterial', 'Android'
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
    //actual generator----------------------------------------------------------------------------------------------------------------------------------------------------
    for (let m = 0; m < 100; m++){
        monsters[m] = {
            //randomize type and strength
            name: monsterName[Math.floor(Math.random() * monsterName.length)],
            type : monsterTypes[Math.floor(Math.random() * monsterTypes.length)],
            strength : Math.floor(Math.random() * 50) + 50,
            health : Math.floor(Math.random() * 50) + 50,
            alive : true,
            money : Math.floor(Math.random() * 1000),
            weapon : weapons[Math.floor(Math.random() * weapons.length)],
            skill : Math.floor(Math.random() * 30 + 50),
            x_ : 0,
            set x(newX){
                this._x = newX;
                this.itsLeft = this.x;
                this.itsRight = this.x + this.width;
              },
              get x(){
                return this._x;
              },
              _y : 0,
              set y(newY){
                this._y = newY;
                this.itsTop = this.y;
                this.itsBottom = this.y + this.height;
              },
              get y(){
                return this._y;
              },
              height : 30,
              width : 30,
              itsLeft : 0,
              itsRight : 0,
              itsTop :0,
              itsBottom : 0
        }
    
    }
}
//---------------MONSTERS--------------

//Money----------
for (let i = 0; i < 10; i++){
    money[i] = {
      _x : 0,
      set x(newX){
        this._x = newX;
        this.itsLeft = this.x;
        this.itsRight = this.x + this.width;
      },
      get x(){
        return this._x;
      },
      _y : 0,
      set y(newY){
        this._y = newY;
        this.itsTop = this.y;
        this.itsBottom = this.y + this.height;
      },
      get y(){
        return this._y;
      },
      value : 100,
      height : 10,
      width : 10,
      itsLeft : 0,
      itsRight : 0,
      itsTop :0,
      itsBottom : 0
    }
  }

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

function checkTravel(){
   
    let checkFrom = document.getElementById("ssFromInput").value
    let checkTo = document.getElementById("ssToInput").value
    checkFrom = checkFrom.toLowerCase()
    checkTo = checkTo.toLowerCase()
   
   
    
    //check FROM
    let td = 0;
    while (td < myself._currentUniverse.planetsInRange.length){
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

function takeOff(){
    if (fuelRequired > spaceShip.fuelAmount){
        document.getElementById("ssFromMessage").style.color = "red"
        document.getElementById("ssFromMessage").innerHTML = 'Not enough fuel for takeoff'
        
    } else if (fuelRequired < spaceShip.fuelAmount){
            if (spaceShip.isRunning === true){
                if (spaceShip.toFromChecked === true){
                ssAnimateInterval = setInterval(animateStars, 10)
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
        clearInterval(ssAnimateInterval)
        clearInterval(ssFlying)
        changeTodesttoFromdest()
        document.getElementById("ssStatusMessage").style.color = "green"
        document.getElementById("ssStatusMessage").innerHTML = 'Destination Reached!';
        document.getElementById("ssFromMessage").innerHTML = '';
        document.getElementById("ssToMessage").innerHTML = '';
    }
    

}

function fightEnemy(){
    let playerBattleNum = 0;
    let enemyBattleNum = 0;
    playerBattleNum = (myself.strength * myself.weapon.power * myself.skill) / 1000
    enemyBattleNum = (myself.currentEnemy.strength * myself.currentEnemy.weapon.power * myself.currentEnemy.skill) / 1000
    document.getElementById("battleNumber").innerHTML = playerBattleNum.toFixed(0)
    document.getElementById("ebattleNumber").innerHTML = enemyBattleNum.toFixed(0)
    console.log('player battle number : ' + playerBattleNum)
    console.log('enemy battle number : ' + enemyBattleNum)
}

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


//checking various things with the user inout field
// Get the input field
let inputField = document.getElementById("userInput");
// Execute a function when the user releases a key on the keyboard
inputField.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    //event.preventDefault();
    // Trigger the button element with a click
    userCommand()
    //after pressing enter, clear the text box --maybe add fucntonality to log the previous commands below with a loop etc
    document.getElementById("userInput").value = "";
    
  } else if (event.keyCode === 38) {
    document.getElementById("userInput").value = lastCommand
  } else if (event.keyCode === 27) {
    document.getElementById("userInput").value = ""
  }
});


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
        document.getElementById("myname").innerHTML = myself._name;
        document.getElementById("myage").innerHTML = myself._age;
        document.getElementById("myhealth").innerHTML = myself._health;
        document.getElementById("myhunger").innerHTML = myself._hunger;
        document.getElementById("my strength").innerHTML = myself._strength;
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

        document.getElementById("myname").innerHTML = myself._name;
        document.getElementById("myage").innerHTML = myself._age;
        document.getElementById("myhealth").innerHTML = myself._health;
        document.getElementById("myhunger").innerHTML = myself._hunger;
        document.getElementById("mystrength").innerHTML = myself._strength;
        document.getElementById("myweapon").innerHTML = myself.weapon.type;
        document.getElementById("myweaponpwr").innerHTML = myself.weapon.power;

        document.getElementById("ename").innerHTML = myself.currentEnemy.name;
        document.getElementById("etype").innerHTML = myself.currentEnemy.type;
        document.getElementById("ehealth").innerHTML = myself.currentEnemy.health;
        document.getElementById("estrength").innerHTML = myself.currentEnemy.strength;
        document.getElementById("eweaponANDpower").innerHTML = myself.currentEnemy.weapon.power;
        console.log(myself.currentEnemy)

        fightEnemy()

    } else if (entCom === 'playgame'){
        playGame()
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
        myself.currentEnemy = monsters[Math.floor(Math.random() * monsters.length)]
        document.getElementById("ename").innerHTML = myself.currentEnemy.name;
        document.getElementById("etype").innerHTML = myself.currentEnemy.type;
        document.getElementById("ehealth").innerHTML = myself.currentEnemy.health;
        document.getElementById("estrength").innerHTML = myself.currentEnemy.strength;
        document.getElementById("eweaponANDpower").innerHTML = myself.currentEnemy.weapon.power;
        console.log(myself.currentEnemy)
    } else if (entCom === 'stats'){
        document.getElementById("ename").innerHTML = myself.currentEnemy.name;
        document.getElementById("etype").innerHTML = myself.currentEnemy.type;
        document.getElementById("ehealth").innerHTML = myself.currentEnemy.health;
        document.getElementById("estrength").innerHTML = myself.currentEnemy.strength;
        document.getElementById("eweaponANDpower").innerHTML = myself.currentEnemy.weapon.power;
        console.log(myself.currentEnemy)

        document.getElementById("myname").innerHTML = myself._name;
        document.getElementById("myage").innerHTML = myself._age;
        document.getElementById("myhealth").innerHTML = myself._health;
        document.getElementById("myhunger").innerHTML = myself._hunger;
        document.getElementById("mystrength").innerHTML = myself._strength;
        document.getElementById("myweapon").innerHTML = myself.weapon.type;
        document.getElementById("myweaponpwr").innerHTML = myself.weapon.power;
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



//----STARTUP STUFF-------------------------------------------------------------------
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
myself.health = (Math.floor(Math.random() * 30)) + 70;
myself.weapon = weapons[2]
myself.money = 0;
myself.strength = 70
document.getElementById("myhunger").innerHTML = myself._hunger;
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
console.log(money)
console.log(weapons)

///animated spaceship

var canvas = document.getElementById("spaceship");
var ctx = canvas.getContext("2d");
var img1 = document.getElementById("image1");
var img2 = document.getElementById("image2");
var img3 = document.getElementById("image3");



let randomy1 = Math.floor(Math.random() * 75) + 100
let xvalue1 = 300;


function starOne(){
    console.log('star 1')
    ctx.beginPath()
    ctx.moveTo(xvalue1,randomy1)
    ctx.strokeStyle = "white"
    ctx.lineTo(xvalue1 + 100, randomy1)
    ctx.stroke()

    xvalue1 = xvalue1 - 20

    if (xvalue1 < -150){
        
        randomy1 = Math.floor(Math.random() * 300)
        
        xvalue1 = 700;
    }
}

let randomy2 = Math.floor(Math.random() * 75) + 100
let xvalue2 = 500;
function starTwo(){
    console.log('star 2')
    ctx.beginPath()
    ctx.moveTo(xvalue2,randomy2)
    ctx.strokeStyle = "white"
    ctx.lineTo(xvalue2 + 50, randomy2)
    ctx.stroke()

    xvalue2 = xvalue2 - 9

    if (xvalue2 === -100){
        
        randomy2 = Math.floor(Math.random() * 300)
       
        xvalue2 = 700;
    }
}

let randomy3 = Math.floor(Math.random() * 33) + 100
let xvalue3 = 100;
function starThree(){
    console.log('star 3')
    ctx.beginPath()
    ctx.moveTo(xvalue3,randomy3)
    ctx.strokeStyle = "white"
    ctx.lineTo(xvalue3 + 30, randomy3)
    ctx.stroke()

    xvalue3 = xvalue3 - 15

    if (xvalue3 < -100){
        
        randomy3 = Math.floor(Math.random() * 300)
      
        xvalue3 = 700;
    }
}


let randomy4 = Math.floor(Math.random() * 44) + 100
let xvalue4 = 222;
function starFour(){
    console.log('star 4')
    ctx.beginPath()
    ctx.moveTo(xvalue4,randomy4)
    ctx.strokeStyle = "white"
    ctx.lineTo(xvalue4 + 2, randomy4)
    ctx.lineTo(xvalue4 + 2, randomy4 - 2)
    ctx.lineTo(xvalue4, randomy4 - 2)
    ctx.lineTo(xvalue4, randomy4)
    
    ctx.stroke()

    xvalue4 = xvalue4 - 2

    if (xvalue4 < -50){
        
        randomy4 = Math.floor(Math.random() * 222)
        
        xvalue4 = 700;
     
    }
}
let ssInt = 1;
function spaceShipDraw(){
    if (ssInt === 1){
        ctx.drawImage(img1, 100, 0); 
        ssInt++
        console.log('image 1')
    } else if (ssInt === 2){
        ctx.drawImage(img2, 100, 0);  
        ssInt++
        console.log('image 2')
    } else if (ssInt === 3){
        ctx.drawImage(img3, 100, 0);
        ssInt = 1;  
        console.log('image 3')
    }
}

function animateStars(){
    ctx.fillStyle = "#1c1c1c";
    ctx.fillRect(0,0,700,300)
    console.log('rect fill')

    starOne()
    starTwo()
    starThree()
    starFour()
    spaceShipDraw()

}



// player navigation area
let playcanvas = document.getElementById("playcanvas")
let context = playcanvas.getContext("2d");
let img = document.getElementById("char");

let animFrame

myself._currentEnemy.x = Math.floor(Math.random() * 650);
myself._currentEnemy.y = Math.floor(Math.random() * 650);

for (let i = 0; i < 10; i++){
    money[i].x = Math.floor(Math.random() * (playcanvas.width - 40))
    money[i].y = Math.floor(Math.random() * (playcanvas.height - 40))
  }

function updateGameArea() {
    context.fillStyle = "slategrey"
    context.fillRect(0, 0, playcanvas.width, playcanvas.height)

    //put money on screen
    for (let i = 0; i < money.length; i++){
      context.fillStyle = "yellow"
      context.fillRect(money[i].x, money[i].y, money[i].width, money[i].height)

      if (myself.myLeft < money[i].itsRight && myself.myRight > money[i].itsLeft && myself.myTop < money[i].itsBottom && myself.myBottom > money[i].itsTop){
        myself.addmoney(money[i].value);
        money.splice(i,1)
        console.log(money)
      }
     

    }

    if (myself.money === 1000){
        console.log(myself.money)
        money.splice(0,1)
        context.fillStyle = "grey"
        context.fillRect(0, 0, playcanvas.width, playcanvas.height)
        window.cancelAnimationFrame(animFrame)
        window.onkeydown = null;
        return;
    }

    context.fillStyle = "red"
    context.fillRect(myself._currentEnemy.x, myself._currentEnemy.y, myself._currentEnemy.width, myself._currentEnemy.height)
    
    context.drawImage(img, myself.x, myself.y, 50, 88)

    if (myself.myLeft < myself._currentEnemy.itsRight && myself.myRight > myself._currentEnemy.itsLeft && myself.myTop < myself._currentEnemy.itsBottom && myself.myBottom > myself._currentEnemy.itsTop){
        alert('enemy!')
        myself.x = myself._currentEnemy.x + 50
    }
    

    //console.log('PLAYER X and Y : ' + myself.x + ' ' + myself.y + 'myself :  ' + myself.myLeft + ' ' + myself.myRight + ' ' + myself.myTop + ' ' + myself.myBottom)
    //console.log('ENEMY : ' + myself._currentEnemy.itsLeft + ' ' +  myself._currentEnemy.itsRight + ' ' +  myself._currentEnemy.itsTop + ' ' +  myself._currentEnemy.itsBottom)

    animFrame = window.requestAnimationFrame(updateGameArea);  
}

function playGame(){
window.onkeydown = function(event) {
  event.preventDefault() // stops the button scrolling the page
  if(event.keyCode == 40) { // down
    myself.y += 10
  } else if(event.keyCode == 38) { // up
    myself.y -= 10   
  } else if(event.keyCode == 39) { // right 
    myself.x += 10  
  } else if(event.keyCode == 37) { // left
    myself.x -= 10        
  } 
}

animFrame = window.requestAnimationFrame(updateGameArea); 
}