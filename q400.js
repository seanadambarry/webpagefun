

//TRQ1 start
let trq1can = document.getElementById("trq1");
let trq1Arc = trq1can.getContext("2d");
let trq1Needle = trq1can.getContext("2d");
let trq1Rad;
//let trq1 = 106
let oneTrqInRad = 4.01426/121.9

let trq2can = document.getElementById("trq2");
let trq2Arc = trq2can.getContext("2d");
let trq2Needle = trq2can.getContext("2d");
let trq2Rad;
//let trq2 = 106

//should be the same for everywhere--------------------------
let radiusBig = trq1can.height / 2
//should be the same for everywhere-------------------------
console.log(radiusBig)

function trq1ARC(){
    trq1Arc.translate(radiusBig,radiusBig)


    trq1Arc.beginPath();
    trq1Arc.arc(0, 0, radiusBig * 0.9, 2.79253, -0.174533);
    trq1Arc.strokeStyle = "#2eb82e"
    trq1Arc.lineWidth = radiusBig / 25


    trq1Arc.stroke();

    trq1Arc.beginPath();
    trq1Arc.arc(0, 0, radiusBig * 0.9, -0.174533, 0);
    trq1Arc.strokeStyle = "#ffff00"
    trq1Arc.stroke();

    trq1Arc.beginPath();
    trq1Arc.arc(0, 0, radiusBig * 0.9, 0, 0.523599);
    trq1Arc.strokeStyle = "#ffffff"
    trq1Arc.stroke();

    trq1Arc.beginPath();
    trq1Arc.strokeStyle = "red";
    trq1Arc.lineWidth = radiusBig / 20
    trq1Arc.moveTo((radiusBig * 0.85),0);
    trq1Arc.lineTo(radiusBig * 0.98,0)
    trq1Arc.stroke();
}

function trq1DN(trq1){
    trq1Rad = (trq1 * oneTrqInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('trq value : ' + trq1)
    console.log('radian of trq : ' + trq1Rad)

    //this line blanks out the previous line drawings of the needle and text
    trq1Arc.beginPath()
    trq1Arc.arc(0, 0, radiusBig * 0.83, 0, Math.PI * 2);
    trq1Arc.fillStyle = 'black';
    trq1Arc.fill()

    if (trq1 > 106){
        
        trq1Arc.beginPath()
        trq1Arc.font = (radiusBig * 0.3) + "px Arial";
        trq1Arc.textAlign = "center"
        trq1Arc.fillStyle = "red";
        trq1Arc.fillText(trq1.toString(), 0, radiusBig * 0.5);

        trq1Needle.beginPath()
        trq1Needle.lineCap = "round";
        trq1Needle.lineWidth = radiusBig / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        trq1Needle.rotate(trq1Rad)
        trq1Needle.moveTo(0,0)
        trq1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        trq1Needle.lineTo(-(radiusBig * 0.75),(radiusBig * 0.25))
        trq1Needle.rotate(-trq1Rad)
        trq1Needle.stroke();
    } else if (trq1 <= 106){
        trq1Arc.beginPath()
        trq1Arc.font = (radiusBig * 0.31) + "px Arial";
        trq1Arc.textAlign = "center"
        trq1Arc.fillStyle = "white";
        trq1Arc.fillText(trq1.toString(), 0, radiusBig * 0.5);
    
        trq1Needle.beginPath()
        trq1Needle.lineCap = "round";
        trq1Needle.lineWidth = radiusBig / 20
    
        trq1Needle.rotate(trq1Rad)
        trq1Needle.moveTo(0,0)
        trq1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        trq1Needle.lineTo(-(radiusBig * 0.75),(radiusBig * 0.25))
        trq1Needle.rotate(-trq1Rad)
        trq1Needle.stroke();
    }
}




//trq2 start


console.log(radiusBig)

function trq2ARC(){
    trq2Arc.translate(radiusBig,radiusBig)


    trq2Arc.beginPath();
    trq2Arc.arc(0, 0, radiusBig * 0.9, 2.79253, -0.21198);
    trq2Arc.strokeStyle = "#2eb82e"
    trq2Arc.lineWidth = radiusBig / 25


    trq2Arc.stroke();

    trq2Arc.beginPath();
    trq2Arc.arc(0, 0, radiusBig * 0.9, -0.21198, 0);
    trq2Arc.strokeStyle = "#ffff00"
    trq2Arc.stroke();

    trq2Arc.beginPath();
    trq2Arc.arc(0, 0, radiusBig * 0.9, 0, 0.523599);
    trq2Arc.strokeStyle = "#ffffff"
    trq2Arc.stroke();

    trq2Arc.beginPath();
    trq2Arc.strokeStyle = "red";
    trq2Arc.lineWidth = radiusBig / 20
    trq2Arc.moveTo((radiusBig * 0.85),0);
    trq2Arc.lineTo(radiusBig * 0.98,0)
    trq2Arc.stroke();
}

function trq2DN(trq2){

    trq2Rad = (trq2 * oneTrqInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('trq value : ' + trq2)
    console.log('radian of trq : ' + trq2Rad)

    //this line blanks out the previous line drawings of the needle and text
    trq2Arc.beginPath()
    trq2Arc.arc(0, 0, radiusBig * 0.83, 0, Math.PI * 2);
    trq2Arc.fillStyle = 'black';
    trq2Arc.fill()

    if (trq2 > 106){
        
        trq2Arc.beginPath()
        trq2Arc.font = (radiusBig * 0.3) + "px Arial";
        trq2Arc.textAlign = "center"
        trq2Arc.fillStyle = "red";
        trq2Arc.fillText(trq2.toString(), 0, radiusBig * 0.5);

        trq2Needle.beginPath()
        trq2Needle.lineCap = "round";
        trq2Needle.lineWidth = radiusBig / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        trq2Needle.rotate(trq2Rad)
        trq2Needle.moveTo(0,0)
        trq2Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        trq2Needle.lineTo(-(radiusBig * 0.75),(radiusBig * 0.25))
        trq2Needle.rotate(-trq2Rad)
        trq2Needle.stroke();
    } else if (trq2 <= 106){
        trq2Arc.beginPath()
        trq2Arc.font = (radiusBig * 0.3) + "px Arial";
        trq2Arc.textAlign = "center"
        trq2Arc.fillStyle = "white";
        trq2Arc.fillText(trq2.toString(), 0, radiusBig * 0.5);
    
        trq2Needle.beginPath()
        trq2Needle.lineCap = "round";
        trq2Needle.lineWidth = radiusBig / 20
    
        trq2Needle.rotate(trq2Rad)
        trq2Needle.moveTo(0,0)
        trq2Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        trq2Needle.lineTo(-(radiusBig * 0.75),(radiusBig * 0.25))
        trq2Needle.rotate(-trq2Rad)
        trq2Needle.stroke();
    }
}


//--#1 NH-------

let nh1can = document.getElementById("nh1");
let nh1Arc = nh1can.getContext("2d");
let nh1Needle = nh1can.getContext("2d");
let nh1Rad;
//let nh1 = 101.6

let radiusSmall = nh1can.height / 2

console.log('nh1 radian value:' + nh1Rad)


let onenhInRad = 4.188879 / 120

function nh1ARC(){
    nh1Arc.translate(radiusSmall,radiusSmall)


    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radiusSmall * 0.9, 2.61799, 4.85899);
    nh1Arc.strokeStyle = "white"
    nh1Arc.lineWidth = radiusSmall / 25


    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radiusSmall * 0.9, 4.85899, 6.15061);
    nh1Arc.strokeStyle = "#2eb82e"
    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radiusSmall * 0.9, 6.15061, 0.523599);
    nh1Arc.strokeStyle = "#ffffff"
    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.strokeStyle = "red";
    nh1Arc.lineWidth = radiusSmall / 20
    nh1Arc.moveTo((radiusSmall * 0.70),(-radiusSmall * 0.10));
    nh1Arc.lineTo(radiusSmall * 0.98,(-radiusSmall * 0.15))
    nh1Arc.stroke();
}

function nh1DN(nh1){
    //nh1 = Math.floor(Math.random() * 122)
    nh1Rad = (nh1 * onenhInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('nh1 value : ' + nh1)
    console.log('radian of nh1 : ' + nh1Rad)

    //this line blanks out the previous line drawings of the needle and text
    nh1Arc.beginPath()
    nh1Arc.arc(0, 0, radiusSmall * 0.83, 0, Math.PI * 2);
    nh1Arc.fillStyle = 'black';
    nh1Arc.fill()

    if (nh1 > 101.2){
        
        nh1Arc.beginPath()
        nh1Arc.font = (radiusSmall * 0.3) + "px Arial";
        nh1Arc.textAlign = "center"
        nh1Arc.fillStyle = "red";
        nh1Arc.fillText(nh1.toFixed(1), 0, radiusSmall * 0.5);

        nh1Needle.beginPath()
        nh1Needle.lineCap = "round";
        nh1Needle.lineWidth = radiusSmall / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        
        nh1Needle.rotate(nh1Rad)
        
        nh1Needle.moveTo(0,0)

        nh1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        nh1Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        
        nh1Needle.rotate(-nh1Rad)
        
        nh1Needle.stroke();
    } else if (nh1 <= 101.2){
        nh1Arc.beginPath()
        nh1Arc.font = (radiusSmall * 0.3) + "px Arial";
        nh1Arc.textAlign = "center"
        nh1Arc.fillStyle = "white";
        nh1Arc.fillText(nh1.toFixed(1), 0, radiusSmall * 0.5);
    
        nh1Needle.beginPath()
        nh1Needle.lineCap = "round";
        nh1Needle.lineWidth = radiusSmall / 20
    
        nh1Needle.rotate(nh1Rad)
        nh1Needle.moveTo(0,0)
        nh1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        nh1Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        nh1Needle.rotate(-nh1Rad)
        nh1Needle.stroke();
    }
}


//--#2 NH-------


let nh2can = document.getElementById("nh2");
let nh2Arc = nh2can.getContext("2d");
let nh2Needle = nh2can.getContext("2d");
let nh2Rad;
//let nh2 = 64.2

console.log('nh2 radian value:' + nh2Rad)


function nh2ARC(){
    nh2Arc.translate(radiusSmall,radiusSmall)


    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radiusSmall * 0.9, 2.61799, 4.85899);
    nh2Arc.strokeStyle = "white"
    nh2Arc.lineWidth = radiusSmall / 25


    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radiusSmall * 0.9, 4.85899, 6.15061);
    nh2Arc.strokeStyle = "#2eb82e"
    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radiusSmall * 0.9, 6.15061, 0.523599);
    nh2Arc.strokeStyle = "#ffffff"
    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.strokeStyle = "red";
    nh2Arc.lineWidth = radiusSmall / 20
    nh2Arc.moveTo((radiusSmall * 0.70),(-radiusSmall * 0.10));
    nh2Arc.lineTo(radiusSmall * 0.98,(-radiusSmall * 0.15))
    nh2Arc.stroke();
}

function nh2DN(nh2){
    nh2Rad = (nh2 * onenhInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('nh2 value : ' + nh2)
    console.log('radian of nh2 : ' + nh2Rad)

    //this line blanks out the previous line drawings of the needle and text
    nh2Arc.beginPath()
    nh2Arc.arc(0, 0, radiusSmall * 0.83, 0, Math.PI * 2);
    nh2Arc.fillStyle = 'black';
    nh2Arc.fill()

    if (nh2 > 101.2){
        
        nh2Arc.beginPath()
        nh2Arc.font = (radiusSmall * 0.3) + "px Arial";
        nh2Arc.textAlign = "center"
        nh2Arc.fillStyle = "red";
        nh2Arc.fillText(nh2.toFixed(1), 0, radiusSmall * 0.5);

        nh2Needle.beginPath()
        nh2Needle.lineCap = "round";
        nh2Needle.lineWidth = radiusSmall / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        
        nh2Needle.rotate(nh2Rad)
        
        nh2Needle.moveTo(0,0)

        nh2Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        nh2Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        
        nh2Needle.rotate(-nh2Rad)
        
        nh2Needle.stroke();
    } else if (nh2 <= 101.2){
        nh2Arc.beginPath()
        nh2Arc.font = (radiusSmall * 0.3) + "px Arial";
        nh2Arc.textAlign = "center"
        nh2Arc.fillStyle = "white";
        nh2Arc.fillText(nh2.toFixed(1), 0, radiusSmall * 0.5);
    
        nh2Needle.beginPath()
        nh2Needle.lineCap = "round";
        nh2Needle.lineWidth = radiusSmall / 20
    
        nh2Needle.rotate(nh2Rad)
        nh2Needle.moveTo(0,0)
        nh2Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        nh2Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        nh2Needle.rotate(-nh2Rad)
        nh2Needle.stroke();
    }
}


//-----everything runs after this
function animateAll(){
    
    trq1ARC()
    trq2ARC()
    nh1ARC()
    nh2ARC()
    setInterval(randomAll, 500)
   
    
}

function randomAll(){
    let randomNum = Math.floor(Math.random() * 122)
    trq1DN(randomNum)
    randomNum = Math.floor(Math.random() * 122)
    trq2DN(randomNum)
    randomNum = Math.floor(Math.random() * 120)
    nh1DN(randomNum)
    randomNum = Math.floor(Math.random() * 120)
    nh2DN(randomNum)

}
let i = 0;
function incrTrq90(){
        if (i === 0){
            trq1DN(i)
            i += 10
        } else if (i === 10){
            trq1DN(Math.floor(Math.random() * 10))
            i += 10
        } else if (i === 20){
            trq1DN(Math.floor(Math.random() * 10) + 10)
            i += 10
        } else if (i === 30){
            trq1DN(Math.floor(Math.random() * 10) + 20)
            i += 10
        } else if (i === 40){
            trq1DN(Math.floor(Math.random() * 10) + 30)
            i += 10
        } else if (i === 50){
            trq1DN(Math.floor(Math.random() * 10) + 40)
            i += 10
        } else if (i === 60){
            trq1DN(Math.floor(Math.random() * 10) + 50)
            i += 10
        } else if (i === 70){
            trq1DN(Math.floor(Math.random() * 10) + 60)
            i += 10
        } else if (i === 80){
            trq1DN(Math.floor(Math.random() * 10) + 70)
            i += 10
        } else if (i === 90){
            trq1DN(Math.floor(Math.random() * 10) + 80)
            i += 10
        }  else if (i === 100){
            trq1DN(90)
            i += 10
            clearInterval(trqInt)
        }
    }


function displayAllStatic(){
    trq1ARC()
    trq2ARC()
    nh1ARC()
    nh2ARC()
    trq1DN(75)
    trq2DN(110)
    nh1DN(64.2)
    nh2DN(101.3)
}

//animateAll()
//displayAllStatic()
trq1ARC()
trq2ARC()
trq1DN(0)
trq2DN(0)
nh1ARC()
nh2ARC()
nh1DN(64.2)
nh2DN(101.3)

let trqInt = setInterval(incrTrq90, 1000)
