
function myFunction() {

    alert("Lưu thành công");


    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }
}



function myFunction1() {
    var txt;
    if (confirm("Bạn có chắc chắn muốn xóa Sản Phẩm này?")) {
        // Kiểm tra xem SPP đã được thanh toán chưa
        if (kh.ThanhToan == false) {
            // Xóa dữ liệu
        } else {
            // Hủy thao tác xóa
            alert("SPP đã được thanh toán, không thể xóa.");
        }
    }
    else {
        // Hủy thao tác xóa
    }
}