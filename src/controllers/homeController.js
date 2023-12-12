const connection = require('../config/database');
const { getAllUsers, } = require('../services/CRUDService');

const hienThiSP = async (req, res) => {
    let results = await getAllUsers();
    res.render('TrangChu.ejs', { listUsers: results })
}




const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    res.render('TrangChu.ejs', { listUsers: results })
}

const getCua1 = (req, res) => {
    res.render('shopping-cart.ejs')
}

const getCua2 = (req, res) => {
    res.render('detail.ejs')
}



const postCreateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;

    console.log(">>> email = ", email, 'name = ', name, 'city = ', city);

    // let {email, name, city} = req.body;

    // connection.query(
    //     `    INSERT INTO 
    // Users(email, name, city)
    // VALUES (?, ?, ?)`,
    //     [email, name, city],
    //     function (err, results) {
    //         console.log(results);
    //         res.send(' Create user succeed! ')
    //     }
    // );

    let [results, fields] = await connection.query(
        `    INSERT INTO 
    Users(email, name, city)
    VALUES (?, ?, ?)`, [email, name, city],
    );

    res.send(' Create user succeed! ')
    // const [results, fields] = await connection.query('select * from Users u');
}

const GetCreatePage = (req, res) => {
    res.render('create.ejs')
}

const GetUpdatePage = async (req, res) => {
    const userId = req.params.id;

    let user = await getUserById(userId);

    res.render('edit.ejs', { userEdit: user })
}

const postUpdateUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
    let userId = req.body.userId;

    await updateUserById(email, name, city, userId)

    // res.send(' Updated user succeed! ')

    // const [results, fields] = await connection.query('select * from Users u');

    res.redirect('/');
}

module.exports = {
    getHomepage, getCua1, getCua2, postCreateUser, GetCreatePage, GetUpdatePage, postUpdateUser,
    hienThiSP
}