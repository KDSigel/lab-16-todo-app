import { addTodo, setTodos, getTodos, getUser, setUser } from '../local-storage-utils.js';
import { renderListItems } from './render-list-items.js';

renderListItems();

const inputForm = document.getElementById('input-new');

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(inputForm);
    const newDescription = data.get('new-description');
    addTodo(newDescription);

    renderListItems();
    inputForm.reset();
});

