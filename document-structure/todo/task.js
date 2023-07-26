const tasksContainer = document.getElementById('tasks');
const input = document.querySelector('input');
const form = document.getElementById('tasks__form');
const taskRemovers = document.querySelectorAll('.task__remove');

form.addEventListener('submit', (event) => {
    if (String(input.value).trim().length > 0) {
        let task = `<div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`;
        tasksContainer.insertAdjacentHTML('beforeend', task);
        input.value = '';
        tasksContainer.lastChild.querySelector('.task__remove').addEventListener('click', (event) => {
            event.currentTarget.closest('.task').remove();
        })
        event.preventDefault();
    }
})


