
const { isNumber } = require('util');
const rideModel = require('../models/ride.model');
const mapService = require('../services/maps.service');
const crypto = require('crypto');
async function getFare(pickup, location) {
    if (!pickup || !location) {
        throw new Error('Pickup and location are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, location);
    const distanceInKm = parseFloat(distanceTime.distance.replace(' km', ''));
    const durationInMinutes = parseFloat(distanceTime.duration.replace(' mins', ''));

    const rates = {
        auto: {
            baseFare: 26, // INR for the first 1.5 km
            perKm: 17.14 / 1.5, // INR per km after the first 1.5 km
            perMinute: 0 // Auto-rickshaws typically don't charge per minute
        },
        car: {
            baseFare: 35, // Example base fare in INR
            perKm: 12, // Example per km fare in INR
            perMinute: 1.5 // Example per minute fare in INR
        },
        bike: {
            baseFare: 20, // Example base fare in INR
            perKm: 8, // Example per km fare in INR
            perMinute: 1 // Example per minute fare in INR
        }
    };

    const fare = {
        auto: rates.auto.baseFare + (distanceInKm > 1.5 ? (distanceInKm - 1.5) * rates.auto.perKm : 0),
        car: rates.car.baseFare + (distanceInKm * rates.car.perKm) + (durationInMinutes * rates.car.perMinute),
        bike: rates.bike.baseFare + (distanceInKm * rates.bike.perKm) + (durationInMinutes * rates.bike.perMinute)
    };

    return fare;
}

function getOTP(num){
    function generateOTP() {
        const otp = crypto.randomInt(Math.pow(10, num - 1),Math.pow(10,num)).toString();
        return otp;
}
return generateOTP();
}
module.exports.createRide = async ({
    user, pickup, destination, vehicleType
}) => {
   if(!user || !pickup || !destination || !vehicleType){
    throw new Error('All fields are required');
   }
   
   const fare = await getFare(pickup, destination);
   
   // Fix: Use either create() or new + save(), not both
   const ride = await rideModel.create({
    user,
    pickup,
    destination,
    vehicleType,
    otp:getOTP(6),
    fare: fare[vehicleType]
   });
   
   return ride;
};

module.exports.getFare = getFare;