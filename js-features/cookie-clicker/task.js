const cookie = document.getElementById("cookie");
const clickerCounter = document.getElementById("clicker__counter");

cookie.onclick = () => {
    if (cookie.width === 250) {
        cookie.width = 200;
    } else {
        cookie.width = 250;
    }
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
}