window.onload = pageLoaded;

var startBtn;
var limit;

var column1;
var column2;
var column3;

var timeArea;

var startY = 900;
var limitY = 50; //Defined limit for height
var drawback = 50; //Distance that a click moves back
var totalTime = 0;

var y1 = 400;
var y2 = 400;
var y3 = 400;

function pageLoaded() {
  startBtn = document.getElementById("startBtn");
  limit = document.getElementById("limit");

  column1 = document.getElementById("column1");
  column2 = document.getElementById("column2");
  column3 = document.getElementById("column3");

  timeArea = document.getElementById("timeArea");

  startBtn.onclick = gameStarted;

  column1.onclick = moveDown;
  column2.onclick = moveDown;
  column3.onclick = moveDown;

  setInterval(checkIfLost, 200);
}

//funskjoner rundt spillet bevegelser/animasjoner
function gameStarted() {
  //ordner visuelle først og setter y1,y2,y3 til stolpenes posisjon
  startBtn.style.visibility = "hidden";
  limit.style.top = limitY + 40 + "px";

  column1.style.top = y1 + "px";
  column2.style.top = y2 + "px";
  column3.style.top = y3 + "px";

  //legger til klikkeevents for å flytte ned
  column1.onclick = moveDown;
  column2.onclick = moveDown;
  column3.onclick = moveDown;

  //flytte opp
  setInterval(moveUp, 100);
  //starte tidtaker
  setInterval(takeTime, 100);
}
function moveDown(evt) {
  //evt.target.style.top = startY + "px";
  if (evt.target == column1) {
    //y1 = startY; //klikk setter tilbake til fast punkt
    y1 += drawback; //klikk stiller tilbake med 50px
  }
  else if (evt.target == column2) {
    //y2 = startY; //klikk setter tilbake til fast punkt
    y2 += drawback; //klikk stiller tilbake med 50px
  }
  else if (evt.target == column3) {
    //y3 = startY; //klikk setter tilbake til fast punkt
    y3 += drawback; //klikk stiller tilbake med 50px
  }
}
function moveUp() {
  //Dersom de er nedenfor limit
  if (y1 > limitY && y1 > limitY && y1 > limitY) {
    column1.style.top = y1 + "px";
    column2.style.top = y2 + "px";
    column3.style.top = y3 + "px";

    //lessens y-values
    y1 -= 5;
    y2 -= 5;
    y3 -= 5;

    //console.log("y1:" + y1 + "y2:" + y2 + "y3:" + y3);
  }
}
function checkIfLost() {
  //dersom limitn er truffet
  if (y1 <= limitY || y2 <= limitY || y3 <= limitY ) {
    alert("Game over.. Try again?");
    location.reload();
  }
}
//funksjoner rundt tid:
function takeTime() {
  console.log("tid:"+totalTime + "s");
  totalTime += 0.1;

  timeArea.innerHTML = "Tid:" + totalTime.toFixed(1);
}
