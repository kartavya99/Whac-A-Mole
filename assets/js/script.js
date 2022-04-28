const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
let score = document.querySelector("#score");
let moleTimerId;

let hitPosition;
let result = 0;


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