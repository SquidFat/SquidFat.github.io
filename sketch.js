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
let lineNumber = 1;

//Loads the text file.
function preload() {
  words = loadStrings("words.txt");
} //preload

//This function allows for keys on the users keyboard to type words as well. (It could be simpler but this works just fine)
function keyPressed() {
  if (keyCode >= 65 && keyCode <= 90) {
    Key = `${key}`;
    uppercaseKey = Key.toUpperCase();
    stroke("black");
    fill("black");
    tempString += uppercaseKey;
    xCord += 30;
    count += 1;
    lineClick++;
    if (lineNumber != 7) {
      text(uppercaseKey, xCord, yCord);
      if (count == 4) {
        xCord = 150;
        yCord += 35;
        count = -1;

        if (words.indexOf(tempString) == -1) {
          lineClick -= 5;
          squares(floor(lineClick / 5) + 1);
          yCord -= 35;
        } //ifword
        else if (tempString == w) {
          squares(floor((lineClick - 5) / 5) + 1);
          colourAdjust(tempString);
          stroke("orange");
          fill("orange");
          text("You Guessed The Correct Word:", 100, 40);
          showWord();
          lineNumber = 7;
        } else {
          squares(floor((lineClick - 5) / 5) + 1);
          colourAdjust(tempString);
          lineNumber += 1;
        } //else

        tempString = "";
      } // ifrow
    } // ifline
  } // ifkeyCode
} //keyPressed

//Creates the squares for the letters to be placed in.
function squares(n) {
  stroke("black");
  fill("lightgrey");
  for (i = 0; i < 5; i++) {
    rect(171 + 30 * i, 177 + 35 * (n - 1), 30, 30);
  } //for
} //squares

//Changes the colour of the letters depending on their positioning and if they are in the random word. Only changes the colour once the word is complete and if it is a real word.
function colourAdjust(string) {
  for (let i = 0; i < 5; i++) {
    let letter = string.charAt(i);

    if (letter == w.charAt(i)) {
      stroke("green");
      fill("green");
    } else if (w.includes(letter)) {
      stroke("orange");
      fill("orange");
    } else {
      stroke("black");
      fill("black");
    } //else

    text(letter, xCord + 30 + i * 30, yCord - 35);
  } //for
} //colour

//Shows the randomly picked word at the top of the screen.
function showWord() {
  stroke("black");
  fill("black");
  text(w, 210, 70);
} //showWord

//Runs the functions that create the initial visuals and selects a random word.
function setup() {
  createCanvas(500, 500);
  background("beige");
  for (let i = 1; i <= 6; i++) {
    squares(i);
  } //for
  textSize(20);
  OutputButtons();

  showButton = createButton("Show Word");
  showButton.position(50, 50);
  showButton.mousePressed(showWord);

  x = round(random(words.length));
  console.log(x + 1);
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
      stroke("black");
      fill("black");
      tempString += text1;
      xCord += 30;
      count += 1;
      lineClick++;
      if (lineNumber != 7) {
        text(text1, xCord, yCord);
        if (count == 4) {
          xCord = 150;
          yCord += 35;
          count = -1;

          if (words.indexOf(tempString) == -1) {
            lineClick -= 5;
            squares(floor(lineClick / 5) + 1);
            yCord -= 35;
          } //ifword
          else if (tempString == w) {
            squares(floor((lineClick - 5) / 5) + 1);
            colourAdjust(tempString);
            stroke("orange");
            fill("orange");
            text("You Guessed The Correct Word:", 210, 50);
            showWord();
            lineNumber = 7;
          } else {
            squares(floor((lineClick - 5) / 5) + 1);
            colourAdjust(tempString);
            lineNumber += 1;
          } //else

          tempString = "";
        } //ifrow
      } //ifline
    } //buttonCommand
  } //constructor
} //class Lbtn

//Outputs the buttons that can be clicked to output letters in the boxes.
function OutputButtons() {
  let count = 0;
  for (i = 0; i < 26; i++) {
    letter = char(i + 65);
    letterButtons[i] = new ButtonClass("button", letter, 0);
    if (i < 13) {
      letterButtons[i].buttonName.position(100 + 22 * i, 100);
    } else {
      letterButtons[i].buttonName.position(100 + 22.2 * (i - 13), 120);
    } //else
  } //for i
} //outputbuttons
