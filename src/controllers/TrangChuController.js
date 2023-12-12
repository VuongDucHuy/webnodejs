const connection = require('../config/database');
const { getAllSP} = require('../services/CRUDhome');

const HienThiSP = async (req, res) => {
    var sessions = req.session;
    let email = sessions.email
    let loggedIn = sessions.loggedIn

    let results = await getAllSP();
    res.render('TrangChu.ejs', { listSP: results , logIn: loggedIn, email})
}




const getTruyen1 = (req, res) => {
    res.render('cua.ejs')
}

module.exports = {
    HienThiSP, getTruyen1
}