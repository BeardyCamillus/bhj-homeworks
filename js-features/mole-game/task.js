const getHole = index => document.getElementById(`hole${index}`),
    resetCounters = () => {
        dead.textContent = 0;
        lost.textContent = 0;
    },
    dead = document.getElementById("dead"),
    lost = document.getElementById("lost")

for (let index = 1; index <= 9; index++) {
    getHole(index).onclick = () => {
        if (getHole(index).className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1;
            if (dead.textContent === "10") {
                window.alert("Победа!");
                resetCounters();
            }
        } else {
            lost.textContent = Number(lost.textContent) + 1;
            if (lost.textContent === "5") {
                window.alert("Вы проиграли!");
                resetCounters();
            }
        }
    }
}

