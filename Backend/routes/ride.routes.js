const express = require('express');
const { body,query } = require('express-validator');
const router = express.Router();
const rideService = require('../services/ride.service');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create',
    authMiddleware.authUser,
    [
        body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
        body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
        body('vehicleType').isIn(['auto', 'car', 'bike']).withMessage('Invalid vehicle type')
    ],
    rideController.createRide
);

router.get('/get-fare',
    authMiddleware.authUser,
    [
        query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
        query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
        query('vehicleType').isIn(['auto', 'car', 'bike']).withMessage('Invalid vehicle type')
    ],
    rideController.getFare
)

module.exports = router;
