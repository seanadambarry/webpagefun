"use strict";
let whatpage = 0;
let i = 0;
let catName;
let catAge;
let assholeness;
let asschg = 0;
let cuteness;
let cutchg = 0;
let playfulness;
let playchg = 0;
let sleepiness;
let sleepchg = 0;
let dominance;
let humName;
let patience;
let patchg = 0;
let annoyance;
let annchg = 0;
let tiredness;
let busyness;
let busychg = 0;
let selfishness;

//variables for number of battles and who won and max battles is out of 5

let catWin = 0;
let humanWin = 0;
let numBattles = 0;

let catbattlenumber = 0;
let humanbattlenumber = 0;

let randomnumcat = 0;
let randomnumhuman = 0;

function buttonclick() {
    if (whatpage == 0) {
        alert("You will enter your cat's name and characteristics! For each attribute you will enter from 0 tp 10 Assholeness, Cuteness, Playfulness, Sleepiness");
        
        catName = prompt("What is your cat's name?")
        catAge = prompt("What is your cat's age?");

        assholeness = Number(prompt(`How much of an jerk right now is your cat? Out of 0 to 10`));
        while (i != 1) {
            if ((assholeness) < 0 || assholeness > 10 || isNaN(assholeness)) {
                assholeness = Number(prompt(`Please enter a number from 0 to 10. How much of an jerk right now is your cat?`));
                if ((assholeness) < 0 || assholeness > 10 || isNaN(assholeness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        cuteness = Number(prompt(`How cute is your cat right now ? Out of 0 to 10`));
        while (i != 1) {
            if ((cuteness) < 0 || cuteness > 10 || isNaN(cuteness)) {
                cuteness = Number(prompt(`Please enter a number from 0 to 10. How cute is your cat right now?`));
                if ((cuteness) < 0 || cuteness > 10 || isNaN(cuteness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        playfulness = Number(prompt(`How playful is your cat right now? Out of 0 to 10`));
        while (i != 1) {
            if ((playfulness) < 0 || playfulness > 10 || isNaN(playfulness)) {
                playfulness = Number(prompt(`Please enter a number from 0 to 10. How playful is your cat right now?`));
                if ((playfulness) < 0 || playfulness > 10 || isNaN(playfulness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        sleepiness = Number(prompt(`How sleepy is your cat right now? Out of 0 to 10`));
        while (i != 1) {
            if ((sleepiness) < 0 || sleepiness > 10 || isNaN(sleepiness)) {
                sleepiness = Number(prompt(`Please enter a number from 0 to 10. How sleepy is your cat right now?`));
                if ((sleepiness) < 0 || sleepiness > 10 || isNaN(sleepiness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        dominance = Number(prompt(`How dominant is your cat in general? Out of 0 to 10`));
        while (i != 1) {
            if ((dominance) < 0 || dominance > 10 || isNaN(dominance)) {
                dominance = Number(prompt(`Please enter a number from 0 to 10. How dominant is your cat in general?`));
                if ((dominance) < 0 || dominance > 10 || isNaN(dominance)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        document.getElementById("catname").innerHTML = catName;
        document.getElementById("catage").innerHTML = catAge + " years old";
        document.getElementById("asshole").innerHTML = assholeness;
        document.getElementById("cute").innerHTML = cuteness;
        document.getElementById("playful").innerHTML = playfulness;
        document.getElementById("sleepy").innerHTML = sleepiness;
        document.getElementById("dom").innerHTML = dominance;
        document.getElementById("mainbutton").innerHTML = "Enter your name and your attributes!";
        document.getElementById("instructions").innerHTML = "Instructions: Now you will enter your name and attributes. Click the button below!"
        whatpage += 1;


} else if (whatpage == 1) {
        //enter human name and attributes
        humName = prompt("What is your name?");
        patience = Number(prompt("How much patience do you have right now? From 0 to 10. "));
        while (i != 1) {
            if ((patience) < 0 || patience > 10 || isNaN(patience)) {
                patience = Number(prompt(`Please enter a number from 0 to 10. How much patience do you have right now?`));
                if ((patience) < 0 || patience > 10 || isNaN(patience)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        annoyance = Number(prompt("How annoyed are you right now? From 0 to 10. "));
        while (i != 1) {
            if ((annoyance) < 0 || annoyance > 10 || isNaN(annoyance)) {
                annoyance = Number(prompt(`Please enter a number from 0 to 10. How annoyed are you right now?`));
                if ((annoyance) < 0 || annoyance > 10 || isNaN(annoyance)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        tiredness = Number(prompt("How tired are you right now? From 0 to 10. "));
        while (i != 1) {
            if ((tiredness) < 0 || tiredness > 10 || isNaN(tiredness)) {
                tiredness = Number(prompt(`Please enter a number from 0 to 10. How tired are you right now?`));
                if ((tiredness) < 0 || tiredness > 10 || isNaN(tiredness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        busyness = Number(prompt("How busy are you right now? From 0 to 10."));
        while (i != 1) {
            if ((busyness) < 0 || busyness > 10 || isNaN(busyness)) {
                busyness = Number(prompt(`Please enter a number from 0 to 10. How busy are you right now?`));
                if ((busyness) < 0 || busyness > 10 || isNaN(busyness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        selfishness = Number(prompt("How selfish are you in general? From 0 to 10."));
        while (i != 1) {
            if ((selfishness) < 0 || selfishness > 10 || isNaN(selfishness)) {
                selfishness = Number(prompt(`Please enter a number from 0 to 10. How selfish are you in general?`));
                if ((selfishness) < 0 || selfishness > 10 || isNaN(selfishness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;


        document.getElementById("humname").innerHTML = humName;
        document.getElementById("patience").innerHTML = patience;
        document.getElementById("annoyance").innerHTML = annoyance;
        document.getElementById("tired").innerHTML = tiredness;
        document.getElementById("busy").innerHTML = busyness;
        document.getElementById("selfish").innerHTML = selfishness;

        document.getElementById("mainbutton").innerHTML = `${catName} and ${humName} its time to BATTLE! CLICK HERE!`;
        document.getElementById("instructions").innerHTML = `Now to see how long you can battle with ${catName} when its still an hour before feeding time!`;


        whatpage += 1;

} else if (whatpage == 2) {
        if (numBattles != 5) {
        setTimeout (battle1pt1, 1000);
        numBattles +=1
        document.getElementById("catwinstitle").innerHTML = `${catName}'s WINS:`;
        document.getElementById("humanwinstitle").innerHTML = `${humName}'s WINS:`;
        document.getElementById("catwins").innerHTML = catWin;
        document.getElementById("humanwins").innerHTML = humanWin;

        document.getElementById("battle1").innerHTML = `BATTLE NUMBER ${numBattles}!`;
        document.getElementById("catresulttitle").innerHTML = "Cat Battle Number! :";
        document.getElementById("humanresulttitle").innerHTML = "Human Battle Number! :";
        }
    
} else if (whatpage == 3) {
    location.reload();
}
}



 function battle1pt1() {
    randomnumcat = Math.floor((Math.random() * 5) + 1);
    randomnumhuman = Math.floor((Math.random() * 5) + 1);
    catbattlenumber = randomnumcat * (assholeness + cuteness - playfulness - sleepiness + dominance);
    humanbattlenumber = randomnumhuman * (patience - annoyance - tiredness + busyness + selfishness);

    document.getElementById("catresult").innerHTML = catbattlenumber;
    document.getElementById("humanresult").innerHTML = humanbattlenumber;

    console.log("total cat " + (assholeness + cuteness - playfulness - sleepiness + dominance));
    console.log("total human" + (patience - annoyance - tiredness + busyness + selfishness));
    console.log("cat random number " + randomnumcat);
    console.log("human random number " + randomnumhuman);
    console.log("cat battle number" + catbattlenumber);
    console.log("human battle number" + humanbattlenumber);

    console.log(numBattles);

    if (catbattlenumber > humanbattlenumber) {
        document.getElementById("b1one").innerHTML = `${catName} wins this battle!`;
        catWin +=1;
        document.getElementById("catwins").innerHTML = catWin;
        if (patience > 0) {
            patience -= 1;
            patchg -= 1;
        }
        
        if (annoyance < 10) {
            annoyance += 1;
            annchg += 1;
        }
        
        if (busyness > 0) {
            busyness -= 1;
            busychg -= 1;
        }
        
        document.getElementById("patchg").innerHTML = patchg;
        document.getElementById("annchg").innerHTML = `+${annchg}`;
        document.getElementById("tiredchg").innerHTML = "";
        document.getElementById("busychg").innerHTML = busychg;
        document.getElementById("selfishchg").innerHTML = "";

        document.getElementById("patience").innerHTML = patience;
        document.getElementById("annoyance").innerHTML = annoyance;
        document.getElementById("tired").innerHTML = tiredness;
        document.getElementById("busy").innerHTML = busyness;


    }
    else if (catbattlenumber < humanbattlenumber) {
        document.getElementById("b1one").innerHTML = `${humName} wins this battle!`;
        humanWin +=1;
        document.getElementById("humanwins").innerHTML = humanWin;
        
        if (assholeness < 10) {
            assholeness += 1;
            asschg += 1;
        }
       
        if (cuteness > 0) {
            cuteness -= 1;
            cutchg -= 1;
        }
        
        if (playfulness > 0) {
            playfulness -= 1;
            playchg -= 1;
        }

        if (sleepiness > 0) {
            sleepiness -= 1;
            sleepchg -=1;
        }
        
        document.getElementById("asschg").innerHTML = `+${asschg}`;
        document.getElementById("cutechg").innerHTML = cutchg;
        document.getElementById("playchg").innerHTML = playchg;
        document.getElementById("sleepchg").innerHTML = sleepchg;
        document.getElementById("domchg").innerHTML = "";

        document.getElementById("asshole").innerHTML = assholeness;
        document.getElementById("cute").innerHTML = cuteness;
        document.getElementById("playful").innerHTML = playfulness;
        document.getElementById("sleepy").innerHTML = sleepiness;

    }
    else if (catbattlenumber == humanbattlenumber) {
        document.getElementById("b1one").innerHTML = `${humName} and ${catName} it was a TIE ! Do over!`
        numBattles -= 1;
    }



    if (numBattles == 5) {
        if (catWin > humanWin){
            gameover("mytable")
            document.getElementById("battle1").innerHTML = "";

            document.getElementById("battlesover").innerHTML = `${catName} is the over all winner and LORD OVER ALL THE HUMANNSSSS`;
            whatpage += 1;
            document.getElementById("mainbutton").innerHTML = "Do you want to play again? Click here!";
            document.getElementById("instructions").innerHTML = `Great battles ${catName} and ${humName} ! Want to play again? `;
        } else if (catWin < humanWin){
            gameover("mytable")
            document.getElementById("battle1").innerHTML = "";
            
            document.getElementById("battlesover").innerHTML = `${humName} is the overall winner and LORD OVER ALL THE CATS! And the cats will not get fed right now`;
            whatpage += 1;
            document.getElementById("mainbutton").innerHTML = "Do you want to play again? Click here!";
            document.getElementById("instructions").innerHTML = `Great battles ${catName} and ${humName} ! Want to play again? `;
        }
    }
 }

 function gameover(elementId) {
     let element = document.getElementById(elementId);
     element.parentNode.removeChild(element);
 }