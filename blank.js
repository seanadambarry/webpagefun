let randomy4 = Math.floor(Math.random() * 44) + 100
let xvalue4 = 100;
function starThree(){
    ctx.beginPath()
    ctx.moveTo(xvalue4,randomy4)
    ctx.strokeStyle = "white"
    ctx.lineTo(xvalue4 + 40, randomy4)
    ctx.stroke()

    xvalue4 = xvalue4 - 10

    if (xvalue4 === -100){
        
        randomy4 = Math.floor(Math.random() * 400)
        console.log('random y4 value' + randomy4)
        xvalue4 = 600;
    }
}