boxes = [
  document.getElementById("click1"),
  document.getElementById("click2"),
  document.getElementById("click3"),
  document.getElementById("click4"),
  document.getElementById("click5"),
  document.getElementById("click6"),
  document.getElementById("click7"),
  document.getElementById("click8"),
  document.getElementById("click9")
];

var a1;
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;

function takeBox(box, val) {
  box.innerHTML = val;
  
  var index = boxes.indexOf(box);
  boxes.splice(index, 1);
};

function computerTakesTurn() {
  var computerBox = boxes[Math.floor(Math.random() * boxes.length)];
  takeBox(computerBox, 'O');
};

function checkWin() {
  if ((a1 == a2 && a1 == a3 && (a1 == "X")) || 
    (b1 == b2 && b1 == b3 && (b1 == "X")) || 
    (c1 == c2 && c1 == c3 && (c1 == "X")) || 
    (a1 == b1 && a1 == c1 && (a1 == "X")) || 
    (a2 == b2 && a2 == c2 && (a2 == "X")) || 
    (a3 == b3 && a3 == c3 && (a3 == "X")) || 
    (a1 == b2 && a1 == c3 && (a1 == "X")) || 
    (a3 == b2 && a3 == c1 && (a3 == "X")) 
    ) {
        alert("You won!");
        window.location.reload(true);

    } else { 
        if ((a1 == a2 && a1 == a3 && (a1 == "O")) || 
        (b1 == b2 && b1 == b3 && (b1 == "O")) || 
        (c1 == c2 && c1 == c3 && (c1 == "O")) || 
        (a1 == b1 && a1 == c1 && (a1 == "O")) || 
        (a2 == b2 && a2 == c2 && (a2 == "O")) || 
        (a3 == b3 && a3 == c3 && (a3 == "O")) || 
        (a1 == b2 && a1 == c3 && (a1 == "O")) || 
        (a3 == b2 && a3 == c1 && (a3 == "O")) 
        ) {
            alert("Sorry, you lose!");
            window.location.reload(true);
        } else { 
            if (((a1 == "X") || (a1 == "O")) && ((b1 == "X") || (b1 == "O")) && ((c1 == "X") || (c1 == "O")) && ((a2 == "X") || (a2 == "O")) && ((b2 == "X") || (b2 == "O")) && ((c2 == "X") || (c2 == "O")) && ((a3 == "X") || (a3 == "O")) && ((b3 == "X") || (b3 == "O")) && ((c3 == "X") || (c3 == "O"))) {
                alert("It's a tie!");
                window.location.reload(true);
            }
        }
    }
};

function boxValues() {
  a1 = $("#click1").text();
  a2 = $("#click2").text();
  a3 = $("#click3").text();
  b1 = $("#click4").text();
  b2 = $("#click5").text();
  b3 = $("#click6").text();
  c1 = $("#click7").text();
  c2 = $("#click8").text();
  c3 = $("#click9").text();
};

function playerClick(clickedButton) {
  takeBox(clickedButton, "X");
  computerTakesTurn();
  boxValues();
  checkWin();
};





