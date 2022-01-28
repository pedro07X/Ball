var box;

function setup() {
  createCanvas(800,400);
  box = createSprite(200,200,50,50);
  box.shapeColor = "purple";

  

}

function draw() {
  background("black"); 
  
if(keyIsDown(RIGHT_ARROW)){
  box.position.x = box.position.x +5
background ("red")
}

if(keyIsDown(LEFT_ARROW)){
  box.position.x = box.position.x -5
background ("yellow")
}
if(keyIsDown(UP_ARROW)){
  box.position.y = box.position.y -5
background ("green")
}
if(keyIsDown(DOWN_ARROW)){
  box.position.y = box.position.y +5
background ("blue")
}
  drawSprites();
}