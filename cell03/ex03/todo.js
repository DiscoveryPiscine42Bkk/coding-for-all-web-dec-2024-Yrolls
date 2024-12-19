// โหลด To-Do List จากคุกกี้เมื่อเปิดหน้าเว็บ
window.onload = () => {
    loadToDo();
};

// ฟังก์ชันเพิ่ม To-Do ใหม่
document.getElementById("newBtn").onclick = () => {
    const todoText = prompt("Enter your TO DO:");
    if (todoText && todoText.trim() !== "") {
        addToDo(todoText);
        saveToDo();
    }
};

// ฟังก์ชันเพิ่ม To-Do ไปที่ DOM
function addToDo(text) {
    const toDoDiv = document.createElement("div");
    toDoDiv.textContent = text;
    toDoDiv.onclick = () => deleteToDo(toDoDiv);
    const list = document.getElementById("ft_list");
    list.insertBefore(toDoDiv, list.firstChild); // เพิ่มที่ด้านบนสุด
}

// ฟังก์ชันลบ To-Do
function deleteToDo(toDoDiv) {
    if (confirm("Do you really want to delete this TO DO?")) {
        toDoDiv.remove();
        saveToDo();
    }
}

// ฟังก์ชันบันทึก To-Do List ลงคุกกี้
function saveToDo() {
    const list = document.querySelectorAll("#ft_list div");
    const toDoArray = [];
    list.forEach(item => toDoArray.push(item.textContent));
    document.cookie = "todo=" + JSON.stringify(toDoArray) + ";path=/";
}

// ฟังก์ชันโหลด To-Do จากคุกกี้
function loadToDo() {
    const cookie = document.cookie.split("; ").find(row => row.startsWith("todo="));
    if (cookie) {
        const toDoArray = JSON.parse(cookie.split("=")[1]);
        toDoArray.forEach(item => addToDo(item));
    }
}