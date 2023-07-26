const tooltipOwners = document.querySelectorAll('.has-tooltip');

const tooltip = document.createElement('div');
tooltip.className = 'tooltip';

tooltipOwners.forEach(element => {
    element.addEventListener('click', (event) => {
        element.appendChild(tooltip);
        tooltip.textContent = element.getAttribute('title');
        tooltip.classList.add('tooltip_active');
        tooltip.style.left = element.offsetLeft + document.body.scrollLeft + "px";
        event.preventDefault();
    })
})