const Squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const ScoreDisplay = document.querySelector('#score');
const timeLeft = document.querySelector('#time-left');

let result = 0;
let hitposition = null;
let timer = null;
let currentTime = 60;

function RandomSquare(){
    Squares.forEach(square => {
        square.classList.remove('mole');
    });

    let randomSquare = Squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole')
    console.log(randomSquare);
    hitposition = randomSquare.id;
} 

Squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitposition){
            result++;
            hitposition = null;
        }
    })
})

function movemole(){
    timer = setInterval(RandomSquare,1000);
}

movemole();

function countDown(){
    currentTime--;
    timeLeft.textContent = currentTime;
    ScoreDisplay.textContent = result;
    if(currentTime == 0){
        clearInterval(countDownTimerId);
        clearInterval(timer);
        alert("Game Over! Your final score is: " + result);
    }
}

let countDownTimerId = setInterval(countDown,1000);