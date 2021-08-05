var fixRect , movingRect;



function setup() {
  createCanvas(800,400);
  fixRect=createSprite(200, 200, 50, 50);
  movingRect= createSprite(400,200,80,30);
  fixRect.shapeColor="green";
  movingRect.shapeColor="green";
  fixRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(255,255,255); 
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 console.log(movingRect.x-fixRect.x);

if(movingRect.x-fixRect.x <fixRect.width/2+movingRect.width/2
  &&fixRect.x-movingRect.x<fixRect.width/2+movingRect.width/2
  &&movingRect.y-fixRect.y <fixRect.height/2+movingRect.height/2
  &&fixRect.y-movingRect.y<fixRect.height/2+movingRect.height/2
  ){
  movingRect.shapeColor="red";
  fixRect.shapeColor="red";
}
else{
movingRect.shapeColor="green";
fixRect.shapeColor="green";
}
  drawSprites();
}