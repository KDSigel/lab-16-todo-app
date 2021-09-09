const USERDATA = 'USERDATA';

export function setUser(userData) {
    const stringyArray = JSON.stringify(userData);
    localStorage.setItem(USERDATA, stringyArray);
}

export function getUser() {
    const stringyUser = localStorage.getItem(USERDATA);
    return JSON.parse(stringyUser);
}

//return an array of todos
export function getTodos() {
    const { todos } = getUser();
    return todos;
}

//put the todos in the right place in local storage
export function setTodos(todos) {    
    const user = getUser();
    user.idgenerator++;
    user.todos = todos;
    setUser(user);
}

//create a todo using this message and put it into local storage
export function addTodo(description) {
    const todos = getTodos();
    const { idgenerator } = getUser();

    const newTodo = {
        id: idgenerator,
        todo: description,
        finished: false,
    };
    todos.push(newTodo);
    setTodos(todos);
}

export function completeTodo() {

}