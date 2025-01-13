let timer;
let score = 0;
let hitrn = 0;
let timerint;

const startButton = document.querySelector('#start-button');
const pbtm = document.querySelector('#pbtm');
const timerval = document.querySelector('#timerval');
const hitval = document.querySelector('#hitval');
const scoreval = document.querySelector('#scoreval');

function clearHit() {
    hitval.textContent = '';
}

function makeBubble() {
    let clutter = '';
    for (let i = 1; i <= 108; i++) {
        const rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    pbtm.innerHTML = clutter;
}

function runTimer() {
    clearInterval(timerint); // Clear any existing timer interval
    timerint = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerval.textContent = timer;
        } else {
            clearInterval(timerint);
            pbtm.innerHTML = `<h1>GAME OVER</h1> <h3>YOUR SCORE: ${score}</h3>`;
            clearHit(); // Clear the hit value when the game is over
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    hitval.textContent = hitrn;
}

function increaseScore() {
    score += 10;
    scoreval.textContent = score;
}

pbtm.addEventListener('click', (details) => {
    const clickednum = Number(details.target.textContent);
    if (clickednum === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

startButton.addEventListener('click', () => {
    // Reset the game variables
    timer = 60;
    score = 0;
    scoreval.textContent = score;
    timerval.textContent = timer;
    clearHit();
    makeBubble();
    runTimer();
    getNewHit();
});

// Clear the initial hit value when the page loads
clearHit();
