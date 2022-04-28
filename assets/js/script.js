const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
let score = document.querySelector("#score");
let moleTimerId;


function randomSquare() {
    
    square.forEach(square => {
        square.classList.remove('mole');
    })
    
    let  randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add("mole");
}

function moveMole(){
    moleTimerId = setInterval(randomSquare, 1000);
}

moveMole();