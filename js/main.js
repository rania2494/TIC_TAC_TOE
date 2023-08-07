// HTML
let row = document.querySelector('.row')
let contanier = '';
for (let i = 0; i < 9; i++) {
    contanier += `<div class="col-4 p-2 d-flex justify-content-center align-items-stretch parent">
    <div class="cell border border-0 rounded-3 w-100  display-2 py-2"></div>
  </div>`
}
row.innerHTML = contanier;

function dispalyPage(item) {
    document.querySelector(item).classList.add('dispalyPage')
}
setTimeout(() => { dispalyPage('h1') }, 100);
setTimeout(() => { dispalyPage('.row') }, 1300);
setTimeout(() => { dispalyPage('table') }, 2500);
setTimeout(() => { dispalyPage('#turn') }, 2500);


// ///////////////////////////////////////

// VARIABLES
let turn = 'X';
let cells = document.querySelectorAll('.cell');
let turnChange = document.querySelector('#turn');

let close = document.querySelector('#close');
let again = document.querySelector('#again');

let winnerWindow = document.querySelector('.winner');
let winnerEffect = document.querySelector('#winnerEffect');
let result = document.querySelector('#result');
let winnerDisplay = document.querySelector('.winnerDisplay');

let playerScore = document.querySelector('#player');
let computerScore = document.querySelector('#computer');
let draw = document.querySelector('#draw');




for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
        if (cells[i].innerHTML == '') {
            if (turn == 'X') {
                turnX(i);
                setTimeout(() => { computer(); }, 1000)
            }
        }
    }
    )
}



function turnX(i) {
    if (turn == 'X') {
        turnChange.classList.remove('onOff')
        turn = 'O';
        setTimeout(() => { cells[i].innerHTML = 'X'; }, 200)
        setTimeout(() => { winner() }, 700);
        setTimeout(() => {
            if (turn == 'winner') {
                winnerEffect.style.display = "block"
                winnerDisplay.classList.add('dispalyPage');
                setTimeout(() => { winnerWindow.style.display = "block" }, 5000)

                playerScore.classList.add('onOff')
                playerScore.innerHTML = Number(playerScore.innerHTML) + 1
            }



        }, 800);
    }
}



function computer() {
    if (cells[0].innerHTML == cells[1].innerHTML && cells[0].innerHTML != '' && cells[2].innerHTML == '') {
        typingO(2);
    } else if (cells[0].innerHTML == cells[2].innerHTML && cells[0].innerHTML != '' && cells[1].innerHTML == '') {
        typingO(1);

    }
    else if (cells[2].innerHTML == cells[1].innerHTML && cells[2].innerHTML != '' && cells[0].innerHTML == '') {
        typingO(0);
    }
    else if (cells[3].innerHTML == cells[4].innerHTML && cells[3].innerHTML != '' && cells[5].innerHTML == '') {
        typingO(5);
    }
    else if (cells[5].innerHTML == cells[4].innerHTML && cells[5].innerHTML != '' && cells[3].innerHTML == '') {
        typingO(3);
    }
    else if (cells[5].innerHTML == cells[3].innerHTML && cells[5].innerHTML != '' && cells[4].innerHTML == '') {
        typingO(4);
    }
    else if (cells[6].innerHTML == cells[7].innerHTML && cells[6].innerHTML != '' && cells[8].innerHTML == '') {
        typingO(8);
    }
    else if (cells[6].innerHTML == cells[8].innerHTML && cells[6].innerHTML != '' && cells[7].innerHTML == '') {
        typingO(7);
    }
    else if (cells[8].innerHTML == cells[7].innerHTML && cells[8].innerHTML != '' && cells[6].innerHTML == '') {
        typingO(6);
    }
    else if (cells[0].innerHTML == cells[3].innerHTML && cells[0].innerHTML != '' && cells[6].innerHTML == '') {
        typingO(6);
    }
    else if (cells[0].innerHTML == cells[6].innerHTML && cells[0].innerHTML != '' && cells[3].innerHTML == '') {
        typingO(3);
    }
    else if (cells[3].innerHTML == cells[6].innerHTML && cells[3].innerHTML != '' && cells[0].innerHTML == '') {
        typingO(0);
    }
    else if (cells[1].innerHTML == cells[4].innerHTML && cells[1].innerHTML != '' && cells[7].innerHTML == '') {
        typingO(7);
    }
    else if (cells[1].innerHTML == cells[7].innerHTML && cells[1].innerHTML != '' && cells[4].innerHTML == '') {
        typingO(4);
    }
    else if (cells[7].innerHTML == cells[4].innerHTML && cells[4].innerHTML != '' && cells[1].innerHTML == '') {
        typingO(1);
    }
    else if (cells[2].innerHTML == cells[5].innerHTML && cells[2].innerHTML != '' && cells[8].innerHTML == '') {
        typingO(8);
    }
    else if (cells[2].innerHTML == cells[8].innerHTML && cells[2].innerHTML != '' && cells[5].innerHTML == '') {
        typingO(5);
    }
    else if (cells[8].innerHTML == cells[5].innerHTML && cells[5].innerHTML != '' && cells[2].innerHTML == '') {
        typingO(2);
    }
    else if (cells[0].innerHTML == cells[4].innerHTML && cells[0].innerHTML != '' && cells[8].innerHTML == '') {
        typingO(8);
    }
    else if (cells[0].innerHTML == cells[8].innerHTML && cells[0].innerHTML != '' && cells[4].innerHTML == '') {
        typingO(4);
    }
    else if (cells[8].innerHTML == cells[4].innerHTML && cells[8].innerHTML != '' && cells[0].innerHTML == '') {
        typingO(0);

    }
    else if (cells[2].innerHTML == cells[4].innerHTML && cells[2].innerHTML != '' && cells[6].innerHTML == '') {
        typingO(6);

    }
    else if (cells[2].innerHTML == cells[6].innerHTML && cells[2].innerHTML != '' && cells[4].innerHTML == '') {
        typingO(4);

    }
    else if (cells[6].innerHTML == cells[4].innerHTML && cells[6].innerHTML != '' && cells[2].innerHTML == '') {
        typingO(2);
    }
    else if (cells[4].innerHTML == '') {
        typingO(4);
    }
    else if (cells[0].innerHTML == '') {
        typingO(0);
    }
    else if (cells[2].innerHTML == '') {
        typingO(2);
    }
    else if (cells[8].innerHTML == '') {
        typingO(8);
    }
    else if (cells[6].innerHTML == '') {
        typingO(6);
    }
    else if (cells[3].innerHTML == '') {
        typingO(3);
    }
    else if (cells[5].innerHTML == '') {
        typingO(5);

    }
    else if (cells[7].innerHTML == '') {
        typingO(7);

    } else if (cells[1].innerHTML == '') {
        typingO(1);

    } else {
        turnChange.classList.remove('onOff');
        turn = 'draw';
        turnChange.classList.add('onOff');
        draw.classList.add('onOff');
        turnChange.innerHTML = 'DRAW';
        result.innerHTML = turnChange.innerHTML
        draw.innerHTML = Number(draw.innerHTML) + 1;
        winnerDisplay.classList.add('dispalyPage');
        setTimeout(() => { winnerWindow.style.display = 'block'; }, 1500)


    }
}



function typingO(o) {
    if (turn == 'O') {
        turnChange.classList.add('onOff')
        turnChange.innerHTML = 'O TURN';
        setTimeout(() => { cells[o].innerHTML = 'O'; }, 1500);
        setTimeout(() => {turnChange.classList.remove('onOff')}, 2400);
        setTimeout(() => { winner() }, 2500);
        setTimeout(() => {
            if (turn == 'O') {
                turnChange.classList.add('onOff')
                turnChange.innerHTML = 'X TURN';
                setTimeout(() => { turn = 'X' }, 200);
            } else if (turn = 'winner') {
                computerScore.innerHTML = Number(computerScore.innerHTML) + 1
                computerScore.classList.add('onOff')
                winnerDisplay.classList.add('dispalyPage');
                setTimeout(() => { winnerWindow.style.display = "block" }, 1500)
            }
        }, 2800)
    }
}

function winnerStatus(x, y, z) {
    turn = 'winner'
    turnChange.classList.add('onOff');
    turnChange.innerHTML = cells[x].innerHTML + ' WINNER'
    result.innerHTML = turnChange.innerHTML
    cells[x].classList.replace('cell', 'cellWinner')
    cells[y].classList.replace('cell', 'cellWinner')
    cells[z].classList.replace('cell', 'cellWinner')
}

function winner() {

    if (cells[0].innerHTML == cells[1].innerHTML && cells[1].innerHTML == cells[2].innerHTML && cells[0].innerHTML != '') {
        winnerStatus(0, 1, 2);
    }
    else if (cells[3].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[5].innerHTML && cells[3].innerHTML != '') {
        winnerStatus(3, 4, 5);
    }
    else if (cells[6].innerHTML == cells[7].innerHTML && cells[7].innerHTML == cells[8].innerHTML && cells[6].innerHTML != '') {
        winnerStatus(6, 7, 8);
    }
    else if (cells[0].innerHTML == cells[3].innerHTML && cells[3].innerHTML == cells[6].innerHTML && cells[0].innerHTML != '') {
        winnerStatus(0, 3, 6);
    }
    else if (cells[1].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[7].innerHTML && cells[1].innerHTML != '') {
        winnerStatus(1, 4, 7);
    }
    else if (cells[2].innerHTML == cells[5].innerHTML && cells[5].innerHTML == cells[8].innerHTML && cells[2].innerHTML != '') {
        winnerStatus(2, 5, 8);
    }
    else if (cells[0].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[8].innerHTML && cells[0].innerHTML != '') {
        winnerStatus(0, 4, 8);
    }
    else if (cells[2].innerHTML == cells[4].innerHTML && cells[4].innerHTML == cells[6].innerHTML && cells[2].innerHTML != '') {
        winnerStatus(2, 4, 6);
    }
}

// AFTER REASULT
close.addEventListener('click', () => {
    winnerWindow.style.display = 'none';
})

again.addEventListener('click', () => {
    winnerWindow.style.display = 'none';
    winnerEffect.style.display = 'none';
    turnChange.innerHTML = 'X TURN';
    turn = 'X'
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].classList.replace('cellWinner', 'cell')
        playerScore.classList.remove('onOff');
        computerScore.classList.remove('onOff');
        draw.classList.remove('onOff');
        winnerDisplay.classList.remove('dispalyPage');


    }
})
