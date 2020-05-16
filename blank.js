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