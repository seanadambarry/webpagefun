
function nh1ARC(){
    nh1Arc.translate(radius,radius)


    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radius * 0.9, 2.79253, -0.21198);
    nh1Arc.strokeStyle = "#2eb82e"
    nh1Arc.lineWidth = radius / 25


    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radius * 0.9, -0.21198, 0);
    nh1Arc.strokeStyle = "#ffff00"
    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radius * 0.9, 0, 0.523599);
    nh1Arc.strokeStyle = "#ffffff"
    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.strokeStyle = "red";
    nh1Arc.lineWidth = radius / 20
    nh1Arc.moveTo((radius * 0.85),0);
    nh1Arc.lineTo(radius * 0.98,0)
    nh1Arc.stroke();
}

function nh1DN(){
    //nh1 = Math.floor(Math.random() * 122)
    nh1Rad = (nh1 * oneTrqInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('trq value : ' + nh1)
    console.log('radian of trq : ' + nh1Rad)

    //this line blanks out the previous line drawings of the needle and text
    nh1Arc.beginPath()
    nh1Arc.arc(0, 0, radius * 0.83, 0, Math.PI * 2);
    nh1Arc.fillStyle = 'black';
    nh1Arc.fill()

    if (nh1 > 106){
        
        nh1Arc.beginPath()
        nh1Arc.font = (radius * 0.3) + " Arial";
        nh1Arc.textAlign = "center"
        nh1Arc.fillStyle = "red";
        nh1Arc.fillText(nh1.toString(), 0, radius * 0.5);

        nh1Needle.beginPath()
        nh1Needle.lineCap = "round";
        nh1Needle.lineWidth = radius / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        nh1Needle.rotate(nh1Rad)
        nh1Needle.moveTo(0,0)
        nh1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        nh1Needle.lineTo(-(radius * 0.75),(radius * 0.15))
        nh1Needle.rotate(-nh1Rad)
        nh1Needle.stroke();
    } else if (nh1 <= 106){
        nh1Arc.beginPath()
        nh1Arc.font = (radius * 0.3) + "px Arial";
        nh1Arc.textAlign = "center"
        nh1Arc.fillStyle = "white";
        nh1Arc.fillText(nh1.toString(), 0, radius * 0.5);
    
        nh1Needle.beginPath()
        nh1Needle.lineCap = "round";
        nh1Needle.lineWidth = radius / 20
    
        nh1Needle.rotate(nh1Rad)
        nh1Needle.moveTo(0,0)
        nh1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        nh1Needle.lineTo(-(radius * 0.75),(radius * 0.15))
        nh1Needle.rotate(-nh1Rad)
        nh1Needle.stroke();
    }
}