"use strict";
document.addEventListener("DOMContentLoaded", start);

function start(){
    console.log("start");
    document.querySelector("#pickColor").addEventListener("mousedown", getValue);
}

function getValue(){
    const hexValue = document.querySelector("#pickColor").value;
    // const rgbValue = document.querySelector("#pickColor").value;
    // const hslValue = document.querySelector("#pickColor").value;
    const callHexToRGB = hexToRGB(hexValue);
    // const callRGBtoHSL = hexToRGB(rgbValue);
    console.log(callHexToRGB);
    // console.log(callRGBtoHSL);
}

function hexToRGB(hexValue){
    console.log("hexToRGB");
    const r = parseInt(hexValue.substring(1,3), 16);
    const g = parseInt(hexValue.substring(3,5), 16);
    const b = parseInt(hexValue.substring(5,7), 16);

    return {r,g,b};
}

// function RGBtoHSL(rgbValue){
//     console.log("RGBtoHSL");
//     r /= 255;
//    g /= 255;
//    b /= 255;
 
//    let h, s, l;
 
//    const min = Math.min(r,g,b);
//    const max = Math.max(r,g,b);
  
//    if( max === min ) {
//      h = 0;
//    } else
//    if (max === r) {
//      h = 60 * (0 + (g - b) / (max - min) );
//    } else
//    if (max === g) {
//      h = 60 * (2 + (b - r) / (max - min) );
//    } else
//    if (max === b) {
//      h = 60 * (4 + (r - g) / (max - min) );
//    }
  
//    if (h < 0) {h = h + 360; }
  
//    l = (min + max) / 2;
  
//    if (max === 0 || min === 1 ) {
//      s = 0;
//    } else {
//      s = (max - l) / ( Math.min(l,1-l));
//    }
//    // multiply s and l by 100 to get the value in percent, rather than [0,1]
//    s *= 100;
//    l *= 100;
 
//    console.log("hsl(%f,%f%,%f%)", h, s, l);
// }