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
        
        xvalue1 = 600;
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
       
        xvalue2 = 600;
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
      
        xvalue3 = 600;
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
        
        xvalue4 = 600;
     
    }
}
let ssInt = 1;
function spaceShip(){
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
    ctx.fillRect(0,0,600,300)
    console.log('rect fill')

    starOne()
    starTwo()
    starThree()
    starFour()
    spaceShip()

}

let intervalId = setInterval(animateStars, 10)


