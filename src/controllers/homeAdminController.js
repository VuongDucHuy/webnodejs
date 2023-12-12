const connection = require('../config/database');
const { getAllSP, getSPById, updateSPById, deleteSPById, getAllKH, getKHById, updateKHById, deleteKHById  } = require("../services/CRUDhome")

const homeAdmin = (req, res) => {
    res.render('ADMIN/homeAdmin.ejs')
}

// KHACH HANG

const QuanLyKH = (req, res) => {
    res.render("ADMIN/quanlyKH.ejs")
}

// hiển thị khách hàng trang quản lý
const hienThiKH_ADMIN = async (req, res) => {

    let allKH = await getAllKH()
    res.render("ADMIN/quanlyKH.ejs", {QLKH: allKH})
}

const getIDKH_Edit = async (req, res) => {

    const idEdit = req.query.idEDIT 

    let EditID = await getKHById(idEdit)

    res.render("ADMIN/editKH.ejs", {editID: EditID})
}

// them moi sp
const themmoiKH = async (req, res) => {

    let idKH = req.body.idKH
    let TaiKhoan = req.body.TaiKhoan
    let MatKhau = req.body.MatKhau
    let Ten = req.body.Ten
    let Email = req.body.Email
    let DiaChi = req.body.DiaChi
    let SDT = req.body.SoDienThoai
    let PhanQuyenID = req.body.PhanQuyenID

    let [results, fields] = await connection.query(
        
            `
            INSERT INTO SanPham (TaiKhoan, MatKhau, Ten, Email, DiaChi, SDT, PhanQuyenID)
            VALUES (?, ?, ?, ?, ?, ?, ?)
            `
        ,
        [TaiKhoan, MatKhau, Ten, Email, DiaChi, SDT, PhanQuyenID]
    )

    //res.send("create thành công")
    res.redirect("/quanlykh")
}

// hiển thị form thêm khách hàng
const formInsertKH = (req, res) => {
    res.render("ADMIN/insertKH.ejs")
}


const QuanLySP = (req, res) => {
    res.render("ADMIN/quanlySP.ejs")
}

// hiển thị sản phẩm trang quản lý
const hienThiSP_ADMIN = async (req, res) => {

    let allSP = await getAllSP()
    res.render("ADMIN/quanlySP.ejs", {QLSP: allSP})
}

// ham nay de update lai sp vua edit
const postUpdateKH = async (req, res) => {

    let idKH = req.body.idKH
    let TaiKhoan = req.body.TaiKhoan
    let MatKhau = req.body.MatKhau
    let Ten = req.body.Ten
    let Email = req.body.Email
    let DiaChi = req.body.DiaChi
    let SDT = req.body.SoDienThoai
    let PhanQuyenID = req.body.PhanQuyenID

    await updateKHById(TaiKhoan, MatKhau, Ten, Email, DiaChi, SDT, PhanQuyenID, idKH )

    //res.send("update thành công")
    res.redirect("/quanlykh")  
}

// lay id de xac nhan xoa khách hàng
const postDeleteKH = async (req, res) => {
    const spId = req.query.idDelete

    let sp = await getKHById(spId)

    res.render("ADMIN/deleteKH.ejs", {spDelete: sp})
}

// xoa khách hàng
const postHandleRemoveKH = async (req, res) => {
    let id = req.body.idRemove

    await deleteKHById(id)

    //res.send("xóa ok")
    //res.redirect("/quanlysp")  
    res.redirect("/quanlykh")
}


// SAN PHAM

const getIDSp_Edit = async (req, res) => {

    const idEdit = req.query.idEDIT 

    let EditID = await getSPById(idEdit)

    res.render("ADMIN/editSP.ejs", {editID: EditID})
}

// ham nay de update lai sp vua edit
const postUpdateSP = async (req, res) => {

    let idSP = req.body.idSP
    let Ten = req.body.tenSP
    let Gia = req.body.giaSP
    let GiaCu = req.body.giacuSP
    let HotNew = req.body.hotnew
    let Mota = req.body.mota
    let Img = req.body.hinhanh
    let Anh1 = req.body.hinhanh1
    let Anh2 = req.body.hinhanh2
    let Anh3 = req.body.hinhanh3
    let IdLoaiSP = req.body.IdLoaiSP
    let SoLuongTon = req.body.SoLuongTon
    let TacGia = req.body.TacGia


    await updateSPById(Ten, Gia, GiaCu, HotNew, Mota, Img, Anh1, Anh2, Anh3, IdLoaiSP, SoLuongTon, TacGia, idSP )

    //res.send("update thành công")
    res.redirect("/quanlysp")  
}

// them moi sp
const themmoiSP = async (req, res) => {

    let Ten = req.body.tenSP
    let Gia = req.body.giaSP
    let GiaCu = req.body.giacuSP
    let HotNew = req.body.hotnew
    let Mota = req.body.mota
    let Img = req.body.hinhanh
    let Anh1 = req.body.hinhanh1
    let Anh2 = req.body.hinhanh2
    let Anh3 = req.body.hinhanh3
    let IdLoaiSP = req.body.IdLoaiSP
    let SoLuongTon = req.body.SoLuongTon
    let TacGia = req.body.TacGia

    let [results, fields] = await connection.query(
        
            `
            INSERT INTO SanPham (Ten, Gia, GiaCu, Hot_New, MoTa, Anh, Anh1, Anh2, Anh3, IDLoaiSanPham, SoLuongTon, TacGia)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `
        ,
        [Ten, Gia, GiaCu, HotNew, Mota, Img, Anh1, Anh2, Anh3, IdLoaiSP, SoLuongTon, TacGia]
    )

    //res.send("create thành công")
    res.redirect("/quanlysp")
}

// hiển thị form thêm sản phẩm
const formInsertSP = (req, res) => {
    res.render("ADMIN/insertSP.ejs")
}

// lay id de xac nhan xoa sp
const postDeleteSP = async (req, res) => {
    const spId = req.query.idDelete

    let sp = await getSPById(spId)

    res.render("ADMIN/deleteSP.ejs", {spDelete: sp})
}

// xoa sp
const postHandleRemoveSP = async (req, res) => {
    let id = req.body.idRemove

    await deleteSPById(id)

    //res.send("xóa ok")
    //res.redirect("/quanlysp")  
    res.redirect("/quanlysp")
}








module.exports = {
    homeAdmin, 
    QuanLySP, hienThiSP_ADMIN, getIDSp_Edit, postUpdateSP,  postDeleteSP, postHandleRemoveSP,  themmoiSP, formInsertSP, 
    
    QuanLyKH, hienThiKH_ADMIN, getIDKH_Edit, postUpdateKH, postDeleteKH, postHandleRemoveKH, themmoiKH, formInsertKH
}