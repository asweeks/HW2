function setup() {
  createCanvas(400, 400); // cordinates start at top left, x width, y height
  strokeCap(SQUARE);

}

function draw() {
  background(240);
  noStroke();

  //Red square
  fill(255, 0, 0);
  rect(220, 0, 400, 400);

  //Blue square
  fill(0, 0, 255);
  rect(0, 320, 80, 80);

  //Yellow square
  fill(255, 255, 0);
  rect(0, 0, 80, 20);

  fill(255, 255, 0);
  rect(200, 320, 20, 80);

  stroke(0);
  strokeWeight(12);

  line(80, 0, 80, 400); //Left line
  line(220, 0, 220, 400);
  
  strokeWeight(22);
  line(0, 320, 220, 320); //Bottom line

  strokeWeight(10);
  line(200, 400, 200, 320); //yellow vertical line

  strokeWeight(10);
  line(0, 40, 220, 40); //yellow horizontal line

  strokeWeight(15);
  line(0, 20, 80, 20); //grey divider




}
