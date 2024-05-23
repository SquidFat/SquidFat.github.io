const letterButtons = [];
let words, x, w;
let lineClick = 0;
let tempString = "";
let xCord = 150;
let yCord = 200;
let count = -1;
let showButton;
let Key;
let uppercaseKey;
let tempLetter;
let lineNumber = 1;
let temp;

//Loads the text file.
function preload() {
  words = loadStrings("words.txt");
} //preload

//Resets the game
function playAgain() {
  x = round(random(words.length));
  w = words[x];
  lineNumber = 1;
  lineClick = 0;
  tempString = "";
  xCord = 150;
  yCord = 200;
  count = -1;

  stroke(20, 20, 20);
  fill(20, 20, 20);
  rect(0, 0, 500, 500);

  for (let i = 1; i <= 6; i++) {
    squares(i);
  } // for
  for (let i = 0; i < 26; i++) {
    letterButtons[i].buttonName.style("background-color: #414149");
  } // for
  stroke("white");
  fill("white");
  textSize(30);
  text("Wordle", 200, 130);
  textSize(20);
  playagainButton.hide();
}

//Deletes the last letter inputted
function Backspace() {
  if (count >= 0) {
    stroke(170, 170, 170);
    fill(20, 20, 20);
    rect(xCord - 9, yCord - 23, 30, 30);
    count -= 1;
    xCord -= 30;
    lineClick -= 1;
    tempLetter = tempString.charAt(count + 1);
    tempString = tempString.replace(tempLetter, "");
  } // if
} // Backspace

//This function allows for keyboard inputs
function keyPressed() {
  //backspace key
  if (keyCode == 8) {
    Backspace();
  } // if

  // enterKey
  if (keyCode == 13) {
    enterWord();
  } // if

  // letter imputs using keyboard
  if (keyCode >= 65 && keyCode <= 90) {
    Key = `${key}`;
    uppercaseKey = Key.toUpperCase();
    stroke("white");
    fill("white");
    if (lineNumber != 7 && count < 4) {
      xCord += 30;
      count += 1;
      lineClick++;
      tempString += uppercaseKey;
      text(uppercaseKey, xCord, yCord);
    } // ifline
  } // ifkeyCode
} //keyPressed

//Creates the squares for the letters to be placed in.
function squares(n) {
  stroke(170, 170, 170);
  fill(20, 20, 20);
  for (i = 0; i < 5; i++) {
    rect(171 + 30 * i, 177 + 35 * (n - 1), 30, 30);
  } //for
} //squares

//Changes the colour of the letters accordingly
function colourAdjust() {
  for (let i = 0; i < 5; i++) {
    let letter = tempString.charAt(i);
    temp = unchar(letter) - 65;

    if (letter == w.charAt(i)) {
      letterButtons[temp].buttonName.style("background-color:lime");
      stroke("lime");
      fill("lime");
    } else if (w.includes(letter)) {
      letterButtons[temp].buttonName.style("background-color:orange");
      stroke("orange");
      fill("orange");
    } else {
      letterButtons[temp].buttonName.style("background-color:black");
      stroke("white");
      fill("white");
    } //else

    text(letter, xCord - 120 + i * 30, yCord);
  } //for
} //colour adjust

//Main function
function enterWord() {
  if (count == 4) {
    if (words.indexOf(tempString) == -1) {
      lineClick -= 5;
      squares(floor(lineClick / 5) + 1);
      xCord = 150;
    } //ifword
    else if (tempString == w) {
      squares(floor((lineClick - 5) / 5) + 1);
      colourAdjust();
      stroke("white");
      fill("white");
      text("You Guessed The Correct Word:", 100, 40);
      showWord();
      playagainButton.show();
      lineNumber = 8;
    } else {
      squares(floor((lineClick - 5) / 5) + 1);
      colourAdjust();
      xCord = 150;
      yCord += 35;
      lineNumber += 1;
    } //else
    if (lineNumber == 7) {
      playagainButton.show();
      showWord();
      text("You Did Not Guess The Word", 120, 40);
    }
    count = -1;
    tempString = "";
  } //if
} //enterWord

//Shows the randomly picked word at the top of the screen.
function showWord() {
  stroke("white");
  fill("white");
  text(w, 210, 70);
} //showWord

//Runs the functions that create the initial visuals and selects a random word.
function setup() {
  createCanvas(500, 500);
  background(20, 20, 20);
  stroke("white");
  fill("white");
  textSize(30);
  text("Wordle", 200, 130);

  for (let i = 1; i <= 6; i++) {
    squares(i);
  } //for
  textSize(20);
  OutputButtons();

  showButton = createButton("Show Word");
  showButton.position(50, 50);
  showButton.mousePressed(showWord);
  showButton.style("color:white");
  showButton.style("background-color: #414149");

  enterButton = createButton("Enter");
  enterButton.position(125, 440);
  enterButton.mousePressed(enterWord);
  enterButton.style("color:white");
  enterButton.style("background-color: #414149");

  backspaceButton = createButton("⌦");
  backspaceButton.position(330, 440);
  backspaceButton.mousePressed(Backspace);
  backspaceButton.style("color:white");
  backspaceButton.style("background-color: #414149");

  playagainButton = createButton("Play Again");
  playagainButton.position(370, 400);
  playagainButton.mousePressed(playAgain);
  playagainButton.style("color:black");
  playagainButton.style("background-color:#DC143C");
  playagainButton.hide();

  x = round(random(words.length));
  fill("black");
  w = words[x];
} //setup

//Creates all the objects required and handles what happens when letters are outputted.
class ButtonClass {
  constructor(buttonName, text1, num) {
    console.log(buttonName + " created");
    this.buttonName = createButton(text1);
    this.buttonName.mousePressed(buttonCommand);
    this.num = num;
    function buttonCommand() {
      stroke("white");
      fill("white");
      if (lineNumber <= 7 && count < 4) {
        xCord += 30;
        count += 1;
        lineClick++;
        tempString += text1;
        text(text1, xCord, yCord);
      } //ifline
    } //buttonCommand
  } //constructor
} //class Lbtn

//Outputs the buttons that can be clicked to output letters in the boxes.
function OutputButtons() {
  let count = 0;
  let i = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80];
  for (let m = 0; m < i.length; m++) {
    letterButtons[i[m] - 65] = new ButtonClass("button", char(i[m]), 0);
    letterButtons[i[m] - 65].buttonName.style("color:white");
    letterButtons[i[m] - 65].buttonName.style("background-color: #414149");
    letterButtons[i[m] - 65].buttonName.position(135 + 22.2 * m, 400);
  } // for let m
  let j = [65, 83, 68, 70, 71, 72, 74, 75, 76];
  for (let m = 0; m < j.length; m++) {
    letterButtons[j[m] - 65] = new ButtonClass("button", char(j[m]), 0);
    letterButtons[j[m] - 65].buttonName.style("color:white");
    letterButtons[j[m] - 65].buttonName.style("background-color: #414149");
    letterButtons[j[m] - 65].buttonName.position(142 + 22.2 * m, 420);
  } // for let m
  let k = [90, 88, 67, 86, 66, 78, 77];
  for (let m = 0; m < k.length; m++) {
    letterButtons[k[m] - 65] = new ButtonClass("button", char(k[m]), 0);
    letterButtons[k[m] - 65].buttonName.style("color:white");
    letterButtons[k[m] - 65].buttonName.style("background-color: #414149");
    letterButtons[k[m] - 65].buttonName.position(170 + 22.2 * m, 440);
  }
} //outputbuttons
