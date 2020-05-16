
let nh2can = document.getElementById("nh2");
let nh2Arc = nh2can.getContext("2d");
let nh2Needle = nh2can.getContext("2d");
let nh2Rad;
let nh2 = 101.6

console.log('nh2 radian value:' + nh2Rad)


function nh2ARC(){
    nh2Arc.translate(radius,radius)


    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radius * 0.9, 2.61799, 4.85899);
    nh2Arc.strokeStyle = "white"
    nh2Arc.lineWidth = radius / 25


    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radius * 0.9, 4.85899, 6.15061);
    nh2Arc.strokeStyle = "#2eb82e"
    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radius * 0.9, 6.15061, 0.523599);
    nh2Arc.strokeStyle = "#ffffff"
    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.strokeStyle = "red";
    nh2Arc.lineWidth = radius / 20
    nh2Arc.moveTo((radius * 0.70),(-radius * 0.10));
    nh2Arc.lineTo(radius * 0.98,(-radius * 0.15))
    nh2Arc.stroke();
}

function nh2DN(){
    //nh2 = Math.floor(Math.random() * 122)
    nh2Rad = (nh2 * onenhInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('nh2 value : ' + nh2)
    console.log('radian of nh2 : ' + nh2Rad)

    //this line blanks out the previous line drawings of the needle and text
    nh2Arc.beginPath()
    nh2Arc.arc(0, 0, radius * 0.83, 0, Math.PI * 2);
    nh2Arc.fillStyle = 'black';
    nh2Arc.fill()

    if (nh2 > 101.2){
        
        nh2Arc.beginPath()
        nh2Arc.font = (radius * 0.3) + "px Arial";
        nh2Arc.textAlign = "center"
        nh2Arc.fillStyle = "red";
        nh2Arc.fillText(nh2.toFixed(1), 0, radius * 0.5);

        nh2Needle.beginPath()
        nh2Needle.lineCap = "round";
        nh2Needle.lineWidth = radius / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        
        nh2Needle.rotate(nh2Rad)
        
        nh2Needle.moveTo(0,0)

        nh2Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        nh2Needle.lineTo(-(radius * 0.65),(radius * 0.38))
        
        nh2Needle.rotate(-nh2Rad)
        
        nh2Needle.stroke();
    } else if (nh2 <= 101.2){
        nh2Arc.beginPath()
        nh2Arc.font = (radius * 0.3) + "px Arial";
        nh2Arc.textAlign = "center"
        nh2Arc.fillStyle = "white";
        nh2Arc.fillText(nh2.toFixed(1), 0, radius * 0.5);
    
        nh2Needle.beginPath()
        nh2Needle.lineCap = "round";
        nh2Needle.lineWidth = radius / 20
    
        nh2Needle.rotate(nh2Rad)
        nh2Needle.moveTo(0,0)
        nh2Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        nh2Needle.lineTo(-(radius * 0.65),(radius * 0.38))
        nh2Needle.rotate(-nh2Rad)
        nh2Needle.stroke();
    }
}