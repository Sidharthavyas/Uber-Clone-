const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');

module.exports.getCoordinates = async (req, res, next) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log('Validation errors:', errors.array());
        console.log('Query parameters received:', req.query);
        return res.status(400).json({ 
            message: 'Invalid request parameters',
            errors: errors.array() 
        });
    }
    
    const address = req.query.address;
    if (!address) {
        return res.status(400).json({ 
            message: 'Address parameter is required',
            example: '/get-coordinates?address=your address here'
        });
    }
    
    console.log(`Processing geocoding request for address: ${address}`);
    
    try {
        const coordinates = await mapService.getCoordinates(address);
        console.log(`Successfully retrieved coordinates for ${address}:`, coordinates);
        res.status(200).json({
            success: true,
            address: address,
            coordinates: coordinates
        });
    } catch (err) {
        console.error(`Error getting coordinates for ${address}:`, err.message);
        res.status(400).json({ 
            success: false,
            message: 'Coordinates not found',
            error: err.message
        });
    }
};

module.exports.getDistanceTime = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Invalid request parameters',
                errors: errors.array()
            });
        }
        const { origin, destination } = req.query;
        const distanceTime = await mapService.getDistanceTime(origin, destination);
        res.status(200).json(distanceTime);
    } catch (err) {
        console.error('Error getting distance and time:', err.message);
        res.status(400).json({
            success: false,
            message: 'Distance and time not found',
            error: err.message
        });
    }
};

module.exports.getSuggestions = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                message: 'Invalid request parameters',
                errors: errors.array()
            });
        }
        
        const input = req.query.input;
        if (!input) {
            return res.status(400).json({
                message: 'Input parameter is required',
                example: '/get-suggestions?input=your search text here'
            });
        }
        
        const suggestions = await mapService.getSuggestions(input);
        res.status(200).json({
            success: true,
            input: input,
            suggestions: suggestions
        });
    } catch (err) {
        console.error(`Error getting suggestions for ${req.query.input}:`, err.message);
        res.status(400).json({
            success: false,
            message: 'Could not get suggestions',
            error: err.message
        });
    }
};