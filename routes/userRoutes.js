const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');
console.log("add console in routes")
router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/users',  userController.getAllUsers);

module.exports = router;
