let cells = document.querySelectorAll(".row > div");
let playerX = true;
let xWinsNotification;
let oWinsNotification;
let announceWinner = document.getElementById("displayTheWinner");

// this goes through the cells array and adds a click event to all 9 cells
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
    // varibales to check to see if X cells win
    let xCheckTopRow = (cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X");
    let xCheckDiagonalRight = (cells[0].textContent == "X" && cells[4].textContent == "X" && cells[8].textContent == "X");
    let xCheckLeftColumn = (cells[0].textContent == "X" && cells[3].textContent == "X" && cells[6].textContent == "X");
    let xCheckRightColumn = (cells[2].textContent == "X" && cells[5].textContent == "X" && cells[8].textContent == "X");
    let xCheckBottomRow = (cells[6].textContent == "X" && cells[7].textContent == "X" && cells[8].textContent == "X");
    let xCheckDiagonalLeft = (cells[2].textContent == "X" && cells[4].textContent == "X" && cells[6].textContent == "X");
    let xCheckCenterRow = (cells[3].textContent == "X" && cells[4].textContent == "X" && cells[5].textContent == "X");
    let xCheckMiddleColumn = (cells[1].textContent == "X" && cells[4].textContent == "X" && cells[7].textContent == "X");

    // varibales to check to see if O cells win
    let oCheckTopRow = (cells[0].textContent == "O" && cells[1].textContent == "O" && cells[2].textContent == "O");
    let oCheckDiagonalRight = (cells[0].textContent == "O" && cells[4].textContent == "O" && cells[8].textContent == "O");
    let oCheckLeftColumn = (cells[0].textContent == "O" && cells[3].textContent == "O" && cells[6].textContent == "O");
    let oCheckRightColumn = (cells[2].textContent == "O" && cells[5].textContent == "O" && cells[8].textContent == "O");
    let oCheckBottomRow = (cells[6].textContent == "O" && cells[7].textContent == "O" && cells[8].textContent == "O");
    let oCheckDiagonalLeft = (cells[2].textContent == "O" && cells[4].textContent == "O" && cells[6].textContent == "O");
    let oCheckCenterRow = (cells[3].textContent == "O" && cells[4].textContent == "O" && cells[5].textContent == "O");
    let oCheckMiddleColumn = (cells[1].textContent == "O" && cells[4].textContent == "O" && cells[7].textContent == "O");

    // this if stmt checks to see who goes first - X is always first
    if (playerX === true) {
        // this section of code checks all the possibilities for "X" to win
        event.target.textContent = "X";
        playerX = false; // used to change the user back to O

        if (xCheckTopRow) {
            announceWinner.innerHTML = "X is the WINNER!!";

            document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("top-middle").style.backgroundColor = "#c5e3bf";
            document.getElementById("top-right").style.backgroundColor = "#c5e3bf";

        } else if (xCheckDiagonalRight) {
            announceWinner.innerHTML = "X is the WINNER!!";

            document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("center").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";

        } else if (xCheckLeftColumn) {
            announceWinner.innerHTML = "X is the WINNER!!";

            document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("center-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";

        } else if (xCheckRightColumn) {
            announceWinner.innerHTML = "X is the WINNER!!";

            document.getElementById("top-right").style.backgroundColor = "#c5e3bf";
            document.getElementById("center-right").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";

        } else if (xCheckBottomRow) {
            announceWinner.innerHTML = "X is the WINNER!!";

            document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-middle").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";

        } else if (xCheckDiagonalLeft) {
            announceWinner.innerHTML = "X is the WINNER!!";

            document.getElementById("top-right").style.backgroundColor = "#c5e3bf";
            document.getElementById("center").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";

        } else if (xCheckCenterRow) {
            announceWinner.innerHTML = "X is the WINNER!!";

            document.getElementById("center-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("center").style.backgroundColor = "#c5e3bf";
            document.getElementById("center-right").style.backgroundColor = "#c5e3bf";

        } else if (xCheckMiddleColumn) {
            announceWinner.innerHTML = "X is the WINNER!!";

            document.getElementById("top-middle").style.backgroundColor = "#c5e3bf";
            document.getElementById("center").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-middle").style.backgroundColor = "#c5e3bf";

        }

    } else if (playerX === false) {
        // this section of code checks all the possibilities for "O" to win
        event.target.textContent = "O";
        // document.getElementById("yourTurnO").style.opacity = 0;
        playerX = true; // used to change the user back to X


        if (oCheckTopRow) {
            announceWinner.innerHTML = "O is the WINNER!!";

            document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("top-middle").style.backgroundColor = "#c5e3bf";
            document.getElementById("top-right").style.backgroundColor = "#c5e3bf";

        } else if (oCheckDiagonalRight) {
            announceWinner.innerHTML = "O is the WINNER!!";

            document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("center").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";
            ``
        } else if (oCheckLeftColumn) {
            announceWinner.innerHTML = "O is the WINNER!!";

            document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("center-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";

        } else if (oCheckRightColumn) {
            announceWinner.innerHTML = "O is the WINNER!!";

            document.getElementById("top-right").style.backgroundColor = "#c5e3bf";
            document.getElementById("center-right").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";

        } else if (oCheckBottomRow) {
            announceWinner.innerHTML = "O is the WINNER!!";

            document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-middle").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";

        } else if (oCheckDiagonalLeft) {
            announceWinner.innerHTML = "O is the WINNER!!";

            document.getElementById("top-right").style.backgroundColor = "#c5e3bf";
            document.getElementById("center").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";

        } else if (oCheckCenterRow) {
            announceWinner.innerHTML = "O is the WINNER!!";

            document.getElementById("center-left").style.backgroundColor = "#c5e3bf";
            document.getElementById("center").style.backgroundColor = "#c5e3bf";
            document.getElementById("center-right").style.backgroundColor = "#c5e3bf";

        } else if (oCheckMiddleColumn) {
            announceWinner.innerHTML = "O is the WINNER!!";

            document.getElementById("top-middle").style.backgroundColor = "#c5e3bf";
            document.getElementById("center").style.backgroundColor = "#c5e3bf";
            document.getElementById("bottom-middle").style.backgroundColor = "#c5e3bf";

        }
    }

    if ((!xCheckTopRow && !oCheckTopRow) && (!xCheckDiagonalRight && !oCheckDiagonalRight) && (!xCheckLeftColumn && !oCheckLeftColumn) && (!xCheckRightColumn && !oCheckRightColumn) && (!xCheckBottomRow && !oCheckBottomRow) && (!xCheckDiagonalLeft && !oCheckDiagonalLeft) && (!xCheckCenterRow && !oCheckCenterRow) && (!xCheckMiddleColumn && !oCheckMiddleColumn)) {
        announceWinner.innerHTML = "Draw";
    }
}

