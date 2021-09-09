import { addTodo, setTodos, getTodos, getUser, setUser } from '../local-storage-utils.js';

const inputForm = document.getElementById('input-new');

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(inputForm);
    const newDescription = data.get('new-description');
    addTodo(newDescription);
});