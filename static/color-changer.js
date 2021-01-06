"use strict" 

// 1. get picture uploaded and displayed back to the user
$('#btn').submit(() => {
    const formVal = $("#picture").serialize();
    console.log(formVal);
    // let pic = $('#picture').open();
    // newPic = grey(pic);
    // document.querySelector('#new-pic') = newPic;
});


// function grey(pic){
//     const canvas = document.createElement('canvas'); //creates html tag canvas which is required to draw graphics
//     const canvasContext = canvas.getContext('2d'); //allows for drawing on the canvas
//     //part of the canvas api and gives 2D rendering context to draw on a canvas element
    
//     canvas.width = pic.width; //assign width of canvas element to be the same width as the picture
//     canvas.height = pic.height;

//     canvasContext.drawImage(pic, 0, 0); //drawImage provides different ways to draw image on canvas
//     //dx = 0 and dy = 0 specifies position (0,0) = (x,y) where the top left point of the picture should
//     //be on the canvas. Here we have them line up.
//     const imgPixels = canvasContext.getImageData(0, 0, pic.width, pic.height); //provides pixel data
//     //for a portion of the canvas from the top left corner (0,0). With a width of pic.width and height of pic.height
//     for(let y = 0; y < imgPixels.height; y++){ //iterate through y values after changing all the x values pixels for that y. starts filling from bottom left
//         for(let x = 0; x < imgPixels.width; x++){
//             var i = (y * 4) * imgPixels.width + x * 4; //formula to find the 1D location; i represents each dot location?
//             //usually pixelLocation = y * imgPixel.width + x
//             var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
//             imgPixels.data[i] = avg; 
//             imgPixels.data[i + 1] = avg; 
//             imgPixels.data[i + 2] = avg;
            
//         }
//     }
//     return canvasContext.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);
    
// }
