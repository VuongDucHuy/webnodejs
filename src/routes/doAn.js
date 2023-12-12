const express = require('express');
const router = express.Router();
const { HienThiSP, } = require('../controllers/TrangChuController');
const { getDetail, } = require('../controllers/DetailController');
const { getLogin, dangKyKH, dangNhapKH, dangXuat } = require('../controllers/loginController');
const { getTruyenHot, } = require('../controllers/dmTruyenHotController');
const { getTruyenNew } = require('../controllers/dmTruyenNewController');
const { searchSP } = require('../controllers/searchSPController');
const { getLoginAdmin, dangNhapAdmin } = require('../controllers/loginadminController');
const { homeAdmin, hienThiSP_ADMIN, getIDSp_Edit, postUpdateSP, postDeleteSP,
        postHandleRemoveSP, themmoiSP, formInsertSP, 
        hienThiKH_ADMIN, getIDKH_Edit, postUpdateKH, themmoiKH, formInsertKH, postDeleteKH, postHandleRemoveKH, 
        } = require('../controllers/homeAdminController');

// hiển thị sản phẩm trang chủ 
router.get('/', HienThiSP)

// hiển thị chi tiết sản phẩm
router.get('/detail', getDetail)

// hiển thị truyện hot
router.get('/TruyenHot', getTruyenHot)

// hiển thị truyện new
router.get('/TruyenNew', getTruyenNew)

// form login của khách hàng
router.get('/login', getLogin)

// form login của khách hàng
router.get('/logout', dangXuat)

// form login của admin
router.get('/LoginAdmin', getLoginAdmin)

// đăng kí khách hàng
router.post('/DangKy', dangKyKH)

// đăng nhập khách hàng
router.post('/DangNhap', dangNhapKH)

// tìm sản phẩm
router.post('/SearchSP', searchSP)

// đăng nhập admin
router.post('/loginADMIN', dangNhapAdmin)

// trang home Admin
router.get('/homeAdmin', homeAdmin)

// trang quản lý sản phẩm
router.get('/quanlysp', hienThiSP_ADMIN)

// xu ly lay id edit
router.get('/edit-sp', getIDSp_Edit)

// xu ly save sp
router.post('/edit-sp', postUpdateSP)

// xu ly xoa sp
router.post('/delete-sp', postHandleRemoveSP)

// lay ra form insert
router.get('/insert', formInsertSP)

// xu ly thêm sp
router.post('/insert-sp', themmoiSP)

////////// ROUTES KHACH HANG

// hien thi form khach hang
router.get('/quanlykh', hienThiKH_ADMIN)

// xu ly lay id khach hang khi edit
router.get('/edit-kh', getIDKH_Edit)

// xu ly sua khach hang
router.post('/edit-kh', postUpdateKH)

// lay ra form insert
router.get('/insertkh', formInsertKH)

// xu ly thêm sp
router.post('/insert-kh', themmoiKH)

// lay ra id can xoa
router.post('/delete-khh', postDeleteKH)

// xu ly xoa sp
router.post('/delete-kh', postHandleRemoveKH)




module.exports = router;