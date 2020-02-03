/*----- CONSTANTS -----*/
// const xShow = document.getElementsByClassName('gameButton');
// const xShow = document.onclick.getElementsByClassName('gameButton').innerHTML = 'X';

const KEY = {
    '1': 'X',
    '-1': '0',
    'null': ''
};

const COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

/*-------- app's state (variables) ---------*/
let turn, gameboard, winner;
/*----- cached references -----*/
const messageEl = document.getElementById('message');
const board= document.querySelectorAll('.gameBoard');

/*----- event listeners -----*/
// document.onclick = xShow();
// document.onclick.getElementsByClassName('gameButton').innerHTML = 'X';
// document.onclick = handleButtonClick;
document.getElementById('gameBoard').addEventListener('click' , handleButtonClick);

// handles Player Clicks
function handleButtonClick (e) {
    console.log (e.target.dataset.index);
}

// function handleButtonClick() {
    // var x = document.getElementById("0").innerHTML;
    // document.getElementById("0").innerHTML = 'x';
    // document.onclick.getElementsByClassName('gameButton').innerHTML = 'X';
//   }
// document.getElementsByClassName('gameButton').addEventListener('click' , handleButtonClick)

//Initial state of the game

function start () {
    let Player1 = 0;
    let Player2 = 0;
}


