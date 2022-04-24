var ball;
function setup() {
  createCanvas(400,400);
  ball=createSprite(200,200,50,50);
  
}

function draw()

{
  background(30);
drawSprites();
if (keyIsDown(RIGHT_ARROW)){
// NO ; IN FOR OR IF FUNCTION DEFENTION
ball.x=ball.x+3
}
if (keyIsDown(LEFT_ARROW)){
  // NO ; IN FOR OR IF FUNCTION DEFENTION
  ball.x=ball.x-3
  }
  if (keyIsDown(DOWN_ARROW)){
    // NO ; IN FOR OR IF FUNCTION DEFENTION
    ball.y=ball.y+3
    }
    if (keyIsDown(UP_ARROW)){
      // NO ; IN FOR OR IF FUNCTION DEFENTION
      ball.y=ball.y-3
      }
}




