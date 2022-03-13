var ball;

function setup() {
  createCanvas(400,400);

  ball = createSprite(200,200,20,20)
}

function draw() 
{
  background("black");
if (keyDown ("right")) {
  ball.x = ball.x +4;
}

if (keyDown ("left")) {
  ball.x = ball.x -4;
}

  if (keyDown ("down")) {
    ball.y = ball.y +4;
  }

  if (keyDown ("up")) {
    ball.y = ball.y -4;
  }
  drawSprites();
}




