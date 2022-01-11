var box;

function setup() {
  createCanvas(800,800);
  box=createSprite(400,400,50,50);
  box.shapeColor=20
}

function draw() 
{
  background(48);
if(keyDown(RIGHT_ARROW)){
box.x=box.x+2  
}

drawSprites();
}




