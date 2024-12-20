$(document).ready(function() {
    $("#balloon").click(function() {
        // เปลี่ยนลูกโป่งให้เหมือนระเบิด
        $(this).css({
            width: "0",
            height: "0",
            backgroundColor: "transparent",
            boxShadow: "none"
        });

        // เอาลูกโป่งออกจาก DOM หลังจาก 1 วินาที
        setTimeout(() => {
            $(this).remove();
        }, 1000);
    });
});