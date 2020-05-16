

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
let radiusBig = trq1can.width / 2
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
    trq1Arc.arc(0, 0, radiusBig * 0.9,  -0.21198, 0);
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

let radiusSmall = nh1can.width / 2

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






//np1 start
let np1can = document.getElementById("np1");
let np1Arc = np1can.getContext("2d");
let np1Needle = np1can.getContext("2d");
let np1Rad;
//let nh2 = 64.2

let oneNpInRad = 4.18879 / 1224

console.log(radiusBig)

function np1ARC(){
    np1Arc.translate(radiusBig,radiusBig)


    np1Arc.beginPath();
    np1Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 4.85899);
    np1Arc.strokeStyle = "white"
    np1Arc.lineWidth = radiusBig / 25


    np1Arc.stroke();

    np1Arc.beginPath();
    np1Arc.arc(0, 0, radiusBig * 0.9, 4.85899, 6.15061);
    np1Arc.strokeStyle = "#2eb82e"
    np1Arc.stroke();

    np1Arc.beginPath();
    np1Arc.arc(0, 0, radiusBig * 0.9, -0.21198, 0);
    np1Arc.strokeStyle = "yellow"
    np1Arc.stroke();

    np1Arc.beginPath();
    np1Arc.arc(0, 0, radiusBig * 0.9, 0, 0.523599);
    np1Arc.strokeStyle = "white"
    np1Arc.stroke();

    np1Arc.beginPath();
    np1Arc.strokeStyle = "red";
    np1Arc.lineWidth = radiusBig / 20
    np1Arc.moveTo((radiusBig * 0.85),0);
    np1Arc.lineTo(radiusBig * 0.98,0)
    np1Arc.stroke();
}

function np1DN(np1){

    np1Rad = (np1 * oneNpInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('trq value : ' + np1)
    console.log('radian of trq : ' + np1Rad)

    //this line blanks out the previous line drawings of the needle and text
    np1Arc.beginPath()
    np1Arc.arc(0, 0, radiusBig * 0.83, 0, Math.PI * 2);
    np1Arc.fillStyle = 'black';
    np1Arc.fill()

    //max value is 1224
    if (np1 > 1071){
        
        np1Arc.beginPath()
        np1Arc.font = (radiusBig * 0.3) + "px Arial";
        np1Arc.textAlign = "center"
        np1Arc.fillStyle = "red";
        np1Arc.fillText(np1.toString(), 0, radiusBig * 0.5);

        np1Needle.beginPath()
        np1Needle.lineCap = "round";
        np1Needle.lineWidth = radiusBig / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        np1Needle.rotate(np1Rad)
        np1Needle.moveTo(0,0)
        np1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        np1Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        np1Needle.rotate(-np1Rad)
        np1Needle.stroke();
    } else if (np1 <= 1071){
        np1Arc.beginPath()
        np1Arc.font = (radiusBig * 0.3) + "px Arial";
        np1Arc.textAlign = "center"
        np1Arc.fillStyle = "white";
        np1Arc.fillText(np1.toString(), 0, radiusBig * 0.5);
    
        np1Needle.beginPath()
        np1Needle.lineCap = "round";
        np1Needle.lineWidth = radiusBig / 20
    
        np1Needle.rotate(np1Rad)
        np1Needle.moveTo(0,0)
        np1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        np1Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        np1Needle.rotate(-np1Rad)
        np1Needle.stroke();
    }
}


//np2 start
let np2can = document.getElementById("np2");
let np2Arc = np2can.getContext("2d");
let np2Needle = np2can.getContext("2d");
let np2Rad;
//let nh2 = 64.2

console.log(radiusBig)

function np2ARC(){
    np2Arc.translate(radiusBig,radiusBig)


    np2Arc.beginPath();
    np2Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 4.85899);
    np2Arc.strokeStyle = "white"
    np2Arc.lineWidth = radiusBig / 25


    np2Arc.stroke();

    np2Arc.beginPath();
    np2Arc.arc(0, 0, radiusBig * 0.9, 4.85899, 6.15061);
    np2Arc.strokeStyle = "#2eb82e"
    np2Arc.stroke();

    np2Arc.beginPath();
    np2Arc.arc(0, 0, radiusBig * 0.9, -0.21198, 0);
    np2Arc.strokeStyle = "yellow"
    np2Arc.stroke();

    np2Arc.beginPath();
    np2Arc.arc(0, 0, radiusBig * 0.9, 0, 0.523599);
    np2Arc.strokeStyle = "white"
    np2Arc.stroke();

    np2Arc.beginPath();
    np2Arc.strokeStyle = "red";
    np2Arc.lineWidth = radiusBig / 20
    np2Arc.moveTo((radiusBig * 0.85),0);
    np2Arc.lineTo(radiusBig * 0.98,0)
    np2Arc.stroke();
}

function np2DN(np2){

    np2Rad = (np2 * oneNpInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('trq value : ' + np2)
    console.log('radian of trq : ' + np2Rad)

    //this line blanks out the previous line drawings of the needle and text
    np2Arc.beginPath()
    np2Arc.arc(0, 0, radiusBig * 0.83, 0, Math.PI * 2);
    np2Arc.fillStyle = 'black';
    np2Arc.fill()

    //max value is 1224
    if (np2 > 1071){
        
        np2Arc.beginPath()
        np2Arc.font = (radiusBig * 0.3) + "px Arial";
        np2Arc.textAlign = "center"
        np2Arc.fillStyle = "red";
        np2Arc.fillText(np2.toString(), 0, radiusBig * 0.5);

        np2Needle.beginPath()
        np2Needle.lineCap = "round";
        np2Needle.lineWidth = radiusBig / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        np2Needle.rotate(np2Rad)
        np2Needle.moveTo(0,0)
        np2Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        np2Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        np2Needle.rotate(-np2Rad)
        np2Needle.stroke();
    } else if (np2 <= 1071){
        np2Arc.beginPath()
        np2Arc.font = (radiusBig * 0.3) + "px Arial";
        np2Arc.textAlign = "center"
        np2Arc.fillStyle = "white";
        np2Arc.fillText(np2.toString(), 0, radiusBig * 0.5);
    
        np2Needle.beginPath()
        np2Needle.lineCap = "round";
        np2Needle.lineWidth = radiusBig / 20
    
        np2Needle.rotate(np2Rad)
        np2Needle.moveTo(0,0)
        np2Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        np2Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        np2Needle.rotate(-np2Rad)
        np2Needle.stroke();
    }
}


//itt1 start
let itt1can = document.getElementById("itt1");
let itt1Arc = itt1can.getContext("2d");
let itt1Needle = itt1can.getContext("2d");
let itt1Rad;
//let nh2 = 64.2

let oneIttInRad = 4.71239  / 1196

console.log(radiusBig)

function itt1ARC(){
    itt1Arc.translate(radiusBig,radiusBig)


    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 3.66518);
    itt1Arc.strokeStyle = "white"
    itt1Arc.lineWidth = radiusBig / 25


    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 3.66518, 0);
    itt1Arc.strokeStyle = "#2eb82e"
    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 0, 1.0472);
    itt1Arc.strokeStyle = "white"
    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.strokeStyle = "red";
    itt1Arc.lineWidth = radiusBig / 20
    itt1Arc.moveTo((radiusBig * 0.85),0);
    itt1Arc.lineTo(radiusBig * 0.98,0)
    itt1Arc.stroke();
}

function itt1DN(itt1){

    itt1Rad = (itt1 * oneIttInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('trq value : ' + itt1)
    console.log('radian of trq : ' + itt1Rad)

    //this line blanks out the previous line drawings of the needle and text
    itt1Arc.beginPath()
    itt1Arc.arc(0, 0, radiusBig * 0.83, 0, Math.PI * 2);
    itt1Arc.fillStyle = 'black';
    itt1Arc.fill()

    //max value is 1224
    if (itt1 > 920){
        
        itt1Arc.beginPath()
        itt1Arc.font = (radiusBig * 0.3) + "px Arial";
        itt1Arc.textAlign = "center"
        itt1Arc.fillStyle = "red";
        itt1Arc.fillText(itt1.toString(), (-radiusBig * 0.1) , radiusBig * 0.7);

        itt1Needle.beginPath()
        itt1Needle.lineCap = "round";
        itt1Needle.lineWidth = radiusBig / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        itt1Needle.rotate(itt1Rad)
        itt1Needle.moveTo(0,0)
        itt1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        itt1Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        itt1Needle.rotate(-itt1Rad)
        itt1Needle.stroke();
    } else if (itt1 <= 920){
        itt1Arc.beginPath()
        itt1Arc.font = (radiusBig * 0.3) + "px Arial";
        itt1Arc.textAlign = "center"
        itt1Arc.fillStyle = "white";
        itt1Arc.fillText(itt1.toString(), (-radiusBig * 0.1) , radiusBig * 0.7);
    
        itt1Needle.beginPath()
        itt1Needle.lineCap = "round";
        itt1Needle.lineWidth = radiusBig / 20
    
        itt1Needle.rotate(itt1Rad)
        itt1Needle.moveTo(0,0)
        itt1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        itt1Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        itt1Needle.rotate(-itt1Rad)
        itt1Needle.stroke();
    }
}

//itt2 start
let itt2can = document.getElementById("itt2");
let itt2Arc = itt2can.getContext("2d");
let itt2Needle = itt2can.getContext("2d");
let itt2Rad;
//let nh2 = 64.2

console.log(radiusBig)

function itt2ARC(){
    itt2Arc.translate(radiusBig,radiusBig)


    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 3.66518);
    itt2Arc.strokeStyle = "white"
    itt2Arc.lineWidth = radiusBig / 25


    itt2Arc.stroke();

    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 3.66518, 0);
    itt2Arc.strokeStyle = "#2eb82e"
    itt2Arc.stroke();

    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 0, 1.0472);
    itt2Arc.strokeStyle = "white"
    itt2Arc.stroke();

    itt2Arc.beginPath();
    itt2Arc.strokeStyle = "red";
    itt2Arc.lineWidth = radiusBig / 20
    itt2Arc.moveTo((radiusBig * 0.85),0);
    itt2Arc.lineTo(radiusBig * 0.98,0)
    itt2Arc.stroke();
}

function itt2DN(itt2){

    itt2Rad = (itt2 * oneIttInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('trq value : ' + itt2)
    console.log('radian of trq : ' + itt2Rad)

    //this line blanks out the previous line drawings of the needle and text
    itt2Arc.beginPath()
    itt2Arc.arc(0, 0, radiusBig * 0.83, 0, Math.PI * 2);
    itt2Arc.fillStyle = 'black';
    itt2Arc.fill()

    //max value is 1224
    if (itt2 > 920){
        
        itt2Arc.beginPath()
        itt2Arc.font = (radiusBig * 0.3) + "px Arial";
        itt2Arc.textAlign = "center"
        itt2Arc.fillStyle = "red";
        itt2Arc.fillText(itt2.toString(), (-radiusBig * 0.1) , radiusBig * 0.7);

        itt2Needle.beginPath()
        itt2Needle.lineCap = "round";
        itt2Needle.lineWidth = radiusBig / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        itt2Needle.rotate(itt2Rad)
        itt2Needle.moveTo(0,0)
        itt2Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        itt2Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        itt2Needle.rotate(-itt2Rad)
        itt2Needle.stroke();
    } else if (itt2 <= 920){
        itt2Arc.beginPath()
        itt2Arc.font = (radiusBig * 0.3) + "px Arial";
        itt2Arc.textAlign = "center"
        itt2Arc.fillStyle = "white";
        itt2Arc.fillText(itt2.toString(), (-radiusBig * 0.1) , radiusBig * 0.7);
    
        itt2Needle.beginPath()
        itt2Needle.lineCap = "round";
        itt2Needle.lineWidth = radiusBig / 20
    
        itt2Needle.rotate(itt2Rad)
        itt2Needle.moveTo(0,0)
        itt2Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        itt2Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        itt2Needle.rotate(-itt2Rad)
        itt2Needle.stroke();
    }
}




//--#1 OIL temp and PSI-------

let oil1can = document.getElementById("oil1");
let oil1Arc = oil1can.getContext("2d");
let oil1Needle = oil1can.getContext("2d");
let oil1Rad;
//let oil1 = 101.6

radiusOil = (oil1can.width / 2)

console.log('oil1 radian value:' + oil1Rad)


let oneOilTempInRad = 2.44346 / 200

function oil1ARC(){
    oil1Arc.translate((oil1can.width / 2),(oil1can.width / 2))

    //oil Temp
    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 1.8326, 2.00713);
    oil1Arc.strokeStyle = "white"
    oil1Arc.lineWidth = radiusSmall / 25
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 2.00713, 2.44346);
    oil1Arc.strokeStyle = "yellow"
    oil1Arc.lineWidth = radiusSmall / 25
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 2.44346, 3.75246);
    oil1Arc.strokeStyle = "green"
    oil1Arc.lineWidth = radiusSmall / 25
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 3.75246, 3.83972);
    oil1Arc.strokeStyle = "yellow"
    oil1Arc.lineWidth = radiusSmall / 25
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 3.83972, 4.27606);
    oil1Arc.strokeStyle = "white"
    oil1Arc.lineWidth = radiusSmall / 25
    oil1Arc.stroke();


    //oil PSI
    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 4.97419, 1.309);
    oil1Arc.strokeStyle = "white"
    oil1Arc.lineWidth = radiusSmall / 25
    oil1Arc.stroke();

    

    oil1Arc.beginPath();
    oil1Arc.strokeStyle = "red";
    oil1Arc.lineWidth = radiusSmall / 20
    oil1Arc.moveTo((-radiusSmall * 0.70),(-radiusSmall * 0.7));
    oil1Arc.lineTo(-radiusSmall * 0.60,(-radiusSmall * 0.6))
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.strokeStyle = "red";
    oil1Arc.lineWidth = radiusSmall / 20
    oil1Arc.moveTo((-radiusSmall * 0.32),(radiusSmall * 0.75));
    oil1Arc.lineTo(-radiusSmall * 0.40,(radiusSmall * .9))
    oil1Arc.stroke();


    console.log('radius small : ' + radiusSmall * 0.5)
}

function oil1DN(oil1){
    //oil1 = Math.floor(Math.random() * 122)
    oil1CRad = (oil1 * oneOilTempInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('oil1 value : ' + oil1)
    console.log('radian of oil1 : ' + oil1Rad)

    //this line blanks out the previous line drawings of the needle and text
    oil1Arc.beginPath()
    oil1Arc.arc(0, 0, radiusSmall * 0.83, 0, Math.PI * 2);
    oil1Arc.fillStyle = 'black';
    oil1Arc.fill()

    oil1Arc.beginPath()
    oil1Arc.rect((-radiusOil * 0.9),(-radiusOil * 0.7),(radiusOil * 0.5),(radiusOil * 0.23))
    oil1Arc.fillStyle = "black";
    oil1Arc.fill();

    oil1Arc.beginPath()
    oil1Arc.rect((radiusOil * 0.50),(-radiusOil * 0.7),(radiusOil * 0.4),(radiusOil * 0.25))
    oil1Arc.fillStyle = "black";
    oil1Arc.fill();

    if (oil1 > 107){
        
        oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "white";
        oil1Arc.fillText(oil1, radiusSmall * -1.1, radiusSmall * -0.8);

        oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "#3399ff";
        oil1Arc.fillText('°C', radiusSmall * -1.1, radiusSmall * -1.2);

        oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "white";
        oil1Arc.fillText(oil1, radiusSmall * 1.1, radiusSmall * -0.8);

        oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "#3399ff";
        oil1Arc.fillText('PSI', radiusSmall * 1.1, radiusSmall * -1.2);

        oil1Needle.beginPath()
        oil1Needle.lineCap = "round";
        oil1Needle.lineWidth = radiusSmall / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        
        oil1Needle.rotate(oil1CRad)
        
        oil1Needle.moveTo(0,0)
        oil1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        oil1Needle.lineTo(-(radiusSmall * 0.57),(radiusSmall * 0.48))
        oil1Needle.rotate(-oil1CRad)
        
        oil1Needle.stroke();
    } else if (oil1 <= 107){
        oil1Arc.beginPath()

        oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "white";
        oil1Arc.fillText(oil1, radiusSmall * -1.1, radiusSmall * -0.8);

        oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "#3399ff";
        oil1Arc.fillText('°C', radiusSmall * -1.1, radiusSmall * -1.2);

        oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "white";
        oil1Arc.fillText(oil1, radiusSmall * 1.1, radiusSmall * -0.8);

        oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "#3399ff";
        oil1Arc.fillText('PSI', radiusSmall * 1.1, radiusSmall * -1.2);

    
        oil1Needle.beginPath()
        oil1Needle.lineCap = "round";
        oil1Needle.lineWidth = radiusSmall / 20
    
        oil1Needle.rotate(oil1CRad)
        oil1Needle.moveTo(0,0)
        oil1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        oil1Needle.lineTo(-(radiusSmall * 0.57),(radiusSmall * 0.48))
        oil1Needle.rotate(-oil1CRad)
        oil1Needle.stroke();
    }
}



//-----everything runs after this
function animateAll(){
    
    trq1ARC()
    trq2ARC()
    nh1ARC()
    nh2ARC()
    np1ARC()
    np2ARC()

    itt1ARC()
    itt2ARC()

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
    randomNum = Math.floor(Math.random() * 1224)
    np1DN(randomNum)
    randomNum = Math.floor(Math.random() * 1224)
    np2DN(randomNum)
    randomNum = Math.floor(Math.random() * 1196)
    itt1DN(randomNum)
    randomNum = Math.floor(Math.random() * 1196)
    itt2DN(randomNum)


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
    np1ARC()
    np2ARC()
    itt1ARC()
    itt2ARC()
    oil1ARC()

    trq1DN(80)
    trq2DN(80)
    nh1DN(92.7)
    nh2DN(93.2)
    np1DN(850)
    np2DN(850)
    itt1DN(1196)
    itt2DN(1196)
    

    oil1DN(107)
}

//animateAll()
displayAllStatic()


//let trqInt = setInterval(incrTrq90, 1000)
