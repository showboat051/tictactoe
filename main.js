/*----- CONSTANTS -----*/
// const xShow = document.getElementsByClassName('gameButton');
// const xShow = document.onclick.getElementsByClassName('gameButton').innerHTML = 'X';
// console.log(xShow)
/*----- event listeners -----*/
// document.onclick = xShow();
// document.onclick.getElementsByClassName('gameButton').innerHTML = 'X';
document.onclick = handleButtonClick;

// handles Player Clicks
function handleButtonClick (e) {
    console.log ('clicked')
}

function handleButtonClick() {
    // var x = document.getElementById("0").innerHTML;
    document.getElementById("0").innerHTML = 'x';
    // document.onclick.getElementsByClassName('gameButton').innerHTML = 'X';
  }
// document.getElementsByClassName('gameButton').addEventListener('click' , handleButtonClick)

//Initial state of the game

function start () {
    let Player1 = 0;
    let Player2 = 0;
}


