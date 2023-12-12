const connection = require("../config/database");

// SAN PHAM

const getAllSP = async () => {
    let [results, fields] = await connection.query('select * from SanPham');
    return results;
}


const getSPById = async (SPid) => {
    let [results, fields] = await connection.query('select * from SanPham where id = ? ', [SPid]);

    let SP = results && results.length > 0 ? results[0] : {};

    return SP;
}

const getSPHot = async () => {
    let [results, fields] = await connection.query('select * from SanPham where Hot_New = "Hot"');
    return results;
}       

const getSPNew = async () => {
    let [results, fields] = await connection.query('select * from SanPham where Hot_New = "New"');
    return results;
}

const getSearchSP = async (tensp) => {
    let [results, fields] = await connection.query(
        `
            select * from SanPham where Ten like ?
        `
        ,
        [`%${tensp}%`]
    )
    return results
}

// hiển thị ra thong tin nguoi dung theo IDPhanQuyen
const getByIDAdmin = async (PhanQuyenID) => {
    let [results, fields] = await connection.query(
        `select PhanQuyenID from NguoiDung where PhanQuyenID = ?`
        ,
        [PhanQuyenID]
    )
    return results
}

// update san pham
const updateSPById = async (Ten, Gia, GiaCu, HotNew, Mota, Img, Anh1, Anh2, Anh3,  IDLoaiSanPham, SoLuongTon, TacGia, ID) => {
    let [results, fields] = await connection.query(
        `
            UPDATE SanPham
            SET Ten = ?, Gia = ?, GiaCu = ?, Hot_New = ?, MoTa = ?, Anh = ?, Anh1 = ?, Anh2 = ?, Anh3 = ?, IDLoaiSanPham = ?, SoLuongTon = ?, TacGia = ?
            WHERE ID = ?
        `,
        [Ten, Gia, GiaCu, HotNew, Mota, Img, Anh1, Anh2, Anh3, IDLoaiSanPham, SoLuongTon, TacGia, ID]
    )
}


const deleteSPById = async (ID) => {

    let [results, fields] = await connection.query(
        `
            DELETE FROM SanPham WHERE ID = ?
        `,
        [ID]
    )
}

// KHACH HANG

const getAllKH = async () => {
    let [results, fields] = await connection.query('select * from NguoiDung');
    return results;
}

const getKHById = async (KHid) => {
    let [results, fields] = await connection.query('select * from NguoiDung where id = ? ', [KHid]);

    let KH = results && results.length > 0 ? results[0] : {};

    return KH;
}

// update khach hang
const updateKHById = async (TaiKhoan, MatKhau, Ten, Email, DiaChi, SDT, PhanQuyenID, ID) => {
    let [results, fields] = await connection.query(
        `
            UPDATE NguoiDung
            SET TaiKhoan = ?, MatKhau = ?, Ten = ?, Email = ?, DiaChi = ?, SoDienThoai = ?, PhanQuyenID = ?
            WHERE ID = ?
        `,
        [TaiKhoan, MatKhau, Ten, Email, DiaChi, SDT, PhanQuyenID, ID]
    )
}

// xoa khach hang
const deleteKHById = async (ID) => {

    let [results, fields] = await connection.query(
        `
            DELETE FROM NguoiDung WHERE ID = ?
        `,
        [ID]
    )
}




module.exports = {
    getAllSP, getSPById, getSPHot, getSPNew, getSearchSP, updateSPById, deleteSPById, getByIDAdmin,
    getAllKH, getKHById, updateKHById, deleteKHById
}