//--#1 OIL temp and PSI-------

let oil2can = document.getElementById("oil2");
let oil2Arc = oil2can.getContext("2d");
let oil2Needle = oil2can.getContext("2d");
let oil2Rad;
//let oil2 = 101.6

radiusOil = (oil2can.width / 2)

let oneOilTempInRad = 2.44346 / 200

let oneOilPsiInRad;

//34.5 deg is 0.6021377 radians
oil2Arc.translate((oil2can.width / 2),(oil2can.width / 2))
function oil2ARC(){

    //oil Temp
    oil2Arc.beginPath();
    oil2Arc.arc(0, 0, radiusSmall * 0.9, 1.8326, 2.00713);
    oil2Arc.strokeStyle = "white"
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.stroke();

    oil2Arc.beginPath();
    oil2Arc.arc(0, 0, radiusSmall * 0.9, 2.00713, 2.44346);
    oil2Arc.strokeStyle = "yellow"
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.stroke();

    oil2Arc.beginPath();
    oil2Arc.arc(0, 0, radiusSmall * 0.9, 2.44346, 3.75246);
    oil2Arc.strokeStyle = "green"
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.stroke();

    oil2Arc.beginPath();
    oil2Arc.arc(0, 0, radiusSmall * 0.9, 3.75246, 3.83972);
    oil2Arc.strokeStyle = "yellow"
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.stroke();

    oil2Arc.beginPath();
    oil2Arc.arc(0, 0, radiusSmall * 0.9, 3.83972, 4.27606);
    oil2Arc.strokeStyle = "white"
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.stroke();


    //oil PSI
    oil2Arc.beginPath();
    oil2Arc.arc(0, 0, radiusSmall * 0.9, 4.97419, 5.67232);
    oil2Arc.strokeStyle = "yellow"
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.stroke();

    oil2Arc.beginPath();
    oil2Arc.arc(0, 0, radiusSmall * 0.9, 5.67232, 0);
    oil2Arc.strokeStyle = "green"
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.stroke();
   
    oil2Arc.beginPath();
    oil2Arc.arc(0, 0, radiusSmall * 0.9, 0, 0.785398);
    oil2Arc.strokeStyle = "yellow"
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.stroke();

    oil2Arc.beginPath();
    oil2Arc.arc(0, 0, radiusSmall * 0.9, 0.785398, 1.309);
    oil2Arc.strokeStyle = "white"
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.stroke();


    //red ticks oil temp

    oil2Arc.beginPath();
    oil2Arc.strokeStyle = "red";
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.moveTo((-radiusSmall * 0.70),(-radiusSmall * 0.7));
    oil2Arc.lineTo(-radiusSmall * 0.60,(-radiusSmall * 0.6))
    oil2Arc.stroke();

    oil2Arc.beginPath();
    oil2Arc.strokeStyle = "red";
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.moveTo((-radiusSmall * 0.32),(radiusSmall * 0.75));
    oil2Arc.lineTo(-radiusSmall * 0.40,(radiusSmall * .9))
    oil2Arc.stroke();

    //red ticks oil pressure
    oil2Arc.beginPath();
    oil2Arc.strokeStyle = "red";
    oil2Arc.lineWidth = radiusSmall / 17
    oil2Arc.moveTo((radiusSmall * 0.65),(radiusSmall * 0.55));
    oil2Arc.lineTo(radiusSmall * 0.80,(radiusSmall * .65))
    oil2Arc.stroke();
    


    console.log('radius small : ' + radiusSmall * 0.5)
}




function oil2TempDN(oil2Temp){
    console.log('oil temp function running')
    let oil2TRad = (oil2Temp * oneOilTempInRad)

    //this line blanks out the previous line drawings of the needle and text
    oil2Arc.beginPath()
    oil2Arc.arc(0, 0, radiusSmall * 0.83, 0, Math.PI * 2);
    oil2Arc.fillStyle = 'black';
    oil2Arc.fill()

    oil2Arc.beginPath()
    oil2Arc.rect((-radiusOil * 0.9),(-radiusOil * 0.7),(radiusOil * 0.5),(radiusOil * 0.23))
    oil2Arc.fillStyle = "black";
    oil2Arc.fill();

    
    console.log('oil function running')
    if (oil2Temp < 107){
        console.log('oil temp below 107')
        oil2Arc.beginPath()
        oil2Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil2Arc.textAlign = "center"
        oil2Arc.fillStyle = "white";
        oil2Arc.fillText(oil2Temp, radiusSmall * -1.1, radiusSmall * -0.8);

        oil2Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil2Arc.textAlign = "center"
        oil2Arc.fillStyle = "#3399ff";
        oil2Arc.fillText('°C', radiusSmall * -1.1, radiusSmall * -1.2);

        oil2Needle.beginPath()
        oil2Needle.lineCap = "round";
        oil2Needle.lineWidth = radiusSmall / 17
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        
        oil2Needle.rotate(oil2TRad)
        
        oil2Needle.moveTo(0,0)
        oil2Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 temp
        oil2Needle.lineTo(-(radiusSmall * 0.57),(radiusSmall * 0.48))
        oil2Needle.rotate(-oil2TRad)
        
        oil2Needle.stroke();
    } else if (oil2Temp >= 107){
        console.log('oil temp over 107')
        oil2Arc.beginPath()
        oil2Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil2Arc.textAlign = "center"
        oil2Arc.fillStyle = "red";
        oil2Arc.fillText(oil2Temp, radiusSmall * -1.1, radiusSmall * -0.8);

        oil2Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil2Arc.textAlign = "center"
        oil2Arc.fillStyle = "#3399ff";
        oil2Arc.fillText('°C', radiusSmall * -1.1, radiusSmall * -1.2);

        oil2Needle.beginPath()
        oil2Needle.lineCap = "round";
        oil2Needle.lineWidth = radiusSmall / 17
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        
        oil2Needle.rotate(oil2TRad)
        
        oil2Needle.moveTo(0,0)
        oil2Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 temp
        oil2Needle.lineTo(-(radiusSmall * 0.57),(radiusSmall * 0.48))
        oil2Needle.rotate(-oil2TRad)
        
        oil2Needle.stroke();
    }
}
///oilpresure

function oil2PressDN(oil2Press){
    console.log('oil PRESS function running')
    let oil2PRad;

    oil2Arc.beginPath()
    oil2Arc.rect((radiusOil * 0.50),(-radiusOil * 0.7),(radiusOil * 0.4),(radiusOil * 0.25))
    oil2Arc.fillStyle = "white";
    oil2Arc.fill();

    oil2Arc.font = (radiusSmall * 0.35) + "px Arial";
    oil2Arc.textAlign = "center"
    oil2Arc.fillStyle = "red";
    oil2Arc.fillText(oil2Press, radiusSmall * 1.1, radiusSmall * -0.8);
    
    oil2Arc.font = (radiusSmall * 0.35) + "px Arial";
    oil2Arc.textAlign = "center"
    oil2Arc.fillStyle = "#3399ff";
    oil2Arc.fillText('PSI', radiusSmall * 1.1, radiusSmall * -1.2);

    if (oil2Press < 44){
            //clearning the background of the PSI Value
            
            oneOilPsiInRad = 0.6021377 / 44
            oil2PRad = (oil2Press * oneOilPsiInRad)
            
            console.log('less than 44 psi ' + (-oil2PRad))
            oil2Needle.beginPath()
            oil2Needle.lineCap = "round";
            oil2Needle.lineWidth = radiusSmall / 17
            //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
            console.log(-oil2PRad)

            oil2Needle.rotate(-oil2PRad)
            
            oil2Needle.moveTo(0,0)
            oil2Needle.strokeStyle = "red"
            //this is the initial position of the line at 0 trq
            oil2Needle.lineTo((radiusSmall * 0.20),(radiusSmall * 0.72))
            oil2Needle.rotate(oil2PRad)
            
            oil2Needle.stroke();
    } else if (oil2Press >= 44 && oil2Press < 61){

            //total movement is 1.309 to 61 psi
            // from 44 to 61 is 0.698132 radians and 17 psi

            oneOilPsiInRad = 0.698132 / 17
            oil2PRad = ((oil2Press - 44) * oneOilPsiInRad) + 0.6021377 // plus old movement of 30 degrees


            oil2Needle.beginPath()
            oil2Needle.lineCap = "round";
            oil2Needle.lineWidth = radiusSmall / 17
            //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
       
            
            console.log('over 44 psi ' + (-oil2PRad))

            oil2Needle.rotate(-oil2PRad)
            
            oil2Needle.moveTo(0,0)
            oil2Needle.strokeStyle = "white"
            //this is the initial position of the line at 0 trq
            oil2Needle.lineTo((radiusSmall * 0.20),(radiusSmall * 0.72))

            oil2Needle.rotate(oil2PRad)
            
            oil2Needle.stroke();
    } else if (oil2Press >= 61 && oil2Press < 72) {
              //total movement is 1.916268523529412 to 72 psi
            // from 61 to 72 is 0.610865 radians and 11 psi

            oneOilPsiInRad = 0.610865 / 11
            oil2PRad = ((oil2Press - 61) * oneOilPsiInRad) + 1.309 // plus old movement of 75 degrees


            oil2Needle.beginPath()
            oil2Needle.lineCap = "round";
            oil2Needle.lineWidth = radiusSmall / 17
            //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
       
            
            console.log('over 44 psi ' + (-oil2PRad))

            oil2Needle.rotate(-oil2PRad)
            
            oil2Needle.moveTo(0,0)
            oil2Needle.strokeStyle = "white"
            //this is the initial position of the line at 0 trq
            oil2Needle.lineTo((radiusSmall * 0.20),(radiusSmall * 0.72))

            oil2Needle.rotate(oil2PRad)
            
            oil2Needle.stroke();
    } else if (oil2Press >= 72) {
            //total movement is 2.5862631818181816 to 100 psi
          // from 72 to 100 is 0.698132 radians and 28 psi

          oneOilPsiInRad = 0.698132 / 28
          oil2PRad = ((oil2Press - 72) * oneOilPsiInRad) + 1.91986 // plus old movement of 75 degrees


          oil2Needle.beginPath()
          oil2Needle.lineCap = "round";
          oil2Needle.lineWidth = radiusSmall / 17
          //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
     
          
          console.log('over 44 psi ' + (-oil2PRad))

          oil2Needle.rotate(-oil2PRad)
          
          oil2Needle.moveTo(0,0)
          oil2Needle.strokeStyle = "white"
          //this is the initial position of the line at 0 trq
          oil2Needle.lineTo((radiusSmall * 0.20),(radiusSmall * 0.72))

          oil2Needle.rotate(oil2PRad)
          
          oil2Needle.stroke();
    }
}