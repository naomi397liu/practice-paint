"use strict" 
// Use js vanilla this time
// confirm link between 
console.log("hi");
document.querySelector('#btn').submit(() =>{
    let pic = document.querySelector('#picture').open();
    grey(pic);
})


function grey(pic){
    const canvas = document.createElement('canvas'); //creates html tag canvas which is required to draw graphics
    const canvasContext = canvas.getContext('2d'); //allows for drawing on the canvas
    //part of the canvas api and gives 2D rendering context to draw on a canvas element
    
    canvas.width = pic.width; //assign width of canvas element to be the same width as the picture
    canvas.height = pic.height;

    canvasContext.drawImage(pic, 0, 0); //drawImage provides different ways to draw image on canvas
    //dx = 0 and dy = 0 specifies position (0,0) = (x,y) where the top left point of the picture should
    //be on the canvas. Here we have them line up.

}