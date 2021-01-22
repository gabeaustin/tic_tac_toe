let cells = document.querySelectorAll(".row > div");
let timesClicked = 0; // This will determine who clicks first to set X or O

// cells[0].textContent; - this will help determine who won

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", cellClicked);
}

// This changes the same cell if clicked twice from X to O - WORK ON
function cellClicked() {
    if (timesClicked % 2 == 0) {
        event.target.textContent = "X";
    } else {
        event.target.textContent = "O";
    }

    timesClicked++;
}


