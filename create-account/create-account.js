import { setUser } from '../local-storage-utils.js';

const inputForm = document.querySelector('#input-form');

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(inputForm);

    const newUser = data.get('make-name');

    const password = data.get('mk-pwd');
  
    const userData = {
        name: newUser,
        password: password,
        idgenerator: 0,
        todos: [
        ]
    };
    setUser(userData);
    window.location = '../todo-list-page';
});