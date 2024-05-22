let cX = [];
let cY = [];
//length
let len = 1;
//size of each section
let diameter = 10;

let xDirectionArray = [1, 0, -1, 0];
let yDirectionArray = [0, 1, 0, -1];
let directionIndex = 0;

let foodX;
let foodY;

let music;
let crunch;

function preload() {
  music = loadSound("Music.mp3");
  crunch = loadSound("Crunch.mp3");
}

function setup() {
  noLoop();
  frameRate(10);
  cX[0] = 35;
  cY[0] = 15;
  cX[1] = 25;
  cY[1] = 15;
  cX[2] = 15;
  cY[2] = 15;
  createCanvas(700, 400);
  plotFood();
  
  //start button
  button = createButton("start!");
  button.mouseClicked(strt);
  button.size(100, 50);
  button.position(420, 20);
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "28px");

  //up button
  button = createButton("U");
  button.mouseClicked(upButton);
  button.size(80, 50);
  button.position(500, 120);
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "28px");

  //down button
  button = createButton("D");
  button.mouseClicked(downButton);
  button.size(80, 50);
  button.position(500, 300);
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "28px");

  //left button
  button = createButton("L");
  button.mouseClicked(leftButton);
  button.size(80, 50);
  button.position(420, 210);
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "28px");

  //right button
  button = createButton("R");
  button.mouseClicked(rightButton);
  button.size(80, 50);
  button.position(580, 210);
  button.style("font-family", "Comic Sans MS");
  button.style("font-size", "28px");
}

function strt() {
  loop();
  music.play();
}

function rightButton() {
  if (directionIndex != 2) {
    directionIndex = 0;
  }
}

function leftButton() {
  if (directionIndex != 0) {
    directionIndex = 2;
  }
}

function upButton() {
  if (directionIndex != 1) {
    directionIndex = 3;
  }
}

function downButton() {
  if (directionIndex != 3) {
    directionIndex = 1;
  }
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW && directionIndex != 2) {
    directionIndex = 0;
  } //if
  if (keyCode === DOWN_ARROW && directionIndex != 3) {
    directionIndex = 1;
  } //if
  if (keyCode === LEFT_ARROW && directionIndex != 0) {
    directionIndex = 2;
  } //if
  if (keyCode === UP_ARROW && directionIndex != 1) {
    directionIndex = 3;
  } //if
} //keyPressed

function caterpillar() {
  if (cX[0] == foodX && cY[0] == foodY) {
    plotFood();
    len += 1;
    crunch.play();
  }
  for (let i = len - 1; i > 0; i--) {
    cX[i] = cX[i - 1];
    cY[i] = cY[i - 1];
  }
  cX[0] += xDirectionArray[directionIndex] * 10;
  cY[0] += yDirectionArray[directionIndex] * 10;
  for (let i = 1; i < len; i++) {
    if (cX[0] == cX[i] && cY[0] == cX[i]) {
      dead = true;
    }
  }
  for (let i = 0; i < len; i++) {
    fill("green");
    cX[i] = constrain(cX[i], 5, 400 - 5);
    cY[i] = constrain(cY[i], 5, 400 - 5);
    circle(cX[i], cY[i], diameter);
  }
}

function crossOver() {
  if (cX[0] > 5 && cX[0] < 395 && cY[0] > 5 && cY[0] < 395 && len > 1) {
    for (let i = 1; i < len; i++) {
      if (cX[0] == cX[i] && cY[0] == cY[i]) {
        noLoop();
      }
    }
  }
}

function plotFood() {
  let success = false;
  while (!success) {
    foodX = round(random(5, 399));
    foodX -= foodX % 10;
    foodX += 5;
    foodY = round(random(5, 401));
    foodY -= foodY % 10;
    foodY += 5;
    for (let i = 0; i < len; i++) {
      if (cX[i] == foodX && cY[i] == foodY) {
        success = false;
        break;
      } //if

      //will cause while loop to stop
      if (i == len - 1) {
        success = true;
      } //if
    } //for i
  } //while
} //plotFood

function draw() {
  background("black");
  caterpillar();
  crossOver()
  fill("red");
  circle(foodX, foodY, 10);
  fill("rgb(34,34,34)");
  rect(400, 0, 300, 400);
  fill("white");
  textSize(20);
  text("score = " + len, 420, 100);
}
