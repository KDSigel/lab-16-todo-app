import { getTodos } from '../local-storage-utils.js';

const fullList = document.getElementById('full-list');

export function renderListItems() {

    fullList.textContent = '';

// get all the lists data    
    const listItems = getTodos();

// run through each entry
    for (let list of listItems) {

// create a list item to hold a div and button that = id
        const li = document.createElement('li');

// create a div and button elements
        const div = document.createElement('div');
        const toggleBtn = document.createElement('button');

// for the div element, plug in a single description
        div.textContent = list.todo;

//for the button element, plug in corresponding finished value
        toggleBtn.textContent = 'finish';

        li.append(toggleBtn);
        li.append(div);
        fullList.append(li);
    }
}