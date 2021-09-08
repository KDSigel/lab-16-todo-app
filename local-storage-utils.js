
const USERDATA = 'USERDATA';

export function getUser() {
    const stringyUser = localStorage.getItem(USERDATA);
    return JSON.parse(stringyUser);
}

export function setUser() {
    const stringyArray = JSON.stringify(userData);
    localStorage.setItem(USERDATA, stringyArray);
}

export function getTodos() {

}

export function setTodos() {

}

export function addTodo() {

}

export function completeTodo() {

}