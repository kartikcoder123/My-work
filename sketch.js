var path;
var boy;
var track;
var wall1;
var wall2;
function preload() {
  //pre-load images
  pathImg = loadImage("path.png");
  boy = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup() {
  createCanvas(400, 400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale-1.2;
  boy1 = createSprite(230,200,20,10);
  boy1.scale = 0.1
  boy1.addAnimation("boytraveling", boy);
  wall1 = createSprite(100,100)
  wall1.visible = false
  wall2 = createSprite(400,400)
  wall2.visible = false 
}

function draw() {
  background(0);
  boy1.x = World.mouseX;

  if(path.y > 400 ){
    path.y = height/2;
}
   boy1.collide(wall1);
   boy1.collide(wall2);
   drawSprites();
}