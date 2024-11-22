$(document).ready(function(){
    $("#toggleBtn").click(function(){
        $(".navbar").toggleClass("collapsed"); 
        
        var icon = $(this).find("i");
        if ($(".navbar").hasClass("collapsed")) {
            icon.removeClass("fa-chevron-left").addClass("fa-chevron-right");
            $(this).text("Mở Rộng");
        } else {
            icon.removeClass("fa-chevron-right").addClass("fa-chevron-left");
            $(this).text("Thu gọn");
        }
    });
});

// Hàm hiển thị hoặc ẩn form thông tin nhân viên
function toggleModal() {
    const modal = document.getElementById("employee-form-modal");
    const overlay = document.getElementById("overlay");
    const addButton = document.getElementById("add-employee-btn");

    // Kiểm tra modal hiện tại đang hiển thị hay không
    if (modal.classList.contains("show")) {
        // Nếu modal đang hiển thị, ẩn modal và overlay, hiển thị lại nút "Thêm nhân viên"
        modal.classList.remove("show");
        overlay.classList.remove("show");
        addButton.style.display = "block"; // Hiển thị lại button khi đóng modal
    } else {
        // Nếu modal chưa hiển thị, hiển thị modal và overlay, ẩn button "Thêm nhân viên"
        modal.classList.add("show");
        overlay.classList.add("show");
        addButton.style.display = "none"; // Ẩn button "Thêm nhân viên"
    }
}

// Khi nhấp vào lớp phủ (overlay), đóng modal và ẩn lớp phủ
document.getElementById("overlay").addEventListener("click", toggleModal);

