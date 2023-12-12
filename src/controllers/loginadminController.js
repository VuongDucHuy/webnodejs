const connection = require('../config/database');
const { getByIDAdmin } = require("../services/CRUDhome")

const getLoginAdmin = (req, res) => {
    res.render('LOGIN/loginadmin.ejs')
}



// đăng ký

// đăng nhập
const dangNhapAdmin = async (req, res) => {
    let email = req.body.email_dnhap;
    let password = req.body.password_dnhap;

    if (email && password) {
        try {
            const [results, fields] = await connection.query(`SELECT Email, MatKhau, PhanQuyenID FROM NguoiDung WHERE Email = ? AND MatKhau = ? AND PhanQuyenID = 1` , [email, password])

            if (results.length > 0) {
                // Authenticate the user
                req.session.loggedIn = true
                req.session.email = email

                res.redirect('/homeAdmin');
                //res.send('thành công');

                //return res.render('TrangChu/home.ejs', { loggedIn: true, account });
            } else {
                res.send('Tài khoản hoặc mật khẩu không chính xác!');
            }

        } catch (error) {
            console.error("Lỗi truy vấn:", error)
            res.status(500).send('Lỗi trong quá trình xử lý.')

        } finally {
            res.end()
        }

    } else {
        res.status(400).send('Hãy nhập tài khoản và mật khẩu!')
        res.end()
    }
}

const dangXuatAdmin = (req, res) => {
    req.session = null

    // Redirect to the login page
    res.redirect('/')
}


module.exports = {
    getLoginAdmin, dangNhapAdmin, dangXuatAdmin
}