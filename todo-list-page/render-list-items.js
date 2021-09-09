import { getTodos, completeTodo } from '../local-storage-utils.js';

const fullList = document.getElementById('full-list');

export function renderListItems() {
    fullList.textContent = '';
// get all the lists data    
    const listItems = getTodos();
// run through each entry
    for (let todo of listItems) {
// create a list item to hold a div and button that = id
        const li = document.createElement('li');

// create a div and button elements
        const div = document.createElement('div');
        const toggleBtn = document.createElement('button');

// for the div element, plug in a single description
        div.textContent = todo.todo;

//for the button element, plug in corresponding finished value
        toggleBtn.textContent = 'finish';
        toggleBtn.addEventListener('click', () => {
            completeTodo(todo.id);
            renderListItems();
        });

// add what to do if list is done
        if (todo.finished === true) {
            div.style.color = 'rgba(55, 55, 55, 0.4)';
            toggleBtn.disabled = true;
        }

// add items to list
        li.append(toggleBtn);
        li.append(div);
        fullList.append(li);
    }
}