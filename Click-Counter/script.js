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
    }
});

resetBtn.addEventListener("click", function () {
    if (countTrack > 0) {
        countTrack = 0;
    }
    message.textContent = "";
    updateCounter();
});
