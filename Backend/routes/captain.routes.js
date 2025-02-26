const captainController = require("../controllers/captain.controller")
const express= require('express')
const router = express.Router()
const {body}= require('express-validator')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/register',[
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({min:3}).withMessage('firstname must be at least 3 characters long'),
    body('vehicle.color').isLength({min:3}).withMessage("color must be at least 3 characters"),
    body('vehicle.plate').isLength({min:3}).withMessage("plate must be at least 3 characters"),
    body('vehicle.capacity').isLength({min:1}).withMessage("capacity must be at least 1 characters"),
    body('vehicle.vehicleType').isLength({min:1}).withMessage("vehicleType must be at least 1 characters")

],captainController.registerCaptain
)


router.post('/login',[
    body('email').isEmail().withMessage('Email is not valid'),
    body('password').isLength({min:6}).withMessage('Password must be at least 6 characters long')
],captainController.loginCaptain
)



router.get('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)
module.exports = router

