const connection = require('../config/database');
const { getSearchSP } = require('../services/CRUDhome');

const searchSP = async (req, res) => {
    var sessions = req.session;
    let email = sessions.email
    let loggedIn = sessions.loggedIn

    let tenSP = req.body.searchSP
    
        let timkiemSP = await getSearchSP(tenSP)
    
        console.log(tenSP);
    
        //res.redirect("TrangChu/timKiem.ejs")
        res.render("searchSP.ejs", {listSearch: timkiemSP , logIn: loggedIn, email})
    }




module.exports = {
    searchSP
}