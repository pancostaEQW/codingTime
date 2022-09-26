var board = [];
var rows = 8;
var columns = 8;

var minseCount = 6;
var minesLocation = [];

var tilesClicked = 0;
var flagEnabled = false;

var gameOver = false;

var minesRandX;
var minesRandY;

window.onload = function() {
    startGame();
}

function setMines() {
    let minseLeft = minseCount;
    while (minseLeft > 0) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        let id = r.toString() + "-" + c.toString();

        if(!minesLocation.includes(id)) {
            minesLocation.push(id);
            minseLeft -= 1;
        }
    }
}

function startGame() {
    document.getElementById("mines-count").innerText = minseCount;
    document.getElementById("flag-button").addEventListener("click", setFlag)
    document.getElementById("board").addEventListener("contextmenu", setFlag)
    setMines();


    for (let r = 0; r < rows; r++){
        let row = [];
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.addEventListener("click", clickTile);
            document.getElementById("board").append(tile);
            row.push(tile);
        }
        board.push(row);
    }

    console.log(board)
}

function setFlag() {
    if (flagEnabled) {
        flagEnabled = false;
        document.getElementById("flag-button").style.backgroundColor = "lightgray";
    } else {
        flagEnabled = true;
        document.getElementById("flag-button").style.backgroundColor = "darkgray";
    }
}

function clickTile() {
    
    if(gameOver || this.classList.contains("tile-clicked")) {
        return;
    }

    let tile = this;
    if(flagEnabled) {
        if(tile.innerText == "") {
            tile.innerText = "🚩";
        } 
        else if (tile.innerText == "🚩") {
            tile.innerText = "";
        } 
        else if (tile.innerText = "") {
            btnCode = 'click'
        }
        return;
    }

    if(minesLocation.includes(tile.id)) {
        // alert("gameOver");
        gameOver = true;
        revealMines();
        return;
    }

    let coords = tile.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    checkMine(r, c);

}

function revealMines() {
    for (r = 0; r < rows; r++) {
        for (c = 0; c < columns; c++) {
            let tile = board[r][c];
            if(minesLocation.includes(tile.id)) {
                tile.innerText = "💣";
                tile.style.backgroundColor
            }
        }
    }
}

function checkMine(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return;
    }
    if (board[r][c].classList.contains("tile-clicked")) {
        return;
    }

    board[r][c].classList.add("tile-clicked");
    tilesClicked += 1;

    let minesFound = 0;
    
    minesFound += checkTile(r-1, c-1);
    minesFound += checkTile(r-1, c);
    minesFound += checkTile(r-1, c+1);

    minesFound += checkTile(r, c-1);
    minesFound += checkTile(r, c+1);

    minesFound += checkTile(r+1, c-1);
    minesFound += checkTile(r+1, c);
    minesFound += checkTile(r+1, c+1);

    if(minesFound > 0) {
        board[r][c].innerText = minesFound;
        board[r][c].classList.add("x" + minesFound.toString());
    } else {
        checkMine(r-1, c-1);
        checkMine(r-1, c);
        checkMine(r-1, c+1);

        checkMine(r, c-1);
        checkMine(r, c+1);

        checkMine(r+1, c-1);
        checkMine(r+1, c);
        checkMine(r+1, c+1);
    }

    if(tilesClicked == rows * columns - minseCount) {
        document.getElementById("mines-count").innerText = "Cleared";
        gameOver = true;
    }
}

function checkTile(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= columns) {
        return 0;
    }
    if (minesLocation.includes(r.toString() + "-" + c.toString())) {
        return 1;
    }
    return 0;
}

var whichButton = function (e) {
    // Handle different event models
    var e = e || window.event;
    var btnCode;

    if ("object" === typeof e) {
      btnCode = e.button;

      switch (btnCode) {
        case 0:
          alert("Нажата левая кнопка.");
          break;

        case 1:
          alert("Нажата средняя кнопка или колёсико.");
          break;

        case 2:
          alert("Нажата правая кнопка.");
          break;

        default:
          alert("Неопределённое событие: " + btnCode);
      }
    }
  };