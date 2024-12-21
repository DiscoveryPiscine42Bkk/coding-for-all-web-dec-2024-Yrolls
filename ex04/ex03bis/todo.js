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

    // ฟังก์ชันบันทึก To-Do List ลงในคุกกี้
    function saveToDo() {
        const list = document.querySelectorAll("#ft_list div"); // ดึงรายการ To-Do ทั้งหมด
        const toDoArray = []; // อาร์เรย์สำหรับเก็บข้อความของ To-Do
        list.forEach(item => toDoArray.push(item.textContent)); // เพิ่มข้อความของแต่ละ To-Do ลงในอาร์เรย์
        document.cookie = "todo=" + encodeURIComponent(JSON.stringify(toDoArray)) + ";path=/"; 
    // บันทึกอาร์เรย์ลงในคุกกี้ โดยแปลงเป็น JSON และเข้ารหัส
}

    // ฟังก์ชันโหลด To-Do จากคุกกี้
    function loadToDo() {
        const cookie = document.cookie.split("; ").find(row => row.startsWith("todo=")); 
        // ดึงข้อมูลคุกกี้ที่ชื่อ "todo"
        if (cookie) {
            const toDoArray = JSON.parse(decodeURIComponent(cookie.split("=")[1])); 
            // แปลงข้อมูลจาก JSON ที่เข้ารหัสกลับมาเป็นอาร์เรย์
            toDoArray.reverse().forEach(item => addToDo(item)); 
            // เพิ่ม To-Do แต่ละรายการกลับ (เพิ่มในลำดับจากบนลงล่าง)
        }
    }})