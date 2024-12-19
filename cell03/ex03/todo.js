const todoList = document.getElementById("ft_list");
const newTodoButton = document.getElementById("newTodo");

// Load todos from cookies
function loadTodos() {
    const savedTodos = document.cookie
        .split("; ")
        .find(row => row.startsWith("todos="));
    if (savedTodos) {
        const todos = JSON.parse(decodeURIComponent(savedTodos.split("=")[1]));
        todos.forEach(todo => addTodoToDOM(todo));
    }
}

// Save todos to cookies
function saveTodos() {
    const todos = [];
    document.querySelectorAll(".todo").forEach(todo => {
        todos.push(todo.textContent);
    });
    document.cookie = `todos=${encodeURIComponent(
        JSON.stringify(todos)
    )}; path=/; max-age=31536000`; // 1 year
}

// Add a new todo to the DOM
function addTodoToDOM(todoText) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    todoDiv.textContent = todoText;

    // Remove todo on click
    todoDiv.addEventListener("click", () => {
        if (confirm("Do you want to remove this TO DO?")) {
            todoDiv.remove();
            saveTodos();
        }
    });

    // Add to the top of the list
    todoList.insertBefore(todoDiv, todoList.firstChild);
}

// Add new todo
newTodoButton.addEventListener("click", () => {
    const todoText = prompt("Enter a new TO DO:");
    if (todoText) {
        addTodoToDOM(todoText);
        saveTodos();
    }
});

// Load todos on page load
loadTodos();