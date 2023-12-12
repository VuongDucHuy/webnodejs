require('dotenv').config();
const express = require('express')
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const doAnRoutes = require('./routes/doAn');
const connection = require('./config/database');
const session = require('express-session');
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//config template engine
configViewEngine(app);

const oneDay = 1000 * 60 * 60 * 24;     // lưu phiên trong 1 ngày

app.use(session({
    secret: 'secret',  // Chuỗi bí mật để mã hóa phiên
    saveUninitialized:true,
    cookie: { maxAge: oneDay },     // đặt thời gian hết hạn của cookie
    resave: false 
}));
app.use(cookieParser());

// khai bao route
app.use('/', doAnRoutes);


// test connection


//simple query 

//




app.listen(port, hostname, () => {
    console.log(`http://localhost:${port}`)
})