const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalCloseElements = Array.from(document.getElementsByClassName("modal__close"));
const showSuccessButton = document.querySelector(".show-success")

modalMain.className = "modal modal_active";

modalCloseElements.forEach(element => element.onclick = () => {
    modalMain.className = "modal";
    modalSuccess.className = "modal";
})

showSuccessButton.onclick = () => {
    modalMain.className = "modal";
    modalSuccess.className = "modal modal_active";
}
