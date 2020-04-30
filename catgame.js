"use strict";
let whatpage = 0;
let i = 0;
let catName;
let catAge;
let assholeness;
let cuteness;
let playfulness;
let sleepiness;
let humName;
let patience;
let annoyance;
let tiredness;
let busyness;

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

        assholeness = Number(prompt(`How much of an asshole is your cat? Out of 0 to 10`));
        while (i != 1) {
            if ((assholeness) < 0 || assholeness > 10 || isNaN(assholeness)) {
                assholeness = Number(prompt(`Please enter a number from 0 to 10. How much of an asshole is your cat?`));
                if ((assholeness) < 0 || assholeness > 10 || isNaN(assholeness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        cuteness = Number(prompt(`How cute is your cat? Out of 0 to 10`));
        while (i != 1) {
            if ((cuteness) < 0 || cuteness > 10 || isNaN(cuteness)) {
                cuteness = Number(prompt(`Please enter a number from 0 to 10. How cute is your cat?`));
                if ((cuteness) < 0 || cuteness > 10 || isNaN(cuteness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        playfulness = Number(prompt(`How playful is your cat? Out of 0 to 10`));
        while (i != 1) {
            if ((playfulness) < 0 || playfulness > 10 || isNaN(playfulness)) {
                playfulness = Number(prompt(`Please enter a number from 0 to 10. How playful is your cat?`));
                if ((playfulness) < 0 || playfulness > 10 || isNaN(playfulness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        sleepiness = Number(prompt(`How sleepy is your cat? Out of 0 to 10`));
        while (i != 1) {
            if ((sleepiness) < 0 || sleepiness > 10 || isNaN(sleepiness)) {
                sleepiness = Number(prompt(`Please enter a number from 0 to 10. How sleepy is your cat?`));
                if ((sleepiness) < 0 || sleepiness > 10 || isNaN(sleepiness)) {
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
        document.getElementById("mainbutton").innerHTML = "Enter your name and your attributes!";
        document.getElementById("instructions").innerHTML = "Now you will enter your name and attributes. Click the button below!"
        whatpage += 1;


} else if (whatpage == 1) {
        //enter human name and attributes
        humName = prompt("What is your name?");
        patience = Number(prompt("How much patience do you have? From 0 to 10. "));
        while (i != 1) {
            if ((patience) < 0 || patience > 10 || isNaN(patience)) {
                patience = Number(prompt(`Please enter a number from 0 to 10. How much patience do you have?`));
                if ((patience) < 0 || patience > 10 || isNaN(patience)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        annoyance = Number(prompt("What is your current annoyance level? From 0 to 10. "));
        while (i != 1) {
            if ((annoyance) < 0 || annoyance > 10 || isNaN(annoyance)) {
                annoyance = Number(prompt(`Please enter a number from 0 to 10. What is your current annoyance level?`));
                if ((annoyance) < 0 || annoyance > 10 || isNaN(annoyance)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        tiredness = Number(prompt("What is your current tiredness level? From 0 to 10. "));
        while (i != 1) {
            if ((tiredness) < 0 || tiredness > 10 || isNaN(tiredness)) {
                tiredness = Number(prompt(`Please enter a number from 0 to 10. What is your current tiredness level?`));
                if ((tiredness) < 0 || tiredness > 10 || isNaN(tiredness)) {
                    i = 0;
                } 
            }
            else i = 1;
        }
        i = 0;

        busyness = Number(prompt("What is your current busyness level? From 0 to 10. "));
        while (i != 1) {
            if ((busyness) < 0 || busyness > 10 || isNaN(busyness)) {
                busyness = Number(prompt(`Please enter a number from 0 to 10. What is your current busyness level?`));
                if ((busyness) < 0 || busyness > 10 || isNaN(busyness)) {
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
}
}



 function battle1pt1() {
    randomnumcat = Math.floor((Math.random() * 2) + 1);
    randomnumhuman = Math.floor((Math.random() * 2) + 1);
    catbattlenumber = randomnumcat * (assholeness + cuteness - playfulness - sleepiness);
    humanbattlenumber = randomnumhuman * (patience - annoyance - tiredness + busyness);
    document.getElementById("catresult").innerHTML = catbattlenumber;
    document.getElementById("humanresult").innerHTML = humanbattlenumber;
    console.log("total cat " + (assholeness + cuteness - playfulness - sleepiness));
    console.log("total human" + (patience - annoyance - tiredness + busyness));
    console.log("cat random number " + randomnumcat);
    console.log("human random number " + randomnumhuman);
    console.log("cat battle number" + catbattlenumber);
    console.log("human battle number" + humanbattlenumber);
    console.log(numBattles);

    if (catbattlenumber > humanbattlenumber) {
        document.getElementById("b1one").innerHTML = `${catName} wins this battle!`;
        catWin +=1;
        document.getElementById("catwins").innerHTML = catWin;
        patience -= 1;
        annoyance += 1;
        busyness -= 1;
        document.getElementById("patience").innerHTML = patience;
        document.getElementById("annoyance").innerHTML = annoyance;
        document.getElementById("tired").innerHTML = tiredness;
        document.getElementById("busy").innerHTML = busyness;


    }
    else if (catbattlenumber < humanbattlenumber) {
        document.getElementById("b1one").innerHTML = `${humName} wins this battle!`;
        humanWin +=1;
        document.getElementById("humanwins").innerHTML = humanWin;
        assholeness += 1;
        cuteness -= 1;
        playfulness -= 1;
        sleepiness -= 1;
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
            document.getElementById("battlesover").innerHTML = `${catName} is the over all winner and LORD OVER ALL THE HUMANNSSSS`;
            document.getElementById("mainbutton").disabled = true;
        } else if (catWin < humanWin){
            document.getElementById("battlesover").innerHTML = `${humName} is the overall winner and LORD OVER ALL THE CATS! And the cats will not get fed right now`;
            document.getElementById("mainbutton").disabled = true;
        }
    }
 }