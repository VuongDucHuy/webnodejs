const connection = require('../config/database');

const getLogin = (req, res) => {
    res.render('LOGIN/login.ejs')
}

// đăng ký
const dangKyKH = async (req, res) => {
    let username = req.body.name_dky;
    let password = req.body.password_dky;
    let email = req.body.email_dky;
    let sdt = req.body.sdt_dky;

    if (email && password && username && sdt) {
        try {
            const [results, fields] = await connection.query('SELECT Email FROM NguoiDung WHERE Email = ?', [email])

            if (results.length > 0) {

                res.status(400).send('Tài khoản đã tồn tại!')

            } else {

                const [insertResults, insertFields] = await connection.query(
                    `INSERT INTO NguoiDung(Email, Ten, MatKhau, SoDienThoai) VALUES(?,?,?,?)`,
                    [email, username, password, sdt]
                )

                if (insertResults.affectedRows === 1) {
                    res.status(200).send('Đăng ký thành công!')

                } else {
                    res.status(500).send('Lỗi trong quá trình xử lý đăng ký.')
                }
            }

        } catch (error) {
            console.error("Lỗi truy vấn:", error)
            res.status(500).send('Lỗi trong quá trình xử lý đăng ký.')

        } finally {
            res.end()
        }

    } else {
        res.status(400).send('Hãy nhập tài khoản và mật khẩu!')
        res.end()
    }
}

// đăng nhập
const dangNhapKH = async (req, res) => {
    let email = req.body.email_dnhap;
    let password = req.body.password_dnhap;
    var sessions 

    if (email && password) {
        try {
            const [results, fields] = await connection.query('SELECT Email, MatKhau FROM NguoiDung WHERE Email = ? AND MatKhau = ?', [email, password])

            if (results.length > 0) {
                // Authenticate the user
                req.session.loggedIn = true
                req.session.email = email
                sessions=req.session;

                res.redirect('/');
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

////// dang xuat
const dangXuat = (req, res) => {
    req.session.destroy(err => {
      if (err) {
        console.error("Lỗi khi đăng xuất:", err);
        res.status(500).send('Lỗi khi đăng xuất');
      } else {
        res.redirect('/'); // Chuyển hướng về trang chính sau khi đăng xuất
      }
    });

    console.log(req.session.destroy());
}


module.exports = {
    getLogin, dangKyKH, dangNhapKH, dangXuat
}