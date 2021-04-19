function setup() {
  createCanvas(800,400);
  
  a = createSprite(400, 200, 50, 80);
  a.shapeColor = "green";
  b = createSprite(400, 200, 80, 50);
  b.shapeColor = "green";
  a.debug = true;
  b.debug = true;
}

function draw() {
  background(255,255,255);  
  b.x = World.mouseX;
  b.y = World.mouseY;

  if (a.x - b.x < a.width/2 + b.width/2 && b.x - a.x < a.width/2 + b.width/2
     && a.y - b.y < a.height/2 + b.height/2 && b.y - a.y < a.height/2 + b.height/2) {
    a.shapeColor = "red";
    b.shapeColor = "red";
  }else{
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  drawSprites();
}