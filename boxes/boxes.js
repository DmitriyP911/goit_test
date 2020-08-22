'use strict'

const controls = document.getElementById( `controls` );
const input = controls.firstElementChild;
const renderButton = document.querySelector( `button[data-action="render"]` );
const destroyButton = document.querySelector( `button[data-action="destroy"]` );
const boxes = document.getElementById( `boxes` );
let boxValues;

input.addEventListener( `input`, event => {
    boxValues = event.currentTarget.value;
} );

renderButton.addEventListener( `click`, () => {
    buildNewBoxes( boxValues );
} );

destroyButton.addEventListener( "click", () => {
    boxes.innerHTML = ``;
    input.value = ``;
} );

function buildNewBoxes ( value ) {
    if( boxValues > 0 && boxValues <= 100 ) {
        const arr = [];
        let boxSize = 30;
        for( let i = 1; i <= value; i += 1 ) {
            const div = document.createElement( `div` );
            div.style.width = boxSize + `px`;
            div.style.height = boxSize + `px`;
            div.style.backgroundColor = `rgb(${Math.floor( Math.random() * 255 )}, ${Math.floor( Math.random() * 255 )}, ${Math.floor( Math.random() * 255 )})`;
            arr.push( div );
            boxSize += 10;
        }
        boxes.append( ...arr );
    } else {
        alert( `Box value must be for 1 to 100` );
    }
};