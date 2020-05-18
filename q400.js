let engineParameters = {
    _mtop: false,
    set mtop(change){
        if (change === true){
            this._mtop = true;
            this._ntop = false;
            this._engStart = false;
            document.getElementById("mtopbutton").disabled = true;
            document.getElementById("ntopbutton").disabled = false;
            document.getElementById("startbutton").disabled = false;
            document.getElementById("mtopntoprtop1").innerHTML = 'MTOP<br>-- %'
            document.getElementById("mtopntoprtop2").innerHTML = 'MTOP<br>-- %'
            itt1MtopARC()
            itt2MtopARC()
            nh1MtopARC()
            nh2MtopARC()

            engineParameters.itt1 = 890
            engineParameters.itt2 = 880
            engineParameters.nh1 = 101.1
            engineParameters.nh2 = 95
        } else if (change === false){
            this._mtop = false
            document.getElementById("mtopbutton").disabled = false;
            document.getElementById("ntopbutton").disabled = true;
        }
    },
    get mtop(){
        return this._mtop;
    },
    _ntop: false,
    set ntop(change){
        if (change === true){ // if ntop is true, disable button
            this._ntop = true;
            this._mtop = false;
            this._engStart = false;
            document.getElementById("mtopbutton").disabled = false;
            document.getElementById("ntopbutton").disabled = true;
            document.getElementById("startbutton").disabled = false;
            document.getElementById("mtopntoprtop1").innerHTML = 'NTOP<br>-- %'
            document.getElementById("mtopntoprtop2").innerHTML = 'NTOP<br>-- %'
            itt1NtopARC()
            itt2NtopARC()
            nh1NtopARC()
            nh2NtopARC()
            //showing the max for now
            engineParameters.nh1 = 98.4
            engineParameters.nh2 = 95
            engineParameters.itt1 = 850
            engineParameters.itt2 = 839
        } else if (change === false){
            this._ntop = false;
            document.getElementById("mtopbutton").disabled = true;
            document.getElementById("ntopbutton").disabled = false;
        }
    },
    get ntop(){
        return this._ntop
    },
    _engStart: false,
    set engStart(change){
        if (change === true){
            this._engStart = true;
            this._mtop = false;
            this._ntop = false;
            document.getElementById("mtopbutton").disabled = false;
            document.getElementById("ntopbutton").disabled = false;
            document.getElementById("startbutton").disabled = true;
            document.getElementById("mtopntoprtop1").innerHTML = '----<br>-- %'
            document.getElementById("mtopntoprtop2").innerHTML = '----<br>-- %'
            itt1EngStartARC()
            itt2EngStartARC()
            engineParameters.itt1 = 940
            engineParameters.itt2 = 920
        } else if (change === false){
            this._engStart = false;
            document.getElementById("startbutton").disabled = false;
        }
    },
    get engStart(){
        return this._engStart
    },
    _propSelectorOn: false,
    _plaBetweenFIandDisc: false,
    _threeMinsAfterTO: false,
    _trq1 : 0,
    set trq1(newTrq){
        this._trq1 = newTrq;
        trq1ARC();
        trq1DN(newTrq);
    },
    get trq1(){
        return this._trq1;
    },
    _trq2 : 0,
    set trq2(newTrq){
        this._tq2 = newTrq;
        trq2ARC();
        trq2DN(newTrq);
    },
    get trq2(){
        return this._trq2;
    },
    _nh1 : 0,
    set nh1(newNh){
        this._nh1 = newNh;
        nh1DN(newNh);
    },
    get nh1(){
        return this._nh1;
    },
    _nh2 : 0,
    set nh2(newNh){
        this._nh2 = newNh;
        nh2DN(newNh);
    },
    get nh2(){
        return this._nh2;
    },
    _itt1 : 0,
    set itt1(newItt1){
        this._itt1 = newItt1;
        itt1DN(newItt1);
    },
    get itt1(){
        return this._itt1;
    },
    _itt2 : 0,
    set itt2(newItt2){
        this._itt2 = newItt2;
        itt2DN(newItt2);
    },
    get itt2(){
        return this._itt2;
    },
    _np1 : 0,
    set np1(newNp){
        this._np1 = newNp
        np1ARC();

        np1DN(newNp);
    },
    get np1(){
        return this._np1;
    },
    _np2 : 0,
    set np2(newNp){
        this._np2 = newNp
        np2ARC();
        np2DN(newNp);
    },
    get np2(){
        return this._np2;
    },
    _ff1 : 0,
    set ff1(newFf){
        this._ff1 = newFf;
        document.getElementById("ff1").innerHTML = '<p>FF<br></p><p style="color:#3399ff">PPH<BR></p>' + newFf;
    },
    get ff1(){
        return this._ff1;
    },
    _ff2 : 0,
    set ff2(newFf){
        this._ff2 = newFf;
        document.getElementById("ff2").innerHTML = '<p>FF<br></p><p style="color:#3399ff">PPH<BR></p>' + newFf;
    },
    get ff2(){
        return this._ff2;
    },
    _nl1 : 0,
    set nl1(newNl){
        this._nl1 = newNl;
        if (newNl > 100 && engineParameters.mtop === true){
            document.getElementById("nl1").innerHTML = '<p>NL<br></p><p style="color:#3399ff">%RPM<BR></p>' + '<p style="color:red">' + newNl + '</p>';
        } else if (newNl <= 100 && engineParameters.mtop === true){
            document.getElementById("nl1").innerHTML = '<p>NL<br></p><p style="color:#3399ff">%RPM<BR></p>' + newNl;
        } else if (newNl > 97.7 && engineParameters.mtop === false){
            document.getElementById("nl1").innerHTML = '<p>NL<br></p><p style="color:#3399ff">%RPM<BR></p>' + '<p style="color:red">' + newNl + '</p>';
        } else if (newNl <= 97.7 && engineParameters.mtop === false){
            document.getElementById("nl1").innerHTML = '<p>NL<br></p><p style="color:#3399ff">%RPM<BR></p>' + newNl;
        } 
        
    },
    get nl1(){
        return this._nl1;
    },
    _nl2 : 0,
    set nl2(newNl){
        this._nl2 = newNl;
        if (newNl > 100 && engineParameters.mtop === true){
            document.getElementById("nl2").innerHTML = '<p>NL<br></p><p style="color:#3399ff">%RPM<BR></p>' + '<p style="color:red">' + newNl + '</p>';
        } else if (newNl <= 100 && engineParameters.mtop === true){
            document.getElementById("nl2").innerHTML = '<p>NL<br></p><p style="color:#3399ff">%RPM<BR></p>' + newNl;
        } else if (newNl > 97.7 && engineParameters.mtop === false){
            document.getElementById("nl2").innerHTML = '<p>NL<br></p><p style="color:#3399ff">%RPM<BR></p>' + '<p style="color:red">' + newNl + '</p>';
        } else if (newNl <= 97.7 && engineParameters.mtop === false){
            document.getElementById("nl2").innerHTML = '<p>NL<br></p><p style="color:#3399ff">%RPM<BR></p>' + newNl;
        } 
    },
    get nl2(){
        return this._nl2;
    },
    randomAnimation : false,
    _oil1Temp : 0,
    _oil2Temp : 0,
    set oil1Temp(newOilTemp){
        this._oil1Temp = newOilTemp;
        runOils(newOilTemp, this._oil1Press);
    },
    get oil1Temp(){
        return this._oil1Temp;
    },
    _oil1Press : 0,
    set oil1Press(newOilPress){
        this._oil1Press = newOilPress;
        runOils(this._oil1Temp, newOilPress)
    },
    _oil2Press : 0,
}

let intervalId;

//engineParameters.engStart = true;

function turnOnMTOP(){
    engineParameters.mtop = true
    console.log('mtop value after: ' + engineParameters.mtop)
}

function turnOnNTOP(){
    engineParameters.ntop = true
    console.log('ntop value after: ' + engineParameters.ntop)
}

function engineStart(){
    engineParameters.engStart = true;
}



//TRQ1 start
let trq1can = document.getElementById("trq1");

let radiusBig = trq1can.width / 2

let trq1Arc = trq1can.getContext("2d");
let trq1Needle = trq1can.getContext("2d");
let trq1Rad;
trq1Arc.translate(radiusBig,radiusBig)
//let trq1 = 106
let oneTrqInRad = 4.01426/121.9

let trq2can = document.getElementById("trq2");
let trq2Arc = trq2can.getContext("2d");
let trq2Needle = trq2can.getContext("2d");
trq2Arc.translate(radiusBig,radiusBig)
let trq2Rad;
//let trq2 = 106

//should be the same for everywhere--------------------------

//should be the same for everywhere-------------------------

function trq1ARC(){
    


    trq1Arc.beginPath();
    trq1Arc.arc(0, 0, radiusBig * 0.9, 2.79253, -0.174533);
    trq1Arc.strokeStyle = "green"
    trq1Arc.lineWidth = radiusBig / 17


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
    trq1Arc.lineWidth = radiusBig / 17
    trq1Arc.moveTo((radiusBig * 0.85),0);
    trq1Arc.lineTo(radiusBig * 0.98,0)
    trq1Arc.stroke();
}

function trq1DN(trq1){
    trq1Rad = (trq1 * oneTrqInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

 

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
        trq1Needle.lineWidth = radiusBig / 17
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
        trq1Needle.lineWidth = radiusBig / 17
    
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

function trq2ARC(){
    


    trq2Arc.beginPath();
    trq2Arc.arc(0, 0, radiusBig * 0.9, 2.79253, -0.21198);
    trq2Arc.strokeStyle = "green"
    trq2Arc.lineWidth = radiusBig / 17


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
    trq2Arc.lineWidth = radiusBig / 17
    trq2Arc.moveTo((radiusBig * 0.85),0);
    trq2Arc.lineTo(radiusBig * 0.98,0)
    trq2Arc.stroke();
}

function trq2DN(trq2){

    trq2Rad = (trq2 * oneTrqInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

 

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
        trq2Needle.lineWidth = radiusBig / 17
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
        trq2Needle.lineWidth = radiusBig / 17
    
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
nh1Arc.translate(radiusSmall,radiusSmall)

let onenhInRad = 4.188879 / 120

function nh1MtopARC(){
    
    //blank out previous arc
    nh1Arc.beginPath()
    nh1Arc.rect(-radiusSmall * 1,-radiusSmall * 1,radiusSmall * 2,radiusSmall * 2)
    nh1Arc.fillStyle = "black"
    nh1Arc.fill(); 

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radiusSmall * 0.9, 2.61799, 4.85899);
    nh1Arc.strokeStyle = "white"
    nh1Arc.lineWidth = radiusSmall / 17


    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radiusSmall * 0.9, 4.85899, 6.15061);
    nh1Arc.strokeStyle = "green"
    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radiusSmall * 0.9, 6.15061, 0.523599);
    nh1Arc.strokeStyle = "#ffffff"
    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.strokeStyle = "red";
    nh1Arc.lineWidth = radiusSmall / 17
    nh1Arc.moveTo((radiusSmall * 0.70),(-radiusSmall * 0.10));
    nh1Arc.lineTo(radiusSmall * 0.98,(-radiusSmall * 0.15))
    nh1Arc.stroke();
}

function nh1NtopARC(){
    
    //blank out previous arc
    nh1Arc.beginPath()
    nh1Arc.rect(-radiusSmall * 1,-radiusSmall * 1,radiusSmall * 2,radiusSmall * 2)
    nh1Arc.fillStyle = "black"
    nh1Arc.fill(); 

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radiusSmall * 0.9, 2.61799, 4.85899);
    nh1Arc.strokeStyle = "white"
    nh1Arc.lineWidth = radiusSmall / 17


    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radiusSmall * 0.9, 4.85899, 6.05629);
    nh1Arc.strokeStyle = "green"
    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.arc(0, 0, radiusSmall * 0.9, 6.05629, 0.523599);
    nh1Arc.strokeStyle = "#ffffff"
    nh1Arc.stroke();

    nh1Arc.beginPath();
    nh1Arc.strokeStyle = "red";
    nh1Arc.lineWidth = radiusSmall / 17
    nh1Arc.moveTo((radiusSmall * 0.80),(-radiusSmall * 0.20));
    nh1Arc.lineTo(radiusSmall * 0.95,(-radiusSmall * 0.25))
    nh1Arc.stroke();
}

function nh1DN(nh1){
    //nh1 = Math.floor(Math.random() * 122)
    nh1Rad = (nh1 * onenhInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

  

    //this line blanks out the previous line drawings of the needle and text
    nh1Arc.beginPath()
    nh1Arc.arc(0, 0, radiusSmall * 0.83, 0, Math.PI * 2);
    nh1Arc.fillStyle = 'black';
    nh1Arc.fill()

    if (nh1 > 100 && engineParameters.mtop === true){
        
        nh1Arc.beginPath()
        nh1Arc.font = (radiusSmall * 0.3) + "px Arial";
        nh1Arc.textAlign = "center"
        nh1Arc.fillStyle = "red";
        nh1Arc.fillText(nh1.toFixed(1), 0, radiusSmall * 0.5);

        nh1Needle.beginPath()
        nh1Needle.lineCap = "round";
        nh1Needle.lineWidth = radiusSmall / 17
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        
        nh1Needle.rotate(nh1Rad)
        
        nh1Needle.moveTo(0,0)

        nh1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        nh1Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        
        nh1Needle.rotate(-nh1Rad)
        
        nh1Needle.stroke();
    } else if (nh1 <= 100 && engineParameters.mtop === true){
        nh1Arc.beginPath()
        nh1Arc.font = (radiusSmall * 0.3) + "px Arial";
        nh1Arc.textAlign = "center"
        nh1Arc.fillStyle = "white";
        nh1Arc.fillText(nh1.toFixed(1), 0, radiusSmall * 0.5);
    
        nh1Needle.beginPath()
        nh1Needle.lineCap = "round";
        nh1Needle.lineWidth = radiusSmall / 17
    
        nh1Needle.rotate(nh1Rad)
        nh1Needle.moveTo(0,0)
        nh1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        nh1Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        nh1Needle.rotate(-nh1Rad)
        nh1Needle.stroke();
    } else if (nh1 > 98.3 && engineParameters.mtop === false){
        nh1Arc.beginPath()
        nh1Arc.font = (radiusSmall * 0.3) + "px Arial";
        nh1Arc.textAlign = "center"
        nh1Arc.fillStyle = "red";
        nh1Arc.fillText(nh1.toFixed(1), 0, radiusSmall * 0.5);
    
        nh1Needle.beginPath()
        nh1Needle.lineCap = "round";
        nh1Needle.lineWidth = radiusSmall / 17
    
        nh1Needle.rotate(nh1Rad)
        nh1Needle.moveTo(0,0)
        nh1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        nh1Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        nh1Needle.rotate(-nh1Rad)
        nh1Needle.stroke();
    } else if (nh1 <= 98.3 && engineParameters.mtop === false){
        nh1Arc.beginPath()
        nh1Arc.font = (radiusSmall * 0.3) + "px Arial";
        nh1Arc.textAlign = "center"
        nh1Arc.fillStyle = "white";
        nh1Arc.fillText(nh1.toFixed(1), 0, radiusSmall * 0.5);
    
        nh1Needle.beginPath()
        nh1Needle.lineCap = "round";
        nh1Needle.lineWidth = radiusSmall / 17
    
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
nh2Arc.translate(radiusSmall,radiusSmall)
let nh2Rad;
//let nh2 = 64.2

function nh2MtopARC(){
    
    //blank out previous arc
    nh2Arc.beginPath()
    nh2Arc.rect(-radiusSmall * 1,-radiusSmall * 1,radiusSmall * 2,radiusSmall * 2)
    nh2Arc.fillStyle = "black"
    nh2Arc.fill(); 

    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radiusSmall * 0.9, 2.61799, 4.85899);
    nh2Arc.strokeStyle = "white"
    nh2Arc.lineWidth = radiusSmall / 17


    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radiusSmall * 0.9, 4.85899, 6.15061);
    nh2Arc.strokeStyle = "green"
    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radiusSmall * 0.9, 6.15061, 0.523599);
    nh2Arc.strokeStyle = "#ffffff"
    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.strokeStyle = "red";
    nh2Arc.lineWidth = radiusSmall / 17
    nh2Arc.moveTo((radiusSmall * 0.70),(-radiusSmall * 0.10));
    nh2Arc.lineTo(radiusSmall * 0.98,(-radiusSmall * 0.15))
    nh2Arc.stroke();
}

function nh2NtopARC(){
    
    //blank out previous arc
    nh2Arc.beginPath()
    nh2Arc.rect(-radiusSmall * 1,-radiusSmall * 1,radiusSmall * 2,radiusSmall * 2)
    nh2Arc.fillStyle = "black"
    nh2Arc.fill(); 

    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radiusSmall * 0.9, 2.61799, 4.85899);
    nh2Arc.strokeStyle = "white"
    nh2Arc.lineWidth = radiusSmall / 17


    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radiusSmall * 0.9, 4.85899, 6.05629);
    nh2Arc.strokeStyle = "green"
    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.arc(0, 0, radiusSmall * 0.9, 6.05629, 0.523599);
    nh2Arc.strokeStyle = "#ffffff"
    nh2Arc.stroke();

    nh2Arc.beginPath();
    nh2Arc.strokeStyle = "red";
    nh2Arc.lineWidth = radiusSmall / 17
    nh2Arc.moveTo((radiusSmall * 0.80),(-radiusSmall * 0.20));
    nh2Arc.lineTo(radiusSmall * 0.95,(-radiusSmall * 0.25))
    nh2Arc.stroke();
}

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
        nh2Needle.lineWidth = radiusSmall / 17
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
        nh2Needle.lineWidth = radiusSmall / 17
    
        nh2Needle.rotate(nh2Rad)
        nh2Needle.moveTo(0,0)
        nh2Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        nh2Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        nh2Needle.rotate(-nh2Rad)
        nh2Needle.stroke();
    } else if (nh2 > 98.3 && engineParameters.mtop === false){
        nh2Arc.beginPath()
        nh2Arc.font = (radiusSmall * 0.3) + "px Arial";
        nh2Arc.textAlign = "center"
        nh2Arc.fillStyle = "red";
        nh2Arc.fillText(nh2.toFixed(1), 0, radiusSmall * 0.5);
    
        nh2Needle.beginPath()
        nh2Needle.lineCap = "round";
        nh2Needle.lineWidth = radiusSmall / 17
    
        nh2Needle.rotate(nh2Rad)
        nh2Needle.moveTo(0,0)
        nh2Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        nh2Needle.lineTo(-(radiusSmall * 0.65),(radiusSmall * 0.38))
        nh2Needle.rotate(-nh2Rad)
        nh2Needle.stroke();
    } else if (nh2 <= 98.3 && engineParameters.mtop === false){
        nh2Arc.beginPath()
        nh2Arc.font = (radiusSmall * 0.3) + "px Arial";
        nh2Arc.textAlign = "center"
        nh2Arc.fillStyle = "white";
        nh2Arc.fillText(nh2.toFixed(1), 0, radiusSmall * 0.5);
    
        nh2Needle.beginPath()
        nh2Needle.lineCap = "round";
        nh2Needle.lineWidth = radiusSmall / 17
    
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
np1Arc.translate(radiusBig,radiusBig)
let np1Rad;
//let nh2 = 64.2

let oneNpInRad = 4.18879 / 1224



function np1ARC(){

    np1Arc.beginPath();
    np1Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 4.85899);
    np1Arc.strokeStyle = "white"
    np1Arc.lineWidth = radiusBig / 17


    np1Arc.stroke();

    np1Arc.beginPath();
    np1Arc.arc(0, 0, radiusBig * 0.9, 4.85899, 6.15061);
    np1Arc.strokeStyle = "green"
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
    np1Arc.lineWidth = radiusBig / 17
    np1Arc.moveTo((radiusBig * 0.85),0);
    np1Arc.lineTo(radiusBig * 0.98,0)
    np1Arc.stroke();
}

function np1DN(np1){

    np1Rad = (np1 * oneNpInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

 

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
        np1Needle.lineWidth = radiusBig / 17
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
        np1Needle.lineWidth = radiusBig / 17
    
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
np2Arc.translate(radiusBig,radiusBig)
let np2Rad;
//let nh2 = 64.2

function np2ARC(){
    


    np2Arc.beginPath();
    np2Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 4.85899);
    np2Arc.strokeStyle = "white"
    np2Arc.lineWidth = radiusBig / 17


    np2Arc.stroke();

    np2Arc.beginPath();
    np2Arc.arc(0, 0, radiusBig * 0.9, 4.85899, 6.15061);
    np2Arc.strokeStyle = "green"
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
    np2Arc.lineWidth = radiusBig / 17
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
        np2Needle.lineWidth = radiusBig / 17
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
        np2Needle.lineWidth = radiusBig / 17
    
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
itt1Arc.translate(radiusBig,radiusBig)
let oneIttInRad = 4.71239  / 1196

function itt1EngStartARC(){
    
    
    //blank out previous arc
    itt1Arc.beginPath()
    itt1Arc.rect(-radiusBig * 1,-radiusBig * 1,radiusBig * 2,radiusBig * 2)
    itt1Arc.fillStyle = "black"
    itt1Arc.fill();


    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 3.66518);
    itt1Arc.strokeStyle = "white"
    itt1Arc.lineWidth = radiusBig / 17
    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 3.66518, 0);
    itt1Arc.strokeStyle = "green"
    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 0, 1.0472);
    itt1Arc.strokeStyle = "white"
    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.strokeStyle = "red";
    itt1Arc.lineWidth = radiusBig / 17
    itt1Arc.moveTo((radiusBig * 0.85),0);
    itt1Arc.lineTo(radiusBig * 0.98,0)
    itt1Arc.stroke();
}


//draw arc for ITT 1 at MTOP max 880 deg
function itt1MtopARC(){
    
    
    //blank out previous arc
    itt1Arc.beginPath()
    itt1Arc.rect(-radiusBig * 1,-radiusBig * 1,radiusBig * 2,radiusBig * 2)
    itt1Arc.fillStyle = "black"
    itt1Arc.fill();


    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 3.66518);
    itt1Arc.strokeStyle = "white"
    itt1Arc.lineWidth = radiusBig / 17
    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 3.66518, 6.10865);
    itt1Arc.strokeStyle = "green"
    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 6.10865, 1.0472);
    itt1Arc.strokeStyle = "white"
    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.strokeStyle = "red";
    itt1Arc.lineWidth = radiusBig / 17
    itt1Arc.moveTo((radiusBig * 0.80),(-radiusBig * 0.15));
    itt1Arc.lineTo((radiusBig * 0.95),(-radiusBig * 0.17));
    itt1Arc.stroke();
}

//draw arc for ITT 1 at N-TOP max 880 deg
function itt1NtopARC(){
    
    
    //blank out previous arc
    itt1Arc.beginPath()
    itt1Arc.rect(-radiusBig * 1,-radiusBig * 1,radiusBig * 2,radiusBig * 2)
    itt1Arc.fillStyle = "black"
    itt1Arc.fill();


    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 3.66518);
    itt1Arc.strokeStyle = "white"
    itt1Arc.lineWidth = radiusBig / 17
    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 3.66518, 5.93412);
    itt1Arc.strokeStyle = "green"
    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.arc(0, 0, radiusBig * 0.9, 5.93412, 1.0472);
    itt1Arc.strokeStyle = "white"
    itt1Arc.stroke();

    itt1Arc.beginPath();
    itt1Arc.strokeStyle = "red";
    itt1Arc.lineWidth = radiusBig / 17
    itt1Arc.moveTo((radiusBig * 0.77),(-radiusBig * 0.27));
    itt1Arc.lineTo((radiusBig * 0.93),(-radiusBig * 0.32));
    itt1Arc.stroke();
}

function itt1DN(itt1){


    itt1Rad = (itt1 * oneIttInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   



    //this line blanks out the previous line drawings of the needle and text
    itt1Arc.beginPath()
    itt1Arc.arc(0, 0, radiusBig * 0.83, 0, Math.PI * 2);
    itt1Arc.fillStyle = 'black';
    itt1Arc.fill()

    //max value is 1224
    if (itt1 > 920 && engineParameters.engStart === true){
        
        itt1Arc.beginPath()
        itt1Arc.font = (radiusBig * 0.3) + "px Arial";
        itt1Arc.textAlign = "center"
        itt1Arc.fillStyle = "red";
        itt1Arc.fillText(itt1.toString(), (-radiusBig * 0.1) , radiusBig * 0.7);

        itt1Needle.beginPath()
        itt1Needle.lineCap = "round";
        itt1Needle.lineWidth = radiusBig / 17
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        itt1Needle.rotate(itt1Rad)
        itt1Needle.moveTo(0,0)
        itt1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        itt1Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        itt1Needle.rotate(-itt1Rad)
        itt1Needle.stroke();
    } else if (itt1 <= 920 && engineParameters.engStart === true){
        itt1Arc.beginPath()
        itt1Arc.font = (radiusBig * 0.3) + "px Arial";
        itt1Arc.textAlign = "center"
        itt1Arc.fillStyle = "white";
        itt1Arc.fillText(itt1.toString(), (-radiusBig * 0.1) , radiusBig * 0.7);
    
        itt1Needle.beginPath()
        itt1Needle.lineCap = "round";
        itt1Needle.lineWidth = radiusBig / 17
    
        itt1Needle.rotate(itt1Rad)
        itt1Needle.moveTo(0,0)
        itt1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        itt1Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        itt1Needle.rotate(-itt1Rad)
        itt1Needle.stroke();
    } else if (itt1 > 880 && engineParameters.mtop === true){
        
        itt1Arc.beginPath()
        itt1Arc.font = (radiusBig * 0.3) + "px Arial";
        itt1Arc.textAlign = "center"
        itt1Arc.fillStyle = "red";
        itt1Arc.fillText(itt1.toString(), (-radiusBig * 0.1) , radiusBig * 0.7);

        itt1Needle.beginPath()
        itt1Needle.lineCap = "round";
        itt1Needle.lineWidth = radiusBig / 17
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        itt1Needle.rotate(itt1Rad)
        itt1Needle.moveTo(0,0)
        itt1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        itt1Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        itt1Needle.rotate(-itt1Rad)
        itt1Needle.stroke();
    } else if (itt1 <= 880 && engineParameters.mtop === true){
        
        itt1Arc.beginPath()
        itt1Arc.font = (radiusBig * 0.3) + "px Arial";
        itt1Arc.textAlign = "center"
        itt1Arc.fillStyle = "white";
        itt1Arc.fillText(itt1.toString(), (-radiusBig * 0.1) , radiusBig * 0.7);

        itt1Needle.beginPath()
        itt1Needle.lineCap = "round";
        itt1Needle.lineWidth = radiusBig / 17
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        itt1Needle.rotate(itt1Rad)
        itt1Needle.moveTo(0,0)
        itt1Needle.strokeStyle = "white"
        //this is the initial position of the line at 0 trq
        itt1Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        itt1Needle.rotate(-itt1Rad)
        itt1Needle.stroke();
    } else if (itt1 > 839 && engineParameters.ntop === true){
        
        itt1Arc.beginPath()
        itt1Arc.font = (radiusBig * 0.3) + "px Arial";
        itt1Arc.textAlign = "center"
        itt1Arc.fillStyle = "red";
        itt1Arc.fillText(itt1.toString(), (-radiusBig * 0.1) , radiusBig * 0.7);

        itt1Needle.beginPath()
        itt1Needle.lineCap = "round";
        itt1Needle.lineWidth = radiusBig / 17
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        itt1Needle.rotate(itt1Rad)
        itt1Needle.moveTo(0,0)
        itt1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        itt1Needle.lineTo(-(radiusBig * 0.67),(radiusBig * 0.37))
        itt1Needle.rotate(-itt1Rad)
        itt1Needle.stroke();
    } else if (itt1 <= 839 && engineParameters.ntop === true){
        
        itt1Arc.beginPath()
        itt1Arc.font = (radiusBig * 0.3) + "px Arial";
        itt1Arc.textAlign = "center"
        itt1Arc.fillStyle = "white";
        itt1Arc.fillText(itt1.toString(), (-radiusBig * 0.1) , radiusBig * 0.7);

        itt1Needle.beginPath()
        itt1Needle.lineCap = "round";
        itt1Needle.lineWidth = radiusBig / 17
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
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
itt2Arc.translate(radiusBig,radiusBig)
let itt2Rad;
//let nh2 = 64.2



function itt2EngStartARC(){

    //blank out previous arc
    itt2Arc.beginPath()
    itt2Arc.rect(-radiusBig * 1,-radiusBig * 1,radiusBig * 2,radiusBig * 2)
    itt2Arc.fillStyle = "black"
    itt2Arc.fill();


    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 3.66518);
    itt2Arc.strokeStyle = "white"
    itt2Arc.lineWidth = radiusBig / 17
    
    itt2Arc.stroke();
    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 3.66518, 0);
    itt2Arc.strokeStyle = "green"
    itt2Arc.stroke();

    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 0, 1.0472);
    itt2Arc.strokeStyle = "white"
    itt2Arc.stroke();

    itt2Arc.beginPath();
    itt2Arc.strokeStyle = "red";
    itt2Arc.lineWidth = radiusBig / 17
    itt2Arc.moveTo((radiusBig * 0.85),0);
    itt2Arc.lineTo(radiusBig * 0.98,0)
    itt2Arc.stroke();
}

//draw arc for ITT 1 at MTOP max 880 deg
function itt2MtopARC(){
    
    
    //blank out previous arc
    itt2Arc.beginPath()
    itt2Arc.rect(-radiusBig * 1,-radiusBig * 1,radiusBig * 2,radiusBig * 2)
    itt2Arc.fillStyle = "black"
    itt2Arc.fill();


    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 3.66518);
    itt2Arc.strokeStyle = "white"
    itt2Arc.lineWidth = radiusBig / 17
    itt2Arc.stroke();

    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 3.66518, 6.10865);
    itt2Arc.strokeStyle = "green"
    itt2Arc.stroke();

    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 6.10865, 1.0472);
    itt2Arc.strokeStyle = "white"
    itt2Arc.stroke();

    itt2Arc.beginPath();
    itt2Arc.strokeStyle = "red";
    itt2Arc.lineWidth = radiusBig / 17
    itt2Arc.moveTo((radiusBig * 0.80),(-radiusBig * 0.15));
    itt2Arc.lineTo((radiusBig * 0.95),(-radiusBig * 0.17));
    itt2Arc.stroke();
}

//draw arc for ITT 1 at N-TOP max 880 deg
function itt2NtopARC(){
    
    
    //blank out previous arc
    itt2Arc.beginPath()
    itt2Arc.rect(-radiusBig * 1,-radiusBig * 1,radiusBig * 2,radiusBig * 2)
    itt2Arc.fillStyle = "black"
    itt2Arc.fill();


    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 2.61799, 3.66518);
    itt2Arc.strokeStyle = "white"
    itt2Arc.lineWidth = radiusBig / 17
    itt2Arc.stroke();

    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 3.66518, 5.93412);
    itt2Arc.strokeStyle = "green"
    itt2Arc.stroke();

    itt2Arc.beginPath();
    itt2Arc.arc(0, 0, radiusBig * 0.9, 5.93412, 1.0472);
    itt2Arc.strokeStyle = "white"
    itt2Arc.stroke();

    itt2Arc.beginPath();
    itt2Arc.strokeStyle = "red";
    itt2Arc.lineWidth = radiusBig / 17
    itt2Arc.moveTo((radiusBig * 0.77),(-radiusBig * 0.27));
    itt2Arc.lineTo((radiusBig * 0.93),(-radiusBig * 0.32));
    itt2Arc.stroke();
}


function itt2DN(itt2){

    itt2Rad = (itt2 * oneIttInRad)
   

    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066
   

 

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
        itt2Needle.lineWidth = radiusBig / 17
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
        itt2Needle.lineWidth = radiusBig / 17
    
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

let oneOilTempInRad = 2.44346 / 200

let oneOilPsiInRad;

//34.5 deg is 0.6021377 radians
oil1Arc.translate((oil1can.width / 2),(oil1can.width / 2))
function oil1ARC(){

    //oil Temp
    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 1.8326, 2.00713);
    oil1Arc.strokeStyle = "white"
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 2.00713, 2.44346);
    oil1Arc.strokeStyle = "yellow"
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 2.44346, 3.75246);
    oil1Arc.strokeStyle = "green"
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 3.75246, 3.83972);
    oil1Arc.strokeStyle = "yellow"
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 3.83972, 4.27606);
    oil1Arc.strokeStyle = "white"
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.stroke();


    //oil PSI
    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 4.97419, 5.67232);
    oil1Arc.strokeStyle = "yellow"
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 5.67232, 0);
    oil1Arc.strokeStyle = "green"
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.stroke();
   
    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 0, 0.785398);
    oil1Arc.strokeStyle = "yellow"
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.arc(0, 0, radiusSmall * 0.9, 0.785398, 1.309);
    oil1Arc.strokeStyle = "white"
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.stroke();


    //red ticks oil temp

    oil1Arc.beginPath();
    oil1Arc.strokeStyle = "red";
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.moveTo((-radiusSmall * 0.70),(-radiusSmall * 0.7));
    oil1Arc.lineTo(-radiusSmall * 0.60,(-radiusSmall * 0.6))
    oil1Arc.stroke();

    oil1Arc.beginPath();
    oil1Arc.strokeStyle = "red";
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.moveTo((-radiusSmall * 0.32),(radiusSmall * 0.75));
    oil1Arc.lineTo(-radiusSmall * 0.40,(radiusSmall * .9))
    oil1Arc.stroke();

    //red ticks oil pressure
    oil1Arc.beginPath();
    oil1Arc.strokeStyle = "red";
    oil1Arc.lineWidth = radiusSmall / 17
    oil1Arc.moveTo((radiusSmall * 0.65),(radiusSmall * 0.55));
    oil1Arc.lineTo(radiusSmall * 0.80,(radiusSmall * .65))
    oil1Arc.stroke();
    


    console.log('radius small : ' + radiusSmall * 0.5)
}

function runOils(oil1Temp, oil1Press){
    oil1ARC();
    oil1TempDN(oil1Temp);
    oil1PressDN(oil1Press);
}


function oil1TempDN(oil1Temp){
    console.log('oil temp function running')
    let oil1TRad = (oil1Temp * oneOilTempInRad)
    
    

    console.log('oil function running')
    //green arc 0-100 yellow 100-106 red radial 106 over limit above 106. 0 trq = 0 rad, 122 trq = 4 rad, 106trq=3.49066

    //this line blanks out the previous line drawings of the needle and text
    oil1Arc.beginPath()
    oil1Arc.arc(0, 0, radiusSmall * 0.83, 0, Math.PI * 2);
    oil1Arc.fillStyle = 'black';
    oil1Arc.fill()

    oil1Arc.beginPath()
    oil1Arc.rect((-radiusOil * 0.9),(-radiusOil * 0.7),(radiusOil * 0.5),(radiusOil * 0.23))
    oil1Arc.fillStyle = "black";
    oil1Arc.fill();

    
    console.log('oil function running')
    if (oil1Temp > 107){
        console.log('oil function running')
        oil1Arc.beginPath()
        oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "red";
        oil1Arc.fillText(oil1Temp, radiusSmall * -1.1, radiusSmall * -0.8);

        oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
        oil1Arc.textAlign = "center"
        oil1Arc.fillStyle = "#3399ff";
        oil1Arc.fillText('°C', radiusSmall * -1.1, radiusSmall * -1.2);

        

        oil1Needle.beginPath()
        oil1Needle.lineCap = "round";
        oil1Needle.lineWidth = radiusSmall / 17
        //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
        
        oil1Needle.rotate(oil1TRad)
        
        oil1Needle.moveTo(0,0)
        oil1Needle.strokeStyle = "red"
        //this is the initial position of the line at 0 trq
        oil1Needle.lineTo(-(radiusSmall * 0.57),(radiusSmall * 0.48))
        oil1Needle.rotate(-oil1TRad)
        
        oil1Needle.stroke();
    }
}
///oilpresure

function oil1PressDN(oil1Press){
    console.log('oil PRESS function running')
    let oil1PRad;

    oil1Arc.beginPath()
    oil1Arc.rect((radiusOil * 0.50),(-radiusOil * 0.7),(radiusOil * 0.4),(radiusOil * 0.25))
    oil1Arc.fillStyle = "white";
    oil1Arc.fill();

    oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
    oil1Arc.textAlign = "center"
    oil1Arc.fillStyle = "red";
    oil1Arc.fillText(oil1Press, radiusSmall * 1.1, radiusSmall * -0.8);
    
    oil1Arc.font = (radiusSmall * 0.35) + "px Arial";
    oil1Arc.textAlign = "center"
    oil1Arc.fillStyle = "#3399ff";
    oil1Arc.fillText('PSI', radiusSmall * 1.1, radiusSmall * -1.2);

    if (oil1Press < 44){
            //clearning the background of the PSI Value
            
            oneOilPsiInRad = 0.6021377 / 44
            oil1PRad = (oil1Press * oneOilPsiInRad)
            
            console.log('less than 44 psi ' + (-oil1PRad))
            oil1Needle.beginPath()
            oil1Needle.lineCap = "round";
            oil1Needle.lineWidth = radiusSmall / 17
            //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
            console.log(-oil1PRad)

            oil1Needle.rotate(-oil1PRad)
            
            oil1Needle.moveTo(0,0)
            oil1Needle.strokeStyle = "red"
            //this is the initial position of the line at 0 trq
            oil1Needle.lineTo((radiusSmall * 0.20),(radiusSmall * 0.72))
            oil1Needle.rotate(oil1PRad)
            
            oil1Needle.stroke();
    } else if (oil1Press >= 44 && oil1Press < 61){

            //total movement is 1.309 to 61 psi
            // from 44 to 61 is 0.698132 radians and 17 psi

            oneOilPsiInRad = 0.698132 / 17
            oil1PRad = ((oil1Press - 44) * oneOilPsiInRad) + 0.6021377 // plus old movement of 30 degrees


            oil1Needle.beginPath()
            oil1Needle.lineCap = "round";
            oil1Needle.lineWidth = radiusSmall / 17
            //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
       
            
            console.log('over 44 psi ' + (-oil1PRad))

            oil1Needle.rotate(-oil1PRad)
            
            oil1Needle.moveTo(0,0)
            oil1Needle.strokeStyle = "white"
            //this is the initial position of the line at 0 trq
            oil1Needle.lineTo((radiusSmall * 0.20),(radiusSmall * 0.72))

            oil1Needle.rotate(oil1PRad)
            
            oil1Needle.stroke();
    } else if (oil1Press >= 61 && oil1Press < 72) {
              //total movement is 1.916268523529412 to 72 psi
            // from 61 to 72 is 0.610865 radians and 11 psi

            oneOilPsiInRad = 0.610865 / 11
            oil1PRad = ((oil1Press - 61) * oneOilPsiInRad) + 1.309 // plus old movement of 75 degrees


            oil1Needle.beginPath()
            oil1Needle.lineCap = "round";
            oil1Needle.lineWidth = radiusSmall / 17
            //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
       
            
            console.log('over 44 psi ' + (-oil1PRad))

            oil1Needle.rotate(-oil1PRad)
            
            oil1Needle.moveTo(0,0)
            oil1Needle.strokeStyle = "white"
            //this is the initial position of the line at 0 trq
            oil1Needle.lineTo((radiusSmall * 0.20),(radiusSmall * 0.72))

            oil1Needle.rotate(oil1PRad)
            
            oil1Needle.stroke();
    } else if (oil1Press >= 72) {
            //total movement is 2.5862631818181816 to 100 psi
          // from 72 to 100 is 0.698132 radians and 28 psi

          oneOilPsiInRad = 0.698132 / 28
          oil1PRad = ((oil1Press - 72) * oneOilPsiInRad) + 1.91986 // plus old movement of 75 degrees


          oil1Needle.beginPath()
          oil1Needle.lineCap = "round";
          oil1Needle.lineWidth = radiusSmall / 17
          //radius value is was built on a 400 x 400 canvas so the values with radius in it are based on that
     
          
          console.log('over 44 psi ' + (-oil1PRad))

          oil1Needle.rotate(-oil1PRad)
          
          oil1Needle.moveTo(0,0)
          oil1Needle.strokeStyle = "white"
          //this is the initial position of the line at 0 trq
          oil1Needle.lineTo((radiusSmall * 0.20),(radiusSmall * 0.72))

          oil1Needle.rotate(oil1PRad)
          
          oil1Needle.stroke();
    }
}



//-----everything runs after this
function randomizeTimer(){
    if (engineParameters.randomAnimation === false){
        intervalId = setInterval(randomAll, 500)
        engineParameters.randomAnimation = true;
    } else if (engineParameters.randomAnimation === true) {
        clearInterval(intervalId)
        engineParameters.randomAnimation = false;
    }
}

function halfAboveMax(){
    engineParameters.trq1 = 110
    
    engineParameters.trq2 = 55
    
    engineParameters.nh1 = 105
    
    engineParameters.nh2 = 64.2
    
    engineParameters.np1 = 1077
    
    engineParameters.np2 = 660
    
    engineParameters.ff1 = 4000
    
    engineParameters.ff2 = 2000
    
    engineParameters.itt1 = 1000
    
    engineParameters.itt2 = 250
    
    engineParameters.nl1 = 110
    
    engineParameters.nl2 = 55

    
}

function randomAll(){
    let randomNum = Math.floor(Math.random() * 125)
    engineParameters.trq1 = randomNum
    randomNum = Math.floor(Math.random() * 125)
    engineParameters.trq2 = randomNum
    randomNum = Math.floor(Math.random() * 105)
    engineParameters.nh1 = randomNum
    randomNum = Math.floor(Math.random() * 105)
    engineParameters.nh2 = randomNum
    randomNum = Math.floor(Math.random() * 1100)
    engineParameters.np1 = randomNum
    randomNum = Math.floor(Math.random() * 1100)
    engineParameters.np2 = randomNum
    randomNum = Math.floor(Math.random() * 4000)
    engineParameters.ff1 = randomNum
    randomNum = Math.floor(Math.random() * 4000)
    engineParameters.ff2 = randomNum
    randomNum = Math.floor(Math.random() * 1000)
    engineParameters.itt1 = randomNum
    randomNum = Math.floor(Math.random() * 1000)
    engineParameters.itt2 = randomNum
    randomNum = Math.floor(Math.random() * 110)
    engineParameters.nl1 = randomNum
    randomNum = Math.floor(Math.random() * 110)
    engineParameters.nl2 = randomNum

    oil1DN(randomNum,randomNum)

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




engineParameters.ntop = true;



engineParameters.trq1 = 108;
engineParameters.trq2 = 106;




engineParameters.np1 = 1077;
engineParameters.np2 = 1071;

engineParameters.ff1 = 950;
engineParameters.ff2 = 950;

engineParameters.nl1 = 77;
engineParameters.nl2 = 97.8;

engineParameters.oil1Temp = 111;
engineParameters.oil1Press = 67;



//let trqInt = setInterval(incrTrq90, 1000)