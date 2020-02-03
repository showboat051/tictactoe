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
const board= document.querySelectorAll('.gameButton');

/*----- event listeners -----*/
// document.onclick = xShow();
// document.onclick.getElementsByClassName('gameButton').innerHTML = 'X';
// document.onclick = handleButtonClick;
document.getElementById('gameBoard').addEventListener('click' , handleButtonClick);
document.getElementById('replay').addEventListener('click', init);
// handles Player Clicks
function handleButtonClick (e) {
    let selectedIndex = e.target.dataset.index;
    if (winner || gameboard[selectedIndex]) return;
    
    gameboard[selectedIndex] = turn;
    //toggle  the turn
    turn *= -1
    // Check for a winner
    winner = checkWinner();
    // Visuualize what hanppened -> render();
    render();
}

init();

function  init() {
    turn = 1;
    // Must reset gamebooard
    gameboard = new Array(9).fill(null);
    // Remove the winner
    winner = checkWinner(); 
    // visualize what a new game should look like
    render();
}

function checkWinner () {
    // return true or false
    for(let i = 0; i < COMBOS.length; i++) {
        if(Math.abs(gameboard[COMBOS[i][0]]+
                    gameboard[COMBOS[i][1]]+            
                    gameboard[COMBOS[i][2]]) === 3) return gameboard[COMBOS[i][0]];
        }
        if(gameboard.includes(null)) return false;
        return 'T';
}

function render () {
    // Draw the gameboard
    gameboard.forEach(function(element, index) {
        board[index].textContent = KEY[element]
    });
    if(!winner) {
    messageEl.textContent = `${KEY[turn]}'s Turn'`
    } else if (winner === 'T') {
        messageEl.textContent = "It's a tie"
    } else {
        messageEl.textContent = `${KEY[winner]} is a Winner!`
    }
    // Transfer the state of the app to the DOM 
    console.log('gameboard', gameboard)
    console.log('turn', turn)
    
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


