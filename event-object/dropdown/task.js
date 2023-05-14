const dropdownLinks = [...document.getElementsByClassName("dropdown__link")];
const dropdownValue = document.querySelector(".dropdown__value");
const dropdown = document.querySelector(".dropdown");
const dropdownList = document.querySelector(".dropdown__list");

function changeListState() {
    dropdownList.className = dropdownList.className === "dropdown__list dropdown__list_active" ?
        "dropdown__list" : "dropdown__list dropdown__list_active";
}

dropdownValue.addEventListener("click", changeListState)

dropdownLinks.forEach(element => {
    element.addEventListener("click", function (event) {
        dropdownValue.textContent = element.textContent;
        element.closest(".dropdown__list").className = "dropdown__list";
        event.preventDefault();
    })
})