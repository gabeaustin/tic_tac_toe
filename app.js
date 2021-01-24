let cells = document.querySelectorAll(".row > div");
let playerX = true;
let announceWinner = document.getElementById("displayTheWinner");

// this goes through the cells array and adds a click event to all 9 cells
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
    // this if stmt checks to see who goes first - X is always first
    if (playerX === true) {
        // this section of code checks all the possibilities for "X" to win
        event.target.textContent = "X";
        playerX = false; // used to change the user back to O
        
        if (cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X") {
                announceWinner.innerHTML = "X is the WINNER!!";

                document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("top-middle").style.backgroundColor = "#c5e3bf";
                document.getElementById("top-right").style.backgroundColor = "#c5e3bf";

        } else if (cells[0].textContent == "X" && cells[4].textContent == "X" && cells[8].textContent == "X") {
                announceWinner.innerHTML = "X is the WINNER!!";

                document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("center").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";

        } else if (cells[0].textContent == "X" && cells[3].textContent == "X" && cells[6].textContent == "X") {
                announceWinner.innerHTML = "X is the WINNER!!";

                document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("center-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";

        } else if (cells[2].textContent == "X" && cells[5].textContent == "X" && cells[8].textContent == "X") {
                announceWinner.innerHTML = "X is the WINNER!!";

                document.getElementById("top-right").style.backgroundColor = "#c5e3bf";
                document.getElementById("center-right").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";

        } else if (cells[6].textContent == "X" && cells[7].textContent == "X" && cells[8].textContent == "X") {
                announceWinner.innerHTML = "X is the WINNER!!";

                document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-middle").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";

        } else if (cells[2].textContent == "X" && cells[4].textContent == "X" && cells[6].textContent == "X") {
                announceWinner.innerHTML = "X is the WINNER!!";

                document.getElementById("top-right").style.backgroundColor = "#c5e3bf";
                document.getElementById("center").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";

        } else if (cells[3].textContent == "X" && cells[4].textContent == "X" && cells[5].textContent == "X") {
                announceWinner.innerHTML = "X is the WINNER!!";

                document.getElementById("center-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("center").style.backgroundColor = "#c5e3bf";
                document.getElementById("center-right").style.backgroundColor = "#c5e3bf";

        } else if (cells[1].textContent == "X" && cells[4].textContent == "X" && cells[7].textContent == "X") {
                announceWinner.innerHTML = "X is the WINNER!!";

                document.getElementById("top-middle").style.backgroundColor = "#c5e3bf";
                document.getElementById("center").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-middle").style.backgroundColor = "#c5e3bf";
            
        }

    } else if (playerX === false) {
        // this section of code checks all the possibilities for "O" to win
        event.target.textContent = "O";
        playerX = true; // used to change the user back to X

        
        if (cells[0].textContent == "O" && cells[1].textContent == "O" && cells[2].textContent == "O") {
                announceWinner.innerHTML = "O is the WINNER!!";

                document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("top-middle").style.backgroundColor = "#c5e3bf";
                document.getElementById("top-right").style.backgroundColor = "#c5e3bf";

        } else if (cells[0].textContent == "O" && cells[4].textContent == "O" && cells[8].textContent == "O") {
                announceWinner.innerHTML = "O is the WINNER!!";

                document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("center").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";
        } else if (cells[0].textContent == "O" && cells[3].textContent == "O" && cells[6].textContent == "O") {
                announceWinner.innerHTML = "O is the WINNER!!";

                document.getElementById("top-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("center-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";

        } else if (cells[2].textContent == "O" && cells[5].textContent == "O" && cells[8].textContent == "O") {
                announceWinner.innerHTML = "O is the WINNER!!";

                document.getElementById("top-right").style.backgroundColor = "#c5e3bf";
                document.getElementById("center-right").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";

        } else if (cells[6].textContent == "O" && cells[7].textContent == "O" && cells[8].textContent == "O") {
                announceWinner.innerHTML = "O is the WINNER!!";

                document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-middle").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-right").style.backgroundColor = "#c5e3bf";

        } else if (cells[2].textContent == "O" && cells[4].textContent == "O" && cells[6].textContent == "O") {
                announceWinner.innerHTML = "O is the WINNER!!";

                document.getElementById("top-right").style.backgroundColor = "#c5e3bf";
                document.getElementById("center").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-left").style.backgroundColor = "#c5e3bf";

        } else if (cells[3].textContent == "O" && cells[4].textContent == "O" && cells[5].textContent == "O") {
                announceWinner.innerHTML = "O is the WINNER!!";

                document.getElementById("center-left").style.backgroundColor = "#c5e3bf";
                document.getElementById("center").style.backgroundColor = "#c5e3bf";
                document.getElementById("center-right").style.backgroundColor = "#c5e3bf";

        } else if (cells[1].textContent == "O" && cells[4].textContent == "O" && cells[7].textContent == "O") {
                announceWinner.innerHTML = "O is the WINNER!!";

                document.getElementById("top-middle").style.backgroundColor = "#c5e3bf";
                document.getElementById("center").style.backgroundColor = "#c5e3bf";
                document.getElementById("bottom-middle").style.backgroundColor = "#c5e3bf";

        }
    }
}

