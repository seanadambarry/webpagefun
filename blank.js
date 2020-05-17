function nh2DN(nh2){
    //nh2 = Math.floor(Math.random() * 122)
    nh2Rad = (nh2 * onenhInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

    console.log('nh2 value : ' + nh2)
    console.log('radian of nh2 : ' + nh2Rad)

    //this line blanks out the previous line drawings of the needle and text
    nh2Arc.beginPath()
    nh2Arc.arc(0, 0, radiusSmall * 0.83, 0, Math.PI * 2);
    nh2Arc.fillStyle = 'black';
    nh2Arc.fill()

    if (nh2 > 100 && engineParameters.mtop === true){
        
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
    } else if (nh2 <= 100 && engineParameters.mtop === true){
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
    } else if (nh2 > 98.3 && engineParameters.ntop === true){
        nh2Arc.beginPath()
        nh2Arc.font = (radiusSmall * 0.3) + "px Arial";
        nh2Arc.textAlign = "center"
        nh2Arc.fillStyle = "red";
        nh2Arc.fillText(nh2.toFixed(1), 0, radiusSmall * 0.5);
    
        nh2Needle.beginPath()
        nh2Needle.lineCap = "round";
        nh2Needle.lineWidth = radiusSmall / 20
    
        nh2Needle.rotate(nh2Rad)
        nh2Needle.moveTo(0,0)
        nh2Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        nh2Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        nh2Needle.rotate(-nh2Rad)
        nh2Needle.stroke();
    } else if (nh2 <= 98.3 && engineParameters.ntop === true){
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