//--#1 OIL temp and PSI-------

let oil1can = document.getElementById("oil1");
let oil1Arc = oil1can.getContext("2d");
let oil1Needle = oil1can.getContext("2d");
let oil1Rad;
//let oil1 = 101.6



console.log('oil1 radian value:' + oil1Rad)


let oneOilTempInRad = 4.188879 / 13

function oil1ARC(){
    oil1Arc.translate(radiusSmall,radiusSmall)


    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 1.8326, 4.45059);
    oil1Arc.strokeStyle = "white"
    oil1Arc.lineWidth = radiusSmall / 25
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 4.97419, 1.309);
    oil1Arc.strokeStyle = "white"
    oil1Arc.lineWidth = radiusSmall / 25

    oil1Arc.stroke();

    

    oil1Arc.beginPath();
    oil1Arc.strokeStyle = "red";
    oil1Arc.lineWidth = radiusSmall / 20
    oil1Arc.moveTo((radiusSmall * 0.70),(-radiusSmall * 0.10));
    oil1Arc.lineTo(radiusSmall * 0.98,(-radiusSmall * 0.15))
    oil1Arc.stroke();
}

function oil1DN(oil1){
    //oil1 = Math.floor(Math.random() * 122)
    oilCRad = (oil1 * oneOilTempInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('oil1 value : ' + oil1)
    console.log('radian of oil1 : ' + oil1Rad)

    //this line blanks out the previous line drawings of the needle and text
    oil1Arc.beginPath()
    oil1Arc.arc(0, 0, radiusSmall * 0.83, 0, Math.PI * 2);
    oil1Arc.fillStyle = 'black';
    oil1Arc.fill()

    if (oil1 > 101.2){
        
        oil1Arc.beginPath()
        oil1Arc.font = (radiusSmall * 0.3) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "red";
        oil1Arc.fillText(oil1.toFixed(1), 0, radiusSmall * 0.5);

        oil1Needle.beginPath()
        oil1Needle.lineCap = "round";
        oil1Needle.lineWidth = radiusSmall / 20
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        
        oil1Needle.rotate(oil1Rad)
        
        oil1Needle.moveTo(0,0)

        oil1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        oil1Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        
        oil1Needle.rotate(-oil1Rad)
        
        oil1Needle.stroke();
    } else if (oil1 <= 101.2){
        oil1Arc.beginPath()
        oil1Arc.font = (radiusSmall * 0.3) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "white";
        oil1Arc.fillText(oil1.toFixed(1), 0, radiusSmall * 0.5);
    
        oil1Needle.beginPath()
        oil1Needle.lineCap = "round";
        oil1Needle.lineWidth = radiusSmall / 20
    
        oil1Needle.rotate(oil1Rad)
        oil1Needle.moveTo(0,0)
        oil1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        oil1Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        oil1Needle.rotate(-oil1Rad)
        oil1Needle.stroke();
    }
}
