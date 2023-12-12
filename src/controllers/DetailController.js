const connection = require('../config/database');
const { getSPById, getAllSP } = require('../services/CRUDhome');




const getDetail = async (req, res) => {
    var sessions = req.session;
    let email = sessions.email
    let loggedIn = sessions.loggedIn

    const SPid = req.query.idChiTietSP

    let sanpam = await getSPById(SPid)
    let allsanpam = await getAllSP();

    res.render("detail.ejs", {CTSanPham: sanpam, DetailSP:allsanpam , logIn: loggedIn, email})
}



module.exports = {
    getDetail
}