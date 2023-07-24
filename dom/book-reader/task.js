const fontSizeButtons = document.querySelectorAll('.font-size');
const textContainer = document.getElementById('book');
const disableButtons = () => {
    fontSizeButtons.forEach(button => {
        button.classList.remove('font-size_active');
    })
}

fontSizeButtons.forEach((button, index) => {
    button.addEventListener('click', (event) => {
        disableButtons();
        button.classList.add('font-size_active');
        let size = button.getAttribute('data-size');
        textContainer.className = size ? `book book_fs-${size}` : 'book';
        event.preventDefault();
    })
})