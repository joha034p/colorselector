"use strict";
document.querySelector("#pickColor").addEventListener("mousedown", colorValue);

function colorValue(){
    let colorValue = document.querySelector("#pickColor").value;
    console.log(`Color value: `,colorValue);
}