let activeCase = 0;
const cases = document.querySelectorAll('.rotator__case');

function changeCase() {
    cases[activeCase].className = 'rotator__case';
    cases[activeCase].nextElementSibling ? activeCase++ : activeCase = 0;
    cases[activeCase].className = 'rotator__case rotator__case_active';
}

setInterval(changeCase, 1000);