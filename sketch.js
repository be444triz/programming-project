function setup() {
  //set dimension of canvas to 400x400
  createCanvas(400, 400);
  //set bg to pink
  background('#ffc0cb')
}
//make a pink circle
function draw() {
  noStroke()
fill('#e75480')
  circle(150, 50, 50)
  
  //make a red circle
    fill('#ff0000')
  circle(90, 110, 59)  
  
  //make a white circle
   fill('#FFFFFF')
  circle(160, 60, 60) 

  //text
  fill ('#ce897b')
  textSize(18)
  textFont ('Arial')
  text('Beatriz programming assignment',70, 320)
       
}
  