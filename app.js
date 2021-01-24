let cells = document.querySelectorAll(".row > div");
let playerX = true;

// this goes through the cells array and adds a click event to all 9 cells
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

function cellClicked(event) {
    // this if stmt checks to see who goes first - X is always first
    if (playerX === true) {
        event.target.textContent = "X";
        playerX = false; // used to change the user back to O

        // this section of code checks all the possibilities for "X" to win
        if (cells[0].textContent == "X" && cells[1].textContent == "X" && cells[2].textContent == "X") {
            console.log("X Wins!!");
        } else if (cells[0].textContent == "X" && cells[4].textContent == "X" && cells[8].textContent == "X") {
            console.log("X Wins!!");
        } else if (cells[0].textContent == "X" && cells[3].textContent == "X" && cells[6].textContent == "X") {
            console.log("X Wins!!");
        } else if (cells[2].textContent == "X" && cells[5].textContent == "X" && cells[8].textContent == "X") {
            console.log("X Wins!!");
        } else if (cells[6].textContent == "X" && cells[7].textContent == "X" && cells[8].textContent == "X") {
            console.log("X Wins!!");
        } else if (cells[2].textContent == "X" && cells[4].textContent == "X" && cells[6].textContent == "X") {
            console.log("X Wins!!");
        }
    } else {
        event.target.textContent = "O";
        playerX = true; // used to change the user back to X

        // this section of code checks all the possibilities for "O" to win
        if (cells[0].textContent == "O" && cells[1].textContent == "O" && cells[2].textContent == "O") {
            console.log("O Wins!!");
        } else if (cells[0].textContent == "O" && cells[4].textContent == "O" && cells[8].textContent == "O") {
            console.log("O Wins!!");
        } else if (cells[0].textContent == "O" && cells[3].textContent == "O" && cells[6].textContent == "O") {
            console.log("O Wins!!");
        } else if (cells[2].textContent == "O" && cells[5].textContent == "O" && cells[8].textContent == "O") {
            console.log("O Wins!!");
        } else if (cells[6].textContent == "O" && cells[7].textContent == "O" && cells[8].textContent == "O") {
            console.log("O Wins!!");
        } else if (cells[2].textContent == "O" && cells[4].textContent == "O" && cells[6].textContent == "O") {
            console.log("O Wins!!");
        }
    }
}

