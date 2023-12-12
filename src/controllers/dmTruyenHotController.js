const connection = require('../config/database');
const { getAllSP, getSPHot } = require('../services/CRUDhome');

const getTruyenHot = async (req, res) => {
        var sessions = req.session;
        let email = sessions.email
        let loggedIn = sessions.loggedIn

        let results = await getSPHot();
        res.render('TruyenHot.ejs', { listSP: results , logIn: loggedIn, email })
    }



module.exports = {
    getTruyenHot
}