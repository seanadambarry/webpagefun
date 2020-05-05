"use strict";

//cat and its prroperties
let cat = {
    name: "",
    age: 0,
    assholeness: 0,
    cuteness: 0,
    playfulness: 0,
    sleepiness: 0,
    dominance: 0
}

let catQuestAttrib = ['jerky', 'cute', 'playful', 'sleepy', 'dominant'];
let catKeys = Object.keys(cat);
catKeys = catKeys.slice(2);

//human and its properties
let human = {
    name: "",
    patience : 0,
    annoyance : 0,
    tiredness : 0,
    busyness : 0,
    selfishness : 0
}

let humQuestAttrib = ['patient', 'annoyed', 'tired', 'busy','selfish'];
let humanKeys = Object.keys(human);
humanKeys = humanKeys.slice(1)

//cat and human properties that have changes and their values
let asschg = 0;
let cutchg = 0;
let playchg = 0;
let sleepchg = 0;
let whatpage = 0;
let patchg = 0;
let annchg = 0;
let busychg = 0;

//for the battle function


//variables for number of battles and who won and max battles is out of 5

let catWin = 0;
let humanWin = 0;
let numBattles = 0;

//individual battle numbers that are caluclated each time
let catbattlenumber = 0;
let humanbattlenumber = 0;

let randomnumcat = 0;
let randomnumhuman = 0;

function buttonclick() {
    if (whatpage == 0) {
        alert("You will enter your cat's name and characteristics! For each attribute you will enter from 0 tp 10 Assholeness, Cuteness, Playfulness, Sleepiness");
        
        cat.name = prompt("What is your cat's name?")
        cat.age = prompt("What is your cat's age?");

        for (let b = 0; b < catKeys.length; b++){
            cat[catKeys[b]] = getPropVal(cat[catKeys[b]],catQuestAttrib[b],'is your cat');
            console.log(cat[catKeys[b]],catQuestAttrib[b])
        }
        console.log(cat)

        document.getElementById("catname").innerHTML = cat.name;
        document.getElementById("catage").innerHTML = cat.age + " years old";
        document.getElementById("asshole").innerHTML = cat.assholeness;
        document.getElementById("cute").innerHTML = cat.cuteness;
        document.getElementById("playful").innerHTML = cat.playfulness;
        document.getElementById("sleepy").innerHTML = cat.sleepiness;
        document.getElementById("dom").innerHTML = cat.dominance;
        document.getElementById("mainbutton").innerHTML = "Enter your name and your attributes!";
        document.getElementById("instructions").innerHTML = "Instructions: Now you will enter your name and attributes. Click the button below!"
        whatpage += 1;


} else if (whatpage == 1) {
        //enter human name and attributes
        human.name = prompt("What is your name?");

        //cat keys and human keys hold the key names and they are in an array and are called with the human[humanKeys[b]]

        for (let b = 0; b < humanKeys.length; b++){
            human[humanKeys[b]] = getPropVal(human[humanKeys[b]],humQuestAttrib[b],'are you');
            console.log(human[humanKeys[b]],humQuestAttrib[b])
        }
        console.log(human)
        
        document.getElementById("humname").innerHTML = human.name;
        document.getElementById("patience").innerHTML = human.patience;
        document.getElementById("annoyance").innerHTML = human.annoyance;
        document.getElementById("tired").innerHTML = human.tiredness;
        document.getElementById("busy").innerHTML = human.busyness;
        document.getElementById("selfish").innerHTML = human.selfishness;

        document.getElementById("mainbutton").innerHTML = `${cat.name} and ${human.name} its time to BATTLE! CLICK HERE!`;
        document.getElementById("instructions").innerHTML = `Now to see how long you can battle with ${cat.name} when its still an hour before feeding time!`;


        whatpage += 1;

} else if (whatpage == 2) {
        setTimeout (battle1pt1, 1000);
        document.getElementById("catwinstitle").innerHTML = `${cat.name}'s WINS:`;
        document.getElementById("humanwinstitle").innerHTML = `${human.name}'s WINS:`;
        document.getElementById("catwins").innerHTML = catWin;
        document.getElementById("humanwins").innerHTML = humanWin;
        document.getElementById("catresulttitle").innerHTML = "Cat Battle Number! :";
        document.getElementById("humanresulttitle").innerHTML = "Human Battle Number! :";
    
} else if (whatpage == 3) {
    location.reload();
}
}



 function battle1pt1() {
    numBattles += 1;
    document.getElementById("battle1").innerHTML = `BATTLE NUMBER ${numBattles}!`;
    randomnumcat = Math.floor((Math.random() * 5) + 1);
    randomnumhuman = Math.floor((Math.random() * 5) + 1);
    catbattlenumber = randomnumcat * (cat.assholeness + cat.cuteness - cat.playfulness - cat.sleepiness + cat.dominance);
    humanbattlenumber = randomnumhuman * (human.patience - human.annoyance - human.tiredness + human.busyness + human.selfishness);

    document.getElementById("catresult").innerHTML = catbattlenumber;
    document.getElementById("humanresult").innerHTML = humanbattlenumber;

  

    if (catbattlenumber > humanbattlenumber) {
        document.getElementById("b1one").innerHTML = `${cat.name} wins this battle!`;
        catWin +=1;

        document.getElementById("catwins").innerHTML = catWin;
        if (human.patience > 0) {
            human.patience -= 1;
            patchg -= 1;
        }
        
        if (human.annoyance < 10) {
            human.annoyance += 1;
            annchg += 1;
        }
        
        if (human.busyness > 0) {
            human.busyness -= 1;
            busychg -= 1;
        }
        
        document.getElementById("patchg").innerHTML = patchg;
        document.getElementById("annchg").innerHTML = `+${annchg}`;
        document.getElementById("tiredchg").innerHTML = "";
        document.getElementById("busychg").innerHTML = busychg;
        document.getElementById("selfishchg").innerHTML = "";

        document.getElementById("patience").innerHTML = human.patience;
        document.getElementById("annoyance").innerHTML = human.annoyance;
        document.getElementById("tired").innerHTML = human.tiredness;
        document.getElementById("busy").innerHTML = human.busyness;

        threewins();
    }
    else if (catbattlenumber < humanbattlenumber) {
        document.getElementById("b1one").innerHTML = `${human.name} wins this battle!`;
        humanWin +=1;
        
        document.getElementById("humanwins").innerHTML = humanWin;
        
        if (cat.assholeness < 10) {
            cat.assholeness += 1;
            asschg += 1;
        }
       
        if (cat.cuteness > 0) {
            cat.cuteness -= 1;
            cutchg -= 1;
        }
        
        if (cat.playfulness > 0) {
            cat.playfulness -= 1;
            playchg -= 1;
        }

        if (cat.sleepiness > 0) {
            cat.sleepiness -= 1;
            sleepchg -=1;
        }
        
        document.getElementById("asschg").innerHTML = `+${asschg}`;
        document.getElementById("cutechg").innerHTML = cutchg;
        document.getElementById("playchg").innerHTML = playchg;
        document.getElementById("sleepchg").innerHTML = sleepchg;
        document.getElementById("domchg").innerHTML = "";

        document.getElementById("asshole").innerHTML = cat.assholeness;
        document.getElementById("cute").innerHTML = cat.cuteness;
        document.getElementById("playful").innerHTML = cat.playfulness;
        document.getElementById("sleepy").innerHTML = cat.sleepiness;

        threewins();
    }
    else if (catbattlenumber == humanbattlenumber) {
        document.getElementById("b1one").innerHTML = `${human.name} and ${cat.name} it was a TIE ! Do over!`
    }
 }


 function threewins () {
    if (catWin == 3 || humanWin == 3) {
        if (catWin > humanWin){
            gameover("mytable")
            

            document.getElementById("battlesover").innerHTML = `${cat.name} is the over all winner and LORD OVER ALL THE HUMANNSSSS`;
            whatpage += 1;
            document.getElementById("mainbutton").innerHTML = "Do you want to play again? Click here!";
            document.getElementById("instructions").innerHTML = `Great battles ${cat.name} and ${human.name} ! Want to play again? `;
        } else if (catWin < humanWin){
            gameover("mytable")
            
            document.getElementById("battlesover").innerHTML = `${human.name} is the overall winner and LORD OVER ALL THE CATS! And the cats will not get fed right now`;
            whatpage += 1;
            document.getElementById("mainbutton").innerHTML = "Do you want to play again? Click here!";
            document.getElementById("instructions").innerHTML = `Great battles ${cat.name} and ${human.name} ! Want to play again? `;
        }
    }
 }

 function gameover(elementId) {
    let element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}



function getPropVal(propName,stringQuest,catOrHum) {
    let i = 0;
    propName = Number(prompt(`Please enter a number from 0 to 10. How ${stringQuest} ${catOrHum}?`));
    while (i != 1) {
        if ((propName) < 0 || propName > 10 || isNaN(propName)) {
            propName = Number(prompt(`Please enter a number from 0 to 10. How ${stringQuest} ${catOrHum}?`));
            if ((propName) < 0 || propName > 10 || isNaN(propName)) {
                i = 0;
            } 
        }
        else {i = 1;
            return propName;
        }
    }
    i = 0;
}

