const CaptainModel = require('../models/captain.model');

module.exports.createCaptain=async({
    firstname,lastname,email,password,
    color,plate,capacity,vehicleType
})=>{
    if(!firstname  || !email || !password || !color || !vehicleType || !capacity || !plate ){
        throw new Error('All fields are required')
    }
    const captain = await CaptainModel.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color,
            plate,
            capacity,
            vehicleType,
           
        }
    })
    return captain
}



//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2I2MDI4NGJkYWMwMDk0MDZiM2I3YjAiLCJpYXQiOjE3Mzk5ODE0NDR9.N2jWfYrRZJsmoPWeWmrISi5ftvGRouMaElxa_FawKzU