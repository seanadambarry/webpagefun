var canvas = document.getElementById("spaceship");
var ctx = canvas.getContext("2d");
var img = document.getElementById("image");


let randomy1 = Math.floor(Math.random() * 75) + 100
let xvalue1 = 300;
function starOne(){
    ctx.beginPath()
    ctx.moveTo(xvalue1,randomy1)
    ctx.strokeStyle = "white"
    ctx.lineTo(xvalue1 + 100, randomy1)
    ctx.stroke()

    xvalue1 = xvalue1 - 20

    if (xvalue1 < -150){
        
        randomy1 = Math.floor(Math.random() * 300)
        console.log('random y1 value' + randomy1)
        xvalue1 = 600;
    }
}

let randomy2 = Math.floor(Math.random() * 75) + 100
let xvalue2 = 500;
function starTwo(){
    ctx.beginPath()
    ctx.moveTo(xvalue2,randomy2)
    ctx.strokeStyle = "white"
    ctx.lineTo(xvalue2 + 50, randomy2)
    ctx.stroke()

    xvalue2 = xvalue2 - 9

    if (xvalue2 === -100){
        
        randomy2 = Math.floor(Math.random() * 300)
        console.log('random y2 value' + randomy2)
        xvalue2 = 600;
    }
}

let randomy3 = Math.floor(Math.random() * 33) + 100
let xvalue3 = 100;
function starThree(){
    ctx.beginPath()
    ctx.moveTo(xvalue3,randomy3)
    ctx.strokeStyle = "white"
    ctx.lineTo(xvalue3 + 30, randomy3)
    ctx.stroke()

    xvalue3 = xvalue3 - 15

    if (xvalue3 < -100){
        
        randomy3 = Math.floor(Math.random() * 300)
        console.log('random y3 value' + randomy3)
        xvalue3 = 600;
    }
}


let randomy4 = Math.floor(Math.random() * 44) + 100
let xvalue4 = 222;
function starFour(){
    ctx.beginPath()
    ctx.moveTo(xvalue4,randomy4)
    ctx.strokeStyle = "white"
    ctx.lineTo(xvalue4 + 2, randomy4)
    ctx.lineTo(xvalue4 + 2, randomy4 - 2)
    ctx.lineTo(xvalue4, randomy4 - 2)
    ctx.lineTo(xvalue4, randomy4)
    
    ctx.stroke()
    console.log(xvalue4)
    xvalue4 = xvalue4 - 2

    if (xvalue4 < -50){
        
        randomy4 = Math.floor(Math.random() * 222)
        console.log('random y4 value' + randomy4)
        xvalue4 = 600;
        console.log(xvalue4)
    }
}

function spaceShip(){
    ctx.drawImage(img, 200, 75);  
}

function animateStars(){
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,600,300)

    starOne()
    starTwo()
    starThree()
    starFour()
    spaceShip()

}

let intervalId = setInterval(animateStars, 10)


