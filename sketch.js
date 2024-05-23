/*

SPECIFIC MOVE NUMBER 1:
My program will counter all opening corner moves to square 
[0][0], [0][2], [2][0], and [2][2] by placing an ’O’ in square [1][1]
The code for this may be found at line numbers “403-413”

X # #   X # #
# # # → # O #
# # #   # # #

# # X   # # X
# # # → # O #
# # #   # # #

# # #   # # #
# # # → # O #
X # #   X # #

# # #   # # #
# # # → # O #
# # X   # # X

SPECIFIC MOVE NUMBER 2:
My program will counter all opening side moves to square 
[0][1], [1][0], [1][2], [2][1] by placing an ’O’ in square [1][1]
The code for this may be found at line numbers “416-426”

# X #   # X #
# # # → # O #
# # #   # # #

# # #   # # #
X # # → X O #
# # #   # # #

# # #   # # #
# # X → # O X
# # #   # # #

# # #   # # #
# # # → # O #
# X #   # X #

SPECIFIC MOVE NUMBER 3:
My program will counter an opening middle move to square 
[1][1] by placing an ’O’ in square [0][2]
The code for this may be found at line numbers “429-436”

# # #   # # O
# X # → # X #
# # #   # # #

Specific Trap 1:
My program will counter an opening trap to square 
[0][0] and [2][2] by placing an ’O’ in square [1][1] and then [1][2]
The code for this may be found at line numbers “439-443”

X # #   X # #   X # #   X # #
# # # → # O # → # O # → # O O
# # #   # # #   # # X   # # X

Specific Trap 1 (Part 2):
My program will counter an opening trap to square 
[0][2] and [2][0] by placing an ’O’ in square [1][1] and then [1][2]
The code for this may be found at line numbers “445-449”

# # X   # # X   # # X   # # X
# # # → # O # → # O # → # O O
# # #   # # #   X # #   X # #

Specific Trap 2:
My program will counter an opening trap to square 
[1][1] and [2][0] by placing an ’O’ in square [0][2] and then [0][0]
The code for this may be found at line numbers “452-457”

# # #   # # O   # # O   O # O
# X # → # X # → # X # → # X #
# # #   # # #   X # #   X # #

Specific Trap 3:
My program will counter an opening trap to square 
[0][1] and [1][2] by placing an ’O’ in square [1][1] and then [0][2]
The code for this may be found at line numbers “460-464”

# X #   # X #   # X #   # X O
# # # → # O # → # O X → # O X
# # #   # # #   # # #   # # #

Specific Trap 3 (Part 2):
My program will counter an opening trap to square 
[0][1] and [1][0] by placing an ’O’ in square [1][1] and then [0][0]
The code for this may be found at line numbers “466-470”

# X #   # X #   # X #   O X #
# # # → # O # → X O # → X O #
# # #   # # #   # # #   # # #

Specific Trap 3 (Part 3):
My program will counter an opening trap to square 
[1][0] and [2][1] by placing an ’O’ in square [1][1] and then [2][0]
The code for this may be found at line numbers “472-476”

# # #   # # #   # # #   # # #
X # # → X O # → X O # → X O #
# # #   # # #   # X #   O X #

Specific Trap 3 (Part 4):
My program will counter an opening trap to square 
[2][1] and [1][2] by placing an ’O’ in square [1][1] and then [2][2]
The code for this may be found at line numbers “478-482”

# # #   # # #   # # #   # # #
# # # → # O # → # O X → # O X
# X #   # X #   # X #   # X O

Specific Trap 4:
My program will counter an opening trap to square 
[0][0] and [1][2] by placing an ’O’ in square [1][1] and then [0][2]
The code for this may be found at line numbers “485-489”

X # #   X # #   X # #   X # O
# # # → # O # → # O X → # O X
# # #   # # #   # # #   # # #

Specific Trap 4 (Part 2):
My program will counter an opening trap to square 
[0][0] and [2][1] by placing an ’O’ in square [1][1] and then [2][0]
The code for this may be found at line numbers “491-495”

X # #   X # #   X # #   X # #
# # # → # O # → # O # → # O #
# # #   # # #   # X #   O X #

Specific Trap 4 (Part 3):
My program will counter an opening trap to square 
[0][2] and [1][0] by placing an ’O’ in square [1][1] and then [0][0]
The code for this may be found at line numbers “497-501”

# # X   # # X   # # X   O # X
# # # → # O # → X O # → X O #
# # #   # # #   # # #   # # #

Specific Trap 4 (Part 4):
My program will counter an opening trap to square 
[0][2] and [2][1] by placing an ’O’ in square [1][1] and then [2][2]
The code for this may be found at line numbers “503-507”

# # X   # # X   # # X   # # X
# # # → # O # → # O # → # O #
# # #   # # #   # X #   # X O

Specific Trap 4 (Part 5):
My program will counter an opening trap to square 
[2][0] and [0][1] by placing an ’O’ in square [1][1] and then [0][0]
The code for this may be found at line numbers “509-513”

# # #   # # #   # X #   O X #
# # # → # O # → # O # → # O #
X # #   X # #   X # #   X # #

Specific Trap 4 (Part 6):
My program will counter an opening trap to square 
[2][0] and [1][2] by placing an ’O’ in square [1][1] and then [2][2]
The code for this may be found at line numbers “515-519”

# # #   # # #   # # #   # # #
# # # → # O # → # O X → # O X
X # #   X # #   X # #   X # O

Specific Trap 4 (Part 7):
My program will counter an opening trap to square 
[2][2] and [1][0] by placing an ’O’ in square [1][1] and then [2][0]
The code for this may be found at line numbers “521-525”

# # #   # # #   # # #   # # #
# # # → # O # → X O # → X O #
# # X   # # X   # # X   O # X

Specific Trap 4 (Part 8):
My program will counter an opening trap to square 
[2][2] and [0][1] by placing an ’O’ in square [1][1] and then [0][2]
The code for this may be found at line numbers “527-531”

# # #   # # #   # X #   # X O
# # # → # O # → # O # → # O #
# # X   # # X   # # X   # # X

*/

let moveCount = 0

var decisionArray = [];
for (var i = 0; i < 3; i++) {
 decisionArray[i] = [];
}

var tempArray = [];
for (var i = 0; i < 3; i++) {
 tempArray[i] = [];
}

function setup() {
 createCanvas(400, 400);
 background("gray");
 textSize("12");
 stroke("white")
 fill("rgb(63,63,63)")
 line(133,0,133,400)
 line(266,0,266,400)
 line(0,133,400,133)
 line(0,266,400,266)
 //reset decisionArray with 0's
 initArray(decisionArray);
 initArray(tempArray);
 console.log(decisionArray[0][0])
}//setup
function initArray(x) {
 for (let i = 0; i < 3; i++) {
 for (let j = 0; j < 3; j++) {
 x[i][j] = "0";
 } //for j
 } //for i
}

function outputMove() {
  
 if (
 mouseX > 0 &&
 mouseX < 133 &&
 mouseY > 0 &&
 mouseY < 133 &&
 mouseIsPressed &&
 decisionArray[0][0] == "0"
 ) {
 drawX(1);
 moveCount++;
 decisionArray[0][0] = "X"
 consoleOutput(decisionArray)
 } //if  

 if (
 mouseX > 133 &&
 mouseX < 266 &&
 mouseY > 0 &&
 mouseY < 133 &&
 mouseIsPressed &&
 decisionArray[0][1] == "0"
 ) {
 drawX(2);
 moveCount++;
 decisionArray[0][1] = "X"
 consoleOutput(decisionArray)
 } //if
  
 if (
 mouseX > 266 &&
 mouseX < 400 &&
 mouseY > 0 &&
 mouseY < 133 &&
 mouseIsPressed &&
 decisionArray[0][2] == "0"
 ) {
 drawX(3);
 moveCount++;
 decisionArray[0][2] = "X"
 consoleOutput(decisionArray)
 } //if

 if (
 mouseX > 0 &&
 mouseX < 133 &&
 mouseY > 133 &&
 mouseY < 266 &&
 mouseIsPressed &&
 decisionArray[1][0] == "0"
 ) {
 drawX(4);
 moveCount++;
 decisionArray[1][0] = "X"
 consoleOutput(decisionArray)
 } //if

 if (
 mouseX > 133 &&
 mouseX < 266 &&
 mouseY > 133 &&
 mouseY < 266 &&
 mouseIsPressed &&
 decisionArray[1][1] == "0"
 ) {
 drawX(5);
 moveCount++;
 decisionArray[1][1] = "X"
 consoleOutput(decisionArray)
 } //if
  
 if (
 mouseX > 266 &&
 mouseX < 400 &&
 mouseY > 133 &&
 mouseY < 266 &&
 mouseIsPressed &&
 decisionArray[1][2] == "0"
 ) {
 drawX(6);
 moveCount++;
 decisionArray[1][2] = "X"
 consoleOutput(decisionArray)
 } //if

 if (
 mouseX > 0 &&
 mouseX < 133 &&
 mouseY > 266 &&
 mouseY < 400 &&
 mouseIsPressed &&
 decisionArray[2][0] == "0"
 ) {
 drawX(7);
 moveCount++;
 decisionArray[2][0] = "X"
 consoleOutput(decisionArray)
 }//if
 
 if (
 mouseX > 133 &&
 mouseX < 266 &&
 mouseY > 266 &&
 mouseY < 400 &&
 mouseIsPressed &&
 decisionArray[2][1] == "0"
 ) {
 drawX(8);
 moveCount++;
 decisionArray[2][1] = "X"
 consoleOutput(decisionArray)
 }//if
   
 if (
 mouseX > 266 &&
 mouseX < 400 &&
 mouseY > 266 &&
 mouseY < 400 &&
 mouseIsPressed &&
 decisionArray[2][2] == "0"
 ) {
 drawX(9);
 moveCount++;
 decisionArray[2][2] = "X"
 consoleOutput(decisionArray)
 } //if
}//outputMove

function confirmWin(n){
  if (
    n[0][0] == n[0][1] && n[0][0] == n[0][2] && n[0][0]!="0" || 
    n[1][0] == n[1][1] && n[1][0] == n[1][2] && n[1][0]!="0" ||
    n[2][0] == n[2][1] && n[2][0] == n[2][2] && n[2][0]!="0" || 
    
    n[0][0] == n[1][0] && n[0][0] == n[2][0] && n[0][0]!="0" ||
    n[0][1] == n[1][1] && n[0][1] == n[2][1] && n[0][1]!="0" || 
    n[0][2] == n[1][2] && n[0][2] == n[2][2] && n[0][2]!="0" ||
    
    n[0][0] == n[1][1] && n[0][0] == n[2][2] && n[0][0]!="0" || 
    n[2][0] == n[1][1] && n[2][0] == n[0][2] && n[2][0]!="0" 
  ) {
  return true;
  }//if
  else {
  return false;
  }//else
}//cW

function checkWin(n){
  if (confirmWin(n)) {
    noLoop()
    textSize(40)
  if (moveCount%2==0) {
    text("O Won",140,200) 
  }
  if (moveCount%2==1) {
    text("X Won",140,200)
    }
  }//if[]
  else if (moveCount==9) {
    noLoop()
    textSize(40)
    text("Draw",150,200)
  }//else if
}//checkWin

//grid1 = decisionArray
//grid2 = tempArray
function computerRandomMove(grid1, grid2){
  let row, col, a, b, squareNumber;
  let looking = true
  for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
  grid2[i][j] = grid1[i][j]
  } //for j
} //for i

//Specific Move Number 1
if (moveCount==1) {
if (
grid1[0][0] == "X" ||
grid1[0][2] == "X" ||
grid1[2][0] == "X" ||
grid1[2][2] == "X"
) {
grid1[1][1] = "O"
return 5;
  }
}

//Specific Move Number 2
if (moveCount==1) {
if (
grid1[0][1] == "X" ||
grid1[1][0] == "X" ||
grid1[1][2] == "X" ||
grid1[2][1] == "X"
) {
grid1[1][1] = "O"
return 5;
  }
}
  
//Specific Move Number 3
if (moveCount==1) {
  if (
  grid1[1][1] == "X"
  ) {
  grid1[0][2] = "O"
  return 3;
  }
}

//Specific Trap Number 1
if (moveCount == 3) {
  if (grid1[0][0] == "X" && grid1[2][2] == "X"){
    grid1[1][2] = "O"
    return 6;
  }//if
  //Part 2
else if (grid1[0][2] == "X" && grid1[2][0] == "X") {
  grid1[1][2] = "O"
  return 6;
  }//else if
}//moveCount  

//Specific Trap Number 2
if (moveCount==3) {
  if (grid1[1][1] == "X" && grid1[2][0] == "X"){
    grid1[0][0] = "O"
    return 1;
  }//nested if
}//if

//Specific Trap Number 3
if (moveCount==3 && grid1[0][1] == "X" && grid1[1][2] == "X"
  ) {
  grid1[0][2] = "O"
  return 3;
}
//Part 2
if (moveCount==3 && grid1[0][1] == "X" && grid1[1][0] == "X"
  ) {
  grid1[0][0] = "O"
  return 1;
}
//Part 3
if (moveCount==3 && grid1[1][0] == "X" && grid1[2][1] == "X"
  ) {
  grid1[2][0] = "O"
  return 7;
}
//Part 4
if (moveCount==3 && grid1[2][1] == "X" && grid1[1][2] == "X"
  ) {
  grid1[2][2] = "O"
  return 9;
}

//Specific Trap Number 4
if (moveCount==3 && grid1[0][0] == "X" && grid1[1][2] == "X"
  ) {
  grid1[0][2] = "O"
  return 3;
}
//Part 2
if (moveCount==3 && grid1[0][0] == "X" && grid1[2][1] == "X"
  ) {
  grid1[2][0] = "O"
  return 7;
}
//Part 3
if (moveCount==3 && grid1[0][2] == "X" && grid1[1][0] == "X"
  ) {
  grid1[0][0] = "O"
  return 1;
}
//Part 4
if (moveCount==3 && grid1[0][2] == "X" && grid1[2][1] == "X"
  ) {
  grid1[2][2] = "O"
  return 9;
}
//Part 5
if (moveCount==3 && grid1[2][0] == "X" && grid1[0][1] == "X"
    ) {
    grid1[0][0] = "O"
    return 1;
}
//Part 6
if (moveCount==3 && grid1[2][0] == "X" && grid1[1][2] == "X"
    ) {
    grid1[2][2] = "O"
    return 9;
}
//Part 7
if (moveCount==3 && grid1[2][2] == "X" && grid1[1][0] == "X"
  ) {
    grid1[2][0] = "O"
    return 7;
}
//Part 8
if (moveCount==3 && grid1[2][2] == "X" && grid1[0][1] == "X"
  ) {
    grid1[0][2] = "O"
    return 3;
}

for (let k = 1; k <= 9; k++) {
  row = floor((k-1)/3)
  col = (k-1)%3
  if (grid2[row][col] == "0"){
    grid2[row][col] = "O"
    if (confirmWin(grid2)){
      grid1[row][col] = "O"
      return k;
    }//nested if
    else {
      grid2[row][col] = "0"
    }//else
  }//if
}//for k

for (let k = 1; k <= 9; k++) {
  row = floor((k-1)/3)
  col = (k-1)%3
  if (grid2[row][col] == "0"){
    grid2[row][col] = "X"
    if (confirmWin(grid2)){
      grid1[row][col] = "O"
      return k;
    }//nested if
    else {
      grid2[row][col] = "0"
    }//else
  }//if
}//for l
  
  while (looking){
    squareNumber = round (random(1,9))
    a = floor ((squareNumber-1)/3)
    b = (squareNumber-1)%3
  if (decisionArray[a][b] == "0"){
    looking = false
    }//if
  }//while
    decisionArray[a][b] = "O"
    drawCircle(squareNumber)
}//computerRandomMove

function consoleOutput(x) {
for (var i = 0; i < 3; i++) {
print(i + ": " + x[i][0] + " " + x[i][1]
+ " " + x[i][2] + " ");
  } //endfor
} //consoleoutput
function drawCircle(n){
circle((n-1)%3*133+66, floor((n-1)/3)*133+66,100)
}
function drawX(n){
line((n-1)%3*133+30,floor((n-1)/3)*133+33,(n-1)%3*133+100,floor((n-1)/3)*133+100)
  
line((n-1)%3*133+100,floor((n-1)/3)*133+33,(n-1)%3*133+30,floor((n-1)/3)*133+100)
}

function draw() {
if (moveCount%2==0){
outputMove();
}//if
else{
drawCircle(computerRandomMove(decisionArray, tempArray))
consoleOutput(decisionArray)
moveCount++
}
checkWin(decisionArray);
if (moveCount == 9) {
 //do your draw code here
noLoop();
  } //if
}//drawloop
