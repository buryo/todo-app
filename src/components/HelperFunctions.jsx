// Function to delete one single todo (id of Todo : array of Todos)

export const todoDeleter = (id) => {
    const todos = JSON.parse(localStorage.getItem("Todos")) || '';
    const newTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('Todos', JSON.stringify(newTodos));
    return newTodos;
};

// Function to set a task to 'completed'
export const todoApprover = (id) => {
    const todos = JSON.parse(localStorage.getItem("Todos")) || '';
    todos.find(todo => todo.id === id).completed = true;
    localStorage.setItem('Todos', JSON.stringify(todos));
    return todos;
}

// Function to edit one single todo (id of Todo : array of Todos)
export const todoEditor = (id) => {
    const todos = JSON.parse(localStorage.getItem("Todos")) || '';
    const todoTitle = todos.find(todo => todo.id === id).title || '';
    const promptInput = prompt('Todo title', todoTitle);

    // Check if input is not null and not empty. Change Todo title to input value and return all Todos.
    if (promptInput !== null && promptInput.length > 0) {
        todos.find(todo => todo.id === id).title = promptInput;
        localStorage.setItem('Todos', JSON.stringify(todos));
        return todos;
    }
    return todos;
}

// Check if 'Todos' key exist in localStorage, if not: it will create one
export const createEmptyTodos = () => {
    const todosExist = localStorage.getItem('Todos')
    if (todosExist === null) {
        localStorage.setItem('Todos', '[]');
    }
}

// Order by ascending
export const orderByAscending = (array, property) => {
    return array.sort((a, b) => (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0));
}

// Order by descending
export const orderByDescending = (array, property) => {
    return array.sort((a, b) => (a[property] > b[property]) ? -1 : ((b[property] > a[property]) ? 1 : 0));
}

export const onlyGetTodosForToday = (todos) => {
    return todos.filter(todo => todo.date === (new Date().toISOString().split('T')[0]))
}