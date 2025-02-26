const express = require('express');
const router = express.Router(); // instead of defining everything in server.js, we can write APIs in dedicated files, it is cleaner and more manageable, later we can export the whole and use it in server.js.
const { body } = require('express-validator');
const userController = require('../controllers/user.controllers');
const authMiddleware=require('../middlewares/auth.middleware')

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 8 characters long')
], userController.registerUser);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters long')

],
userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile);
router.get('/logout',authMiddleware.authUser,userController.logoutUser) 
module.exports = router;

