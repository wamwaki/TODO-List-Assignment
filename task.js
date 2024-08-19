document.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById('submit');
    const newTask = document.getElementById('task');

    submit.disabled = true;

    newTask.addEventListener('input', () => {
        submit.disabled = !newTask.value.trim();
    });

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();

        const task = newTask.value.trim();

        const listItem = document.createElement('li');
        listItem.textContent = task;

        document.getElementById('tasks').appendChild(listItem);

        newTask.value = '';

        submit.disabled = true;

        return false;
    });
});