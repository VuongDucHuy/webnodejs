const connection = require('../config/database');
const { getSPNew } = require('../services/CRUDhome');

const getTruyenNew = async (req, res) => {
    var sessions = req.session;
        let email = sessions.email
        let loggedIn = sessions.loggedIn
        let results = await getSPNew();
        res.render('TruyenNew.ejs', { listSP: results , logIn: loggedIn, email })
    }

module.exports = {
    getTruyenNew
}