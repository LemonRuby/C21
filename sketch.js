var fixedRect, movingRect;
var car , wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 car = createSprite(100,100,50,10);
 car.shapeColor = "blue";
 car.velocityX = 3;

wall = createSprite(500,50,80,190);
wall.shapeColor = "brown";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

bounceoff(car,wall);

if(isTouching(movingRect,fixedRect)){

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
} 
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}



 
  drawSprites();
}




