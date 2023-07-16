const revealElements = document.querySelectorAll('.reveal');

const isInViewport = (element) => {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    return elementTop < viewportHeight && elementBottom > 0 ? true : false;
}

window.onscroll = function () {
    revealElements.forEach(element => {
        isInViewport(element) ? element.className = 'reveal reveal_active' :
            element.className = 'reveal';
    })
}    