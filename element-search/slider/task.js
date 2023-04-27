const sliders = [...document.getElementsByClassName("slider__item")];
const dots = [...document.getElementsByClassName("slider__dot")];
const slidersLength = sliders.length;

const disableActiveSliderAndDot = () => {
    sliders[activeSliderNumber].className = "slider__item";
    dots[activeSliderNumber].className = "slider__dot";
}
const activateNextSliderAndDot = () => {
    sliders[activeSliderNumber].className = "slider__item slider__item_active";
    dots[activeSliderNumber].className = "slider__dot slider__dot_active";
}

let activeSliderNumber = 0;

document.querySelector(".slider__arrow_prev").onclick = () => {
    disableActiveSliderAndDot();
    if (activeSliderNumber === 0) {
        activeSliderNumber = slidersLength - 1;
    } else {
        activeSliderNumber--;
    }
    activateNextSliderAndDot();
}

document.querySelector(".slider__arrow_next").onclick = () => {
    disableActiveSliderAndDot();
    if (activeSliderNumber === slidersLength - 1) {
        activeSliderNumber = 0
    } else {
        activeSliderNumber++;
    }
    activateNextSliderAndDot();
}

dots.forEach((dot, index) => {
    dot.onclick = () => {
        disableActiveSliderAndDot();
        activeSliderNumber = index;
        activateNextSliderAndDot();
    }
})

dots[activeSliderNumber].className = "slider__dot slider__dot_active";