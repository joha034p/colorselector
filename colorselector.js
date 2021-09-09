"use strict";
document.addEventListener("DOMContentLoaded", start);

function start(){
    console.log("start");
    document.querySelector("#pickColor").addEventListener("input", getValue);
}

// Get value of the input - call functions which return manipulated data
function getValue(){
    const colorValue = document.querySelector("#pickColor").value;
    const callHexValue = hexValue(colorValue);
    const callHexToRGB = hexToRGB(colorValue);
    const callRGBtoHSL = RGBtoHSL(colorValue);
    console.log(callHexValue);
    console.log(callHexToRGB);
    console.log(callRGBtoHSL);

    const hex = colorValue;
    document.getElementById("displayColor").style.backgroundColor = hex;
    document.getElementById("hex").innerHTML = "HEX: " + hex;
    
}

// Display the input value as HEX
function hexValue(colorValue){
    console.log("hexValue");
    const hex = colorValue.toString(16);
    return {hex};
}

// Convert the input value from HEX to RGB
function hexToRGB(colorValue){
    console.log("hexToRGB");
    const r = parseInt(colorValue.substring(1,3), 16);
    const g = parseInt(colorValue.substring(3,5), 16);
    const b = parseInt(colorValue.substring(5,7), 16);
    document.getElementById("rgb").innerHTML = `RGB: ${r}, ${g}, ${b}`;
    return {r,g,b};
}

// Convert the input value from RGB to HSL
function RGBtoHSL(colorValue){
    console.log("RGBtoHSL");
    let r = parseInt(colorValue.substring(1,3), 16);
    let g = parseInt(colorValue.substring(3,5), 16);
    let b = parseInt(colorValue.substring(5,7), 16);
   r /= 255;
   g /= 255;
   b /= 255;
 
   let h, s, l;
 
   const min = Math.min(r,g,b);
   const max = Math.max(r,g,b);
  
   if( max === min ) {
     h = 0;
   } else
   if (max === r) {
     h = 60 * (0 + (g - b) / (max - min) );
   } else
   if (max === g) {
     h = 60 * (2 + (b - r) / (max - min) );
   } else
   if (max === b) {
     h = 60 * (4 + (r - g) / (max - min) );
   }
  
   if (h < 0) {h = h + 360; }
  
   l = (min + max) / 2;
  
   if (max === 0 || min === 1 ) {
     s = 0;
   } else {
     s = (max - l) / ( Math.min(l,1-l));
   }
   // multiply s and l by 100 to get the value in percent, rather than [0,1]
   s *= 100;
   l *= 100;

   h = Math.round(h) + "%";
   s = Math.round(s) + "%";
   l = Math.round(l) + "%";
 
   document.getElementById("hsl").innerHTML = `HSL: ${h}, ${s}, ${l}`;
   return {h,s,l};
//    console.log("hsl(%f,%f%,%f%)", h, s, l);
}

