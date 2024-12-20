$(document).ready(function () {
    // ฟังก์ชันสำหรับเพิ่มรายการใหม่
    function addTodo() {
        // รับข้อความจากผู้ใช้
        const todoText = prompt("Enter your new to-do:");

        // ถ้าผู้ใช้ป้อนข้อความ
        if (todoText) {
            // สร้าง div สำหรับรายการใหม่
            const newTodo = $("<div></div>")
                .text(todoText)
                .css({
                    padding: "10px",
                    margin: "5px 0",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    backgroundColor: "#f9f9f9",
                    cursor: "pointer",
                })
                .click(function () {
                    // ลบรายการเมื่อคลิก
                    if (confirm("Are you sure you want to delete this item?")) {
                        $(this).remove();
                    }
                });

            // เพิ่มรายการใหม่ที่ด้านบนของรายการ
            $("#ft_list").prepend(newTodo);
        }
    }

    $("#newBtn").click(function () {
        addTodo();
    });
});