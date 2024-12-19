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
    )}; path=/; max-age=31536000`; 
}

function addTodoToDOM(todoText) {
    const todoDiv = document.createElement("div");
    todoDiv.className = "todo";
    todoDiv.textContent = todoText;

    todoDiv.addEventListener("click", () => {
        if (confirm("Do you want to remove this TO DO?")) {
            todoDiv.remove();
            saveTodos();
        }
    });

    todoList.insertBefore(todoDiv, todoList.firstChild);
}

newTodoButton.addEventListener("click", () => {
    const todoText = prompt("Enter a new TO DO:");
    if (todoText) {
        addTodoToDOM(todoText);
        saveTodos();
    }
});

loadTodos();