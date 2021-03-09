var fixedRect,movingRect;

function setup()
 {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  sleepingRect= createSprite(100, 100, 80, 30);
  fixedRect.shapeColor="red"
  movingRect.shapeColor="purple"
  sleepingRect.shapeColor="yellow"
 }

function draw() 
{
  background ("pink");  

  movingRect.x=World.mouseX;
 movingRect.y=World.mouseY;

  if(collide(movingRect,sleepingRect))
  {
   text("YOU WIN",50,50)
   sleepingRect.shapeColor="blue"
  }
 
  drawSprites();
}



