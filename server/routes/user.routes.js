const express = require('express');
const {registerUser, authUser, findAllUsers} = require('../controllers/user.controller');

const router = express.Router();

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/').get(findAllUsers);

module.exports = router;