import { setUser } from '../local-storage-utils.js';

// import { checkForDatabase } from './check-for-database.js';
// checkForDatabase();

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

    // do something here
    
    setUser(userData);
    window.location = '../todo-list-page';
});