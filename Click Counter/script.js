let countTrack = 0;

const plus = document.querySelector(".counter-value");
const message = document.querySelector(".message");

let incBtn = document.querySelector(".btn.plus");
let decBtn = document.querySelector(".btn.minus");
let resetBtn = document.querySelector(".btn.reset");

function updateCounter() {
    plus.textContent = countTrack;
}

incBtn.addEventListener("click", function () {
    if (countTrack < 100) {
        countTrack++;
        updateCounter();
        message.textContent = "";
        incBtn.style.backgroundColor = "limegreen";
    } else {
        message.textContent = "Maximum limit reached!";
    }
});

decBtn.addEventListener("click", function () {
    if (countTrack <= 0) {
        message.textContent = "Counter cannot go below 0!";
    } else {
        countTrack--;
        updateCounter();
        message.textContent = "";
        decBtn.style.backgroundColor = "crimson";
    }
});

resetBtn.addEventListener("click", function () {
    if (countTrack > 0) {
        countTrack = 0;
        resetBtn.style.backgroundColor = "gray";
    }
    message.textContent = "";
    updateCounter();
});






/*------------------------------------------------------------


let countTrack = 0;

const plus = document.querySelector(".current-count");
let incBtn = document.querySelector(".Green");
const message = document.querySelector(".message");

function updateCounter() {
    plus.textContent = "Current Count = " + countTrack;
}

incBtn.addEventListener("click", function () {
    if (countTrack < 10) {
        countTrack++;
        updateCounter();
        incBtn.style.backgroundColor = "limegreen";
    } else {
        message.textContent = "Maximum limit reached!";
    }
});

let decBtn = document.querySelector(".Red");

decBtn.addEventListener("click", function () {
    if (countTrack <= 0) {
        message.textContent = "Counter cannot go below 0!";
    } else {
        countTrack--;
        updateCounter();
        decBtn.style.backgroundColor = "crimson";
    }
});

let resetBtn = document.querySelector(".Black");

resetBtn.addEventListener("click", function () {
    if (countTrack > 0) {
        countTrack = 0;
        resetBtn.style.backgroundColor = "gray";
    }

    updateCounter();
});


*/