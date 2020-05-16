

//TRQ1 start
let trq1can = document.getElementById("trq1");
let trq1Arc = trq1can.getContext("2d");
let trq1Needle = trq1can.getContext("2d");
let trq1Rad;
let trq1 = 100
let oneTrqInRad = 4/122

let trq2can = document.getElementById("trq2");
let trq2Arc = trq2can.getContext("2d");
let trq2Needle = trq2can.getContext("2d");
let trq2Rad;
let trq2 = 108

//should be the same for everywhere--------------------------
let radius = trq1can.height / 2
//should be the same for everywhere-------------------------
console.log(radius)

function trq1ARC(){
    trq1Arc.translate(radius,radius)


    trq1Arc.beginPath();
    trq1Arc.arc(0, 0, radius * 0.9, 2.79253, -0.21198);
    trq1Arc.strokeStyle = "#2eb82e"
    trq1Arc.lineWidth = radius / 25


    trq1Arc.stroke();

    trq1Arc.beginPath();
    trq1Arc.arc(0, 0, radius * 0.9, -0.21198, 0);
    trq1Arc.strokeStyle = "#ffff00"
    trq1Arc.stroke();

    trq1Arc.beginPath();
    trq1Arc.arc(0, 0, radius * 0.9, 0, 0.523599);
    trq1Arc.strokeStyle = "#ffffff"
    trq1Arc.stroke();

    trq1Arc.beginPath();
    trq1Arc.strokeStyle = "red";
    trq1Arc.lineWidth = radius / 20
    trq1Arc.moveTo((radius * 0.85),0);
    trq1Arc.lineTo(radius * 0.98,0)
    trq1Arc.stroke();
}

function trq1DN(){
   // trq1 = Math.floor(Math.random() * 122)
    trq1Rad = (trq1 * oneTrqInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('trq value : ' + trq1)
    console.log('radian of trq : ' + trq1Rad)

    //this line blanks out the previous line drawings of the needle and text
    trq1Arc.beginPath()
    trq1Arc.arc(0, 0, radius * 0.83, 0, Math.PI * 2);
    trq1Arc.fillStyle = 'black';
    trq1Arc.fill()

    if (trq1 > 106){
        
        trq1Arc.beginPath()
        trq1Arc.font = (radius * 0.3) + "px Arial";
        trq1Arc.textAlign = "center"
        trq1Arc.fillStyle = "red";
        trq1Arc.fillText(trq1.toString(), 0, radius * 0.5);

        trq1Needle.beginPath()
        trq1Needle.lineCap = "round";
        trq1Needle.lineWidth = radius / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        trq1Needle.rotate(trq1Rad)
        trq1Needle.moveTo(0,0)
        trq1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        trq1Needle.lineTo(-(radius * 0.75),(radius * 0.15))
        trq1Needle.rotate(-trq1Rad)
        trq1Needle.stroke();
    } else if (trq1 <= 106){
        trq1Arc.beginPath()
        trq1Arc.font = (radius * 0.31) + "px Arial";
        trq1Arc.textAlign = "center"
        trq1Arc.fillStyle = "white";
        trq1Arc.fillText(trq1.toString(), 0, radius * 0.5);
    
        trq1Needle.beginPath()
        trq1Needle.lineCap = "round";
        trq1Needle.lineWidth = radius / 20
    
        trq1Needle.rotate(trq1Rad)
        trq1Needle.moveTo(0,0)
        trq1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        trq1Needle.lineTo(-(radius * 0.75),(radius * 0.15))
        trq1Needle.rotate(-trq1Rad)
        trq1Needle.stroke();
    }
}




//trq2 start


console.log(radius)

function trq2ARC(){
    trq2Arc.translate(radius,radius)


    trq2Arc.beginPath();
    trq2Arc.arc(0, 0, radius * 0.9, 2.79253, -0.21198);
    trq2Arc.strokeStyle = "#2eb82e"
    trq2Arc.lineWidth = radius / 25


    trq2Arc.stroke();

    trq2Arc.beginPath();
    trq2Arc.arc(0, 0, radius * 0.9, -0.21198, 0);
    trq2Arc.strokeStyle = "#ffff00"
    trq2Arc.stroke();

    trq2Arc.beginPath();
    trq2Arc.arc(0, 0, radius * 0.9, 0, 0.523599);
    trq2Arc.strokeStyle = "#ffffff"
    trq2Arc.stroke();

    trq2Arc.beginPath();
    trq2Arc.strokeStyle = "red";
    trq2Arc.lineWidth = radius / 20
    trq2Arc.moveTo((radius * 0.85),0);
    trq2Arc.lineTo(radius * 0.98,0)
    trq2Arc.stroke();
}

function trq2DN(){
    //trq2 = Math.floor(Math.random() * 122)
    trq2Rad = (trq2 * oneTrqInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('trq value : ' + trq2)
    console.log('radian of trq : ' + trq2Rad)

    //this line blanks out the previous line drawings of the needle and text
    trq2Arc.beginPath()
    trq2Arc.arc(0, 0, radius * 0.83, 0, Math.PI * 2);
    trq2Arc.fillStyle = 'black';
    trq2Arc.fill()

    if (trq2 > 106){
        
        trq2Arc.beginPath()
        trq2Arc.font = (radius * 0.3) + "px Arial";
        trq2Arc.textAlign = "center"
        trq2Arc.fillStyle = "red";
        trq2Arc.fillText(trq2.toString(), 0, radius * 0.5);

        trq2Needle.beginPath()
        trq2Needle.lineCap = "round";
        trq2Needle.lineWidth = radius / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        trq2Needle.rotate(trq2Rad)
        trq2Needle.moveTo(0,0)
        trq2Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        trq2Needle.lineTo(-(radius * 0.75),(radius * 0.15))
        trq2Needle.rotate(-trq2Rad)
        trq2Needle.stroke();
    } else if (trq2 <= 106){
        trq2Arc.beginPath()
        trq2Arc.font = (radius * 0.3) + "px Arial";
        trq2Arc.textAlign = "center"
        trq2Arc.fillStyle = "white";
        trq2Arc.fillText(trq2.toString(), 0, radius * 0.5);
    
        trq2Needle.beginPath()
        trq2Needle.lineCap = "round";
        trq2Needle.lineWidth = radius / 20
    
        trq2Needle.rotate(trq2Rad)
        trq2Needle.moveTo(0,0)
        trq2Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        trq2Needle.lineTo(-(radius * 0.75),(radius * 0.15))
        trq2Needle.rotate(-trq2Rad)
        trq2Needle.stroke();
    }
}


//--#1 NH-------

let nh1can = document.getElementById("nh1");
let nh1Arc = nh1can.getContext("2d");
let nh1Needle = nh1can.getContext("2d");
let nh1Rad;
let nh1 = 101.6

console.log('nh1 radian value:' + nh1Rad)


let onenhInRad = 4.188879 / 120

function nh1ARC(){
    nh1Arc.translate(radius,radius)


    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radius * 0.9, 2.61799, 4.85899);
    nh1Arc.strokeStyle = "white"
    nh1Arc.lineWidth = radius / 25


    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radius * 0.9, 4.85899, 6.15061);
    nh1Arc.strokeStyle = "#2eb82e"
    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radius * 0.9, 6.15061, 0.523599);
    nh1Arc.strokeStyle = "#ffffff"
    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.strokeStyle = "red";
    nh1Arc.lineWidth = radius / 20
    nh1Arc.moveTo((radius * 0.70),(-radius * 0.10));
    nh1Arc.lineTo(radius * 0.98,(-radius * 0.15))
    nh1Arc.stroke();
}

function nh1DN(){
    //nh1 = Math.floor(Math.random() * 122)
    nh1Rad = (nh1 * onenhInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('nh1 value : ' + nh1)
    console.log('radian of nh1 : ' + nh1Rad)

    //this line blanks out the previous line drawings of the needle and text
    nh1Arc.beginPath()
    nh1Arc.arc(0, 0, radius * 0.83, 0, Math.PI * 2);
    nh1Arc.fillStyle = 'black';
    nh1Arc.fill()

    if (nh1 > 101.2){
        
        nh1Arc.beginPath()
        nh1Arc.font = (radius * 0.3) + "px Arial";
        nh1Arc.textAlign = "center"
        nh1Arc.fillStyle = "red";
        nh1Arc.fillText(nh1.toFixed(1), 0, radius * 0.5);

        nh1Needle.beginPath()
        nh1Needle.lineCap = "round";
        nh1Needle.lineWidth = radius / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        
        nh1Needle.rotate(nh1Rad)
        
        nh1Needle.moveTo(0,0)

        nh1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        nh1Needle.lineTo(-(radius * 0.65),(radius * 0.38))
        
        nh1Needle.rotate(-nh1Rad)
        
        nh1Needle.stroke();
    } else if (nh1 <= 101.2){
        nh1Arc.beginPath()
        nh1Arc.font = (radius * 0.3) + "px Arial";
        nh1Arc.textAlign = "center"
        nh1Arc.fillStyle = "white";
        nh1Arc.fillText(nh1.toFixed(1), 0, radius * 0.5);
    
        nh1Needle.beginPath()
        nh1Needle.lineCap = "round";
        nh1Needle.lineWidth = radius / 20
    
        nh1Needle.rotate(nh1Rad)
        nh1Needle.moveTo(0,0)
        nh1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        nh1Needle.lineTo(-(radius * 0.65),(radius * 0.38))
        nh1Needle.rotate(-nh1Rad)
        nh1Needle.stroke();
    }
}


//-----everything runs after this
function everythinggo(){
    trq1ARC()
    trq2ARC()
    nh1ARC()
    
    trq1DN()
    trq2DN()
    nh1DN()
    
    //setInterval(trq1DN, 500)
    //setInterval(trq2DN, 500)
   
    
}



everythinggo()