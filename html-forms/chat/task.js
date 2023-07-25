const chatWidget = document.querySelector('.chat-widget');
const messages = document.getElementById('chat-widget__messages');
const input = document.getElementById('chat-widget__input')
const robotAnswers = ['Здравстуйте, мы работаем над вашим вопросом!', 'Кто тут?', 'Где ваша совесть?']

chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

input.addEventListener('change', () => {
    const date = new Date;
    const time = `${date.getHours()}:${date.getMinutes()}`;
    messages.innerHTML += `
    <div class="message message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">
    ${input.value}
    </div>
  </div>
`;
    input.value = '';
    messages.innerHTML += `
    <div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">
    ${robotAnswers[Math.floor(Math.random() * robotAnswers.length)]}
    </div>
  </div>
`;
})