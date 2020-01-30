var grid = document.getElementById('grid');
var msg = document.querySelector('.message');
var mark = 'X';
var cells;

// build grid
for (var i=1; i<=9; i++){
  var cell = document.createElement('li');
  cell.id = 'c' + i;
  cell.addEventListener('click', setMove, false);
  grid.appendChild(cell);
}

cells = document.querySelectorAll('li');

// add clickListener to each cell
function setMove(){
  if(this.textContent == ''){
    this.textContent = mark;
    checkRow();    
    switchMark();
  }
}

// switch user b/w X and O
function switchMark(){
  if (mark == 'X'){
    mark = 'O';
  }
  else {
    mark = 'X';
  }
}

// determine the winner 
function winner(a,b,c){ 
  if (a.textContent == mark && b.textContent == mark && c.textContent == mark){
    msg.textContent = mark + ' is the winner!';
    a.classList.add('winner');
    b.classList.add('winner');
    c.classList.add('winner');
    return true;
  }
  else {
    return false;
  }
}

function checkSiblings(currentMove){
  var next = Number(currentMove.id + 3);
  var prev = Number(currentMove.id - 3);
  winner(cells[currentMove.id].textContent, cells[next].textContent, cells[prev].textContent);
}

// check all win combinations 
function checkRow(){
  winner(document.getElementById('c1'), document.getElementById('c2'), document.getElementById('c3'));
  winner(document.getElementById('c4'), document.getElementById('c5'), document.getElementById('c6'));
  winner(document.getElementById('c7'), document.getElementById('c8'), document.getElementById('c9'));  
  winner(document.getElementById('c1'), document.getElementById('c4'), document.getElementById('c7'));
  winner(document.getElementById('c2'), document.getElementById('c5'), document.getElementById('c8'));
  winner(document.getElementById('c3'), document.getElementById('c6'), document.getElementById('c9'));  
  winner(document.getElementById('c1'), document.getElementById('c5'), document.getElementById('c9'));
  winner(document.getElementById('c3'), document.getElementById('c5'), document.getElementById('c7'));
}

// Reset/clear board
function reset(){
  mark = 'X';
  for (var i=0; i<cells.length; i++){
    cells[i].textContent = '';
    cells[i].classList.remove('winner');
  }
  msg.textContent = 'Ready To Play?';
}

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function(e){
  e.preventDefault();
  reset();
});