const express = require('express');
const { getHomepage, getCua1, getCua2, postCreateUser, GetCreatePage, GetUpdatePage, postUpdateUser } = require('../controllers/homeController');
const router = express.Router();


router.get('/', getHomepage)

router.get('/cua1', getCua1)

router.get('/cua2', getCua2)

router.get('/cua3', getCua2)

router.get('/create', GetCreatePage)
router.get('/update/:id', GetUpdatePage)

router.post('/create-user', postCreateUser);
router.post('/update-user', postUpdateUser);

module.exports = router;