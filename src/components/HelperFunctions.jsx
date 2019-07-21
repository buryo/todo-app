// Function to delete one single todo (id of Todo : array of Todos)
export const todoDeleter = (id) => {
    const todos = JSON.parse(localStorage.getItem("Todos")) || '';
    const newTodos = todos.filter(todo => todo.id !== id);
    localStorage.setItem('Todos', JSON.stringify(newTodos));
    return newTodos;
};

// Function to edit one single todo (id of Todo : array of Todos)
export const todoEditor = (id, todo) => {
    // ...
}