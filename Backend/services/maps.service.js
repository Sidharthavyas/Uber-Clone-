const axios = require('axios');

const getCoordinates = async (address) => {
    if (!address) {
        throw new Error('Address is required');
    }

    const apiKey = process.env.GOMAPS_API_KEY;
    const url = `https://maps.gomaps.pro/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK' && response.data.results.length > 0) {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng,
                formatted_address: response.data.results[0].formatted_address
            };
        } else {
            throw new Error(`Geocoding API returned status: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error geocoding address:', error);
        throw error;
    }
};

const getDistanceTime = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination are required');
    }

    const apiKey = process.env.GOMAPS_API_KEY;
    const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&units=metric&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const element = response.data.rows[0].elements[0];
            return {
                distance: element.distance.text,
                duration: element.duration.text
            };
        } else {
            throw new Error(`GoMaps API returned status: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching distance and time:', error);
        throw error;
    }
};

const getSuggestions = async (input) => {
    if (!input) {
        throw new Error('Input is required');
    }

    const apiKey = process.env.GOMAPS_API_KEY;
    const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            return response.data.predictions.map(prediction => ({
                place_id: prediction.place_id,
                description: prediction.description
            }));
        } else {
            throw new Error(`Places API returned status: ${response.data.status}`);
        }
    } catch (error) {
        console.error('Error fetching place suggestions:', error);
        throw error;
    }
};

module.exports = {
    getCoordinates,
    getDistanceTime,
    getSuggestions
};