let activeCase = 0;
const cases = document.querySelectorAll('.rotator__case');

function changeCase() {
    cases[activeCase].className = 'rotator__case';
    activeCase == cases.length - 1 ? activeCase = 0 : activeCase++;
    cases[activeCase].className = 'rotator__case rotator__case_active';
}

setInterval(changeCase, 1000);