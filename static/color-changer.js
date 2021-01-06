"use strict" 
// Use js vanilla this time
// confirm link between 
console.log("hi");
//submit not a function -  go back and look at fat arrow function used once
document.querySelector('#btn').submit(() =>{
    let pic = document.querySelector('#picture').open();
    newPic = grey(pic);
    document.querySelector('#new-pic') = newPic;
})
document.querySelector('#btn').submit

function grey(pic){
    const canvas = document.createElement('canvas'); //creates html tag canvas which is required to draw graphics
    const canvasContext = canvas.getContext('2d'); //allows for drawing on the canvas
    //part of the canvas api and gives 2D rendering context to draw on a canvas element
    
    canvas.width = pic.width; //assign width of canvas element to be the same width as the picture
    canvas.height = pic.height;

    canvasContext.drawImage(pic, 0, 0); //drawImage provides different ways to draw image on canvas
    //dx = 0 and dy = 0 specifies position (0,0) = (x,y) where the top left point of the picture should
    //be on the canvas. Here we have them line up.
    const imgPixels = canvasContext.getImageData(0, 0, pic.width, pic.height); //provides pixel data
    //for a portion of the canvas from the top left corner (0,0). With a width of pic.width and height of pic.height
    for(let y = 0; y < imgPixels.height; y++){ //iterate through y values after changing all the x values pixels for that y. starts filling from bottom left
        for(let x = 0; x < imgPixels.width; x++){

            
        }
    }
    return canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    
}
