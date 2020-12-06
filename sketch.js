var move




function setup() {
  createCanvas(800,400);
 move = createSprite(50, 200, 30, 30);
 move.shapeColor = "white"
}

function draw() {
  background("black"); 
  move.velocityX = 7
  drawSprites(); 
}