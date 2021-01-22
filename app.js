let cells = document.querySelectorAll(".row > div");
// let timesClicked = 0; 
// cells[0].textContent -> used to check to see who has won


for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}


function cellClicked(event) {
    event.target.textContent = "X";
    // dot target represents what we clicked on

    // this section of code checks all the possibilities for X to win
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
}
