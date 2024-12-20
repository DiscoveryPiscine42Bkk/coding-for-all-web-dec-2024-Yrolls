$(document).ready(function () {
    // โหลด To-Do เมื่อหน้าเว็บเปิด
    loadToDo();

    // เพิ่ม To-Do ใหม่เมื่อคลิกปุ่ม
    $("#newBtn").click(function () {
        const todoText = prompt("Enter your TO DO:");
        if (todoText && todoText.trim() !== "") {
            addToDo(todoText);
            saveToDo();
        }
    });

    // ฟังก์ชันเพิ่ม To-Do
    function addToDo(text) {
        const $toDo = $("<div>").text(text);
        $toDo.click(function () {
            deleteToDo($(this));
        });
        $("#ft_list").prepend($toDo); // เพิ่มที่ด้านบนสุด
    }

    // ฟังก์ชันลบ To-Do
    function deleteToDo($element) {
        if (confirm("Do you really want to delete this TO DO?")) {
            $element.remove();
            saveToDo();
        }
    }

    // บันทึก To-Do ลงคุกกี้
    function saveToDo() {
        const toDoArray = [];
        $("#ft_list div").each(function () {
            toDoArray.push($(this).text());
        });
        document.cookie = "todo=" + JSON.stringify(toDoArray) + ";path=/";
    }

    // โหลด To-Do จากคุกกี้
    function loadToDo() {
        const cookie = document.cookie.split("; ").find(row => row.startsWith("todo="));
        if (cookie) {
            const toDoArray = JSON.parse(cookie.split("=")[1]);
            toDoArray.forEach(text => addToDo(text));
        }
    }
});