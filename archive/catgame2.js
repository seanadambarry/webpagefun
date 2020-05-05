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

//human and its properties
let human = {
    name: "",
    patience : 0,
    annoyance : 0,
    tiredness : 0,
    busyness : 0,
    selfishness : 0
}

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

        cat.assholeness = Number(prompt(`How much of an jerk right now is your cat? Out of 0 to 10`));
        let i = 0;
        while (i != 1) {
            if ((cat.assholeness) < 0 || cat.assholeness > 10 || isNaN(cat.assholeness)) {
                cat.assholeness = Number(prompt(`Please enter a number from 0 to 10. How much of an jerk right now is your cat?`));
                if ((cat.assholeness) < 0 || cat.assholeness > 10 || isNaN(cat.assholeness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        cat.cuteness = Number(prompt(`How cute is your cat right now ? Out of 0 to 10`));
        while (i != 1) {
            if ((cat.cuteness) < 0 || cat.cuteness > 10 || isNaN(cat.cuteness)) {
                cat.cuteness = Number(prompt(`Please enter a number from 0 to 10. How cute is your cat right now?`));
                if ((cat.cuteness) < 0 || cat.cuteness > 10 || isNaN(cat.cuteness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        cat.playfulness = Number(prompt(`How playful is your cat right now? Out of 0 to 10`));
        while (i != 1) {
            if ((cat.playfulness) < 0 || cat.playfulness > 10 || isNaN(cat.playfulness)) {
                cat.playfulness = Number(prompt(`Please enter a number from 0 to 10. How playful is your cat right now?`));
                if ((cat.playfulness) < 0 || cat.playfulness > 10 || isNaN(cat.playfulness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        cat.sleepiness = Number(prompt(`How sleepy is your cat right now? Out of 0 to 10`));
        while (i != 1) {
            if ((cat.sleepiness) < 0 || cat.sleepiness > 10 || isNaN(cat.sleepiness)) {
                cat.sleepiness = Number(prompt(`Please enter a number from 0 to 10. How sleepy is your cat right now?`));
                if ((cat.sleepiness) < 0 || cat.sleepiness > 10 || isNaN(cat.sleepiness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        cat.dominance = Number(prompt(`How dominant is your cat in general? Out of 0 to 10`));

        while (i != 1) {
            if ((cat.dominance) < 0 || cat.dominance > 10 || isNaN(cat.dominance)) {
                cat.dominance = Number(prompt(`Please enter a number from 0 to 10. How dominant is your cat in general?`));
                if ((cat.dominance) < 0 || cat.dominance > 10 || isNaN(cat.dominance)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

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
        human.patience = Number(prompt("How much patience do you have right now? From 0 to 10. "));
        let i = 0;
        while (i != 1) {
            if ((human.patience) < 0 || human.patience > 10 || isNaN(human.patience)) {
                human.patience = Number(prompt(`Please enter a number from 0 to 10. How much human.patience do you have right now?`));
                if ((human.patience) < 0 || human.patience > 10 || isNaN(human.patience)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        human.annoyance = Number(prompt("How annoyed are you right now? From 0 to 10. "));
 
        while (i != 1) {
            if ((human.annoyance) < 0 || human.annoyance > 10 || isNaN(human.annoyance)) {
                human.annoyance = Number(prompt(`Please enter a number from 0 to 10. How annoyed are you right now?`));
                if ((human.annoyance) < 0 || human.annoyance > 10 || isNaN(human.annoyance)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        human.tiredness = Number(prompt("How tired are you right now? From 0 to 10. "));

        while (i != 1) {
            if ((human.tiredness) < 0 || human.tiredness > 10 || isNaN(human.tiredness)) {
                human.tiredness = Number(prompt(`Please enter a number from 0 to 10. How tired are you right now?`));
                if ((human.tiredness) < 0 || human.tiredness > 10 || isNaN(human.tiredness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        human.busyness = Number(prompt("How busy are you right now? From 0 to 10."));

        while (i != 1) {
            if ((human.busyness) < 0 || human.busyness > 10 || isNaN(human.busyness)) {
                human.busyness = Number(prompt(`Please enter a number from 0 to 10. How busy are you right now?`));
                if ((human.busyness) < 0 || human.busyness > 10 || isNaN(human.busyness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        human.selfishness = Number(prompt("How selfish are you in general? From 0 to 10."));

        while (i != 1) {
            if ((human.selfishness) < 0 || human.selfishness > 10 || isNaN(human.selfishness)) {
                human.selfishness = Number(prompt(`Please enter a number from 0 to 10. How selfish are you in general?`));
                if ((human.selfishness) < 0 || human.selfishness > 10 || isNaN(human.selfishness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;


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

