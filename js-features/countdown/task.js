
const timer = document.getElementById("timer");

const counter = function () {
    if (timer.textContent === "0") {
        window.alert("Вы победили в конкурсе!");
    } else {
        timer.textContent = timer.textContent - 1;
    }
}

setInterval(counter, 1000);

