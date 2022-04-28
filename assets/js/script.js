const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
let score = document.querySelector("#score");
let moleTimerId;
const timeLeft = document.querySelector("#time-left");

let hitPosition;
let result = 0;
let currentTime = 60;


function randomSquare() {
    
    square.forEach(square => {
        square.classList.remove('mole');
    })
    
    let  randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");

    hitPosition = randomPosition.id;
}

square.forEach(square => {
    square.addEventListener("mousedown", () => {
        if(square.id == hitPosition) {
            result = result + 1;
            score.textContent = result;
        }
    }, { once:true })
});


function moveMole(){
    moleTimerId = setInterval(randomSquare, 1000);
}

moveMole();

function countDown () {
    currentTime--;
    timeLeft.textContent = currentTime;

    if( currentTime === 0 ){
        clearInterval(timerId);
        clearInterval(moleTimerId);
        window.alert("GAME OVER! Your final score is" + result);
    }
};

let timerId = setInterval(countDown, 1000);