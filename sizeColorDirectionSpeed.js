function setup() {
  createCanvas(400, 400);
}
var ballX = 30;
var ballX2 = 300;
var ballSpeed = 3;
var ballSpeed2 = 5;
var ballColor =0;
var ballColorSp =0;
var ballY = 20;
var ballYSpeed = 10;
var ballXSize = 20;
var ballXSizeC = 1

function draw() {

  background(220);


  fill(255, 0, 0);
  ellipse(ballX, 100, ballXSize);
  fill(255, 255, ballColor);
  ellipse(ballX2, 200, 70);
  fill(0, 0, 255);
  ellipse(250, ballY, 50);

  ballX = ballX + ballSpeed;

  ballX2 = ballX2 + ballSpeed2;
  ballY = ballY + ballYSpeed;
  ballXSize = ballXSize + ballXSizeC;
  ballColor = ballColor + ballColorSp;

  if (ballXSize >= 100) {
    ballXSizeC = -1;
  }

  if (ballXSize <= 20) {
    ballXSizeC = 1;
  }


  if (ballX >= 400) {
    ballSpeed = -3;
  }

  if (ballX <= 0) {
    ballSpeed = 3;
  }


  if (ballX2 >= 400) {
    ballSpeed2 = -5;
  }

  if (ballX2 <= 0) {
    ballSpeed2 = 5;
  }


  if (ballY >= 400) {
    ballYSpeed = -10;
  }

  if (ballY <= 0) {
    ballYSpeed = 10;
  }

  if (ballColor >= 255) {
    ballColorSp = -10;
  }

  if (ballColor <= 0) {
    ballColorSp = 10;
  }



}
