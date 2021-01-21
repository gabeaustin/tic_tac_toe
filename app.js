// let playerX = prompt("What is your name? \nYou will be X");
// let playerY = prompt("What is your name? \nYou will be Y");

// document.write(`${playerX}, you are X! You go first.`);
// document.write(`${playerY}, you are Y!`);

// if (playerX) {
//     // go first
// } else {
//     // go second
// }

// function clickXTopLeft() {
//     document.getElementById("top-left").onclick.innerHTML = "X";
// }

// if (playerX.onclick()) {
//     clickXTopLeft();
// }


let elementIsClicked = false; // declare the variable that tracks the state
function topLeftWasClicked() { // declare a function that updates the state
    elementIsClicked = true;
    document.getElementById("top-left").innerHTML = "top-left clicked";
}

let topLeftSquare = document.getElementById("top-left"); // grab a reference to your element
topLeftSquare.addEventListener("click", topLeftWasClicked);


function topMiddleWasClicked() { // declare a function that updates the state
    elementIsClicked = true;
    document.getElementById("top-middle").innerHTML = "top-middle clicked";
}

let topMiddleSquare = document.getElementById("top-middle"); // grab a reference to your element
topMiddleSquare.addEventListener("click", topMiddleWasClicked);


function topRightWasClicked() { // declare a function that updates the state
    elementIsClicked = true;
    document.getElementById("top-right").innerHTML = "top-right clicked";
}

let topRightSquare = document.getElementById("top-right"); // grab a reference to your element
topRightSquare.addEventListener("click", topRightWasClicked);


function centerLeftWasClicked() { // declare a function that updates the state
    elementIsClicked = true;
    document.getElementById("center-left").innerHTML = "center-left clicked";
}

let centerLeftSquare = document.getElementById("center-left"); // grab a reference to your element
centerLeftSquare.addEventListener("click", centerLeftWasClicked);


function centerWasClicked() { // declare a function that updates the state
    elementIsClicked = true;
    document.getElementById("center").innerHTML = "center clicked";
}

let centerSquare = document.getElementById("center"); // grab a reference to your element
centerSquare.addEventListener("click", centerWasClicked);


function centerRightWasClicked() { // declare a function that updates the state
    elementIsClicked = true;
    document.getElementById("center-right").innerHTML = "center-right clicked";
}

let centerRightSquare = document.getElementById("center-right"); // grab a reference to your element
centerRightSquare.addEventListener("click", centerRightWasClicked);


function bottomLeftWasClicked() { // declare a function that updates the state
    elementIsClicked = true;
    document.getElementById("bottom-left").innerHTML = "bottom-left clicked";
}

let bottomLeftSquare = document.getElementById("bottom-left"); // grab a reference to your element
bottomLeftSquare.addEventListener("click", bottomLeftWasClicked);


function bottomMiddleWasClicked() { // declare a function that updates the state
    elementIsClicked = true;
    document.getElementById("bottom-middle").innerHTML = "bottom-middle clicked";
}

let bottomMiddleSquare = document.getElementById("bottom-middle"); // grab a reference to your element
bottomMiddleSquare.addEventListener("click", bottomMiddleWasClicked);


function bottomRightWasClicked() { // declare a function that updates the state
    elementIsClicked = true;
    document.getElementById("bottom-right").innerHTML = "bottom-right clicked";
}

let bottomRightSquare = document.getElementById("bottom-right"); // grab a reference to your element
bottomRightSquare.addEventListener("click", bottomRightWasClicked);



