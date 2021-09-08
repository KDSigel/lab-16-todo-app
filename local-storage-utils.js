
const USERDATA = 'USERDATA';

export function setUser(userData) {
    const stringyArray = JSON.stringify(userData);
    localStorage.setItem(USERDATA, stringyArray);
}

export function getUser() {
    const stringyUser = localStorage.getItem(USERDATA);
    return JSON.parse(stringyUser);
}

export function getTodos() {

}

export function setTodos() {
    const user = getUser();
}

export function addTodo() {

}

export function completeTodo() {

}