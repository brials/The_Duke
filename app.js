'use strict';
// List of pieces for use in the Duke, (duke, ranger, wizard, footmen,priest, seer, knight, pikeman, longbowman, bowman,assasin, dragoon)
//variable declerations  in alphabetical, assassin, bowman, dragoon, duke,footmen, knight, longbowman,pikeman, priest,ranger, seer, wizard
var objArrayWhite = [];
var objArrayBlack = [];
var tablePlace = document.getElementById('table');
var arrOfZero = [0,0,0,0,0,0,0,0,0,0,0,0];
var dukeFrontMovesX = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
var dukeBackMovesY = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
function Piece(name, frontMovesX, frontMovesY, backMovesX, backMovesY, color){
  this.name = name;
  this.frontMovesX = frontMovesX;
  this.frontMovesY = frontMovesY;
  this.backMovesX = backMovesX;
  this.backMovesY = backMovesY;
  this.color = color;
  if(this.color === 'white'){
    objArrayWhite.push(this);
  } else{
    objArrayBlack.push(this);
  }
}

Piece.prototype.frontSide = true;
Piece.prototype.location = '';
// function definitions
// Initial array population
function initArray(){
  new Piece('Duke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'white');
  objArrayWhite[0].location='0,3';
  new Piece('Duke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'white');
  objArrayWhite[1].location='3,1';
  new Piece('Duke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'white');
  objArrayWhite[2].location='3,2';
  new Piece('Duke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'white');
  objArrayWhite[3].location='3,3';
  new Piece('Duke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'white');
  objArrayWhite[4].location='3,4';
  new Piece('Duke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'white');
  objArrayWhite[5].location='3,5';
  new Piece('BDuke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'black');
  objArrayBlack[0].location='0,0';
  new Piece('BDuke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'black');
  objArrayBlack[1].location='1,0';
  new Piece('BDuke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'black');
  objArrayBlack[2].location='2,0';
  new Piece('BDuke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'black');
  objArrayBlack[3].location='3,0';
  new Piece('BDuke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'black');
  objArrayBlack[4].location='4,0';
  new Piece('BDuke', dukeFrontMovesX, arrOfZero, arrOfZero, dukeBackMovesY, 'black');
  objArrayBlack[5].location='5,0';
}
// render function
function rend(el, content, place, newId, src){
  var tempEl = document.createElement(el);
  tempEl.textContent = content;
  tempEl.setAttribute('id', newId);
  tempEl.setAttribute('src', src);
  var tempPlace = document.getElementById(place);
  tempPlace.appendChild(tempEl);
}
//render row
function renderRow(id){
  rend('tr', '', 'table', id);
  rend('td', '', id, '0,'+id);
  rend('td', '', id, '1,'+id);
  rend('td', '', id, '2,'+id);
  rend('td', '', id, '3,'+id);
  rend('td', '', id, '4,'+id);
  rend('td', '', id, '5,'+id);
}
//render table
function renderTable(){
  tablePlace.innerHTML = '';
  renderRow(5);
  renderRow(4);
  renderRow(3);
  renderRow(2);
  renderRow(1);
  renderRow(0);
}

//render units
function renderUnits(){
  for(var k = 0; k < objArrayWhite.length; k++){
    for(var i = 0; i < 6; i++){
      for(var j = 0; j < 6; j++){
        var idString = i + ',' + j;
        if(objArrayWhite[k].location === idString){
          var temp = document.getElementById(objArrayWhite[k].location);
          temp.textContent = objArrayWhite[k].name;
        }
        if(objArrayBlack[k].location === idString){
          temp = document.getElementById(objArrayBlack[k].location);
          temp.textContent = objArrayBlack[k].name;
        }
      }
    }
  }
}
// Handle table click
function handleTableClick(event){
  event.preventDefault();
  var place = document.getElementById(event.target.id);
  console.log(event.target.id);
  console.log(place.textContent);
  if(place.textContent === ''){
    return alert('Please click on a piece');
  }
  var xCord = parseInt(prompt('Please enter new X coordinate.(bottom left is 0,0)'));
  var yCord = parseInt(prompt('Please enter new Y coordinate.'));
  if(isNaN(xCord) || isNaN(yCord) || xCord > 5 || yCord > 5 || yCord < 0 || xCord < 0){
    return alert('Please enter a number between 0 and 5.');
  }
  var newLoc = xCord + ',' + yCord;
  console.log(newLoc);
  for(var i = 0; i < objArrayWhite.length; i++){
    if(objArrayWhite[i].location === event.target.id){
      objArrayWhite[i].location = newLoc;
    }
    if(objArrayBlack[i].location === event.target.id){
      objArrayBlack[i].location = newLoc;
    }
  }
  renderTable();
  renderUnits();
}








// function calls
initArray();
renderTable();
renderUnits();
tablePlace.addEventListener('click', handleTableClick);
