"use strict";
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle="black";
ctx.fillRect(0,0,150,75);
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();
