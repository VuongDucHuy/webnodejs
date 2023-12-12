const connection = require("../config/database");
const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from SanPham');
    return results;
}
const getUser = async () => {
    let [results, fields] = await connection.query('select * from NguoiDung');
    return results;
}
// const getUserById = async (userId) => {
//     let [results, fields] = await connection.query('select * from Users where id = ? ', [userId]);

//     let user = results && results.length > 0 ? results[0] : {};

//     return user;
// }

// const updateUserById = async (email, name, city, userId) => {
//     let [results, fields] = await connection.query(
//         `
//         UPDATE Users 
//         SET email = ?, name =?, city = ?
//         where id = ?
//         `, [email, name, city, userId]
//     );
// }

module.exports = {
    getAllUsers, getUser,
} 
 
