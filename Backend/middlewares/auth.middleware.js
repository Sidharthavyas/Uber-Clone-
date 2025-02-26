// this middle where check the the profiles of the users , if they are authorised they will grant access of the page , if not , you can say invalid user or etc somthing like that

const userModel = require('../models/user.models')
const captainModel = require('../models/captain.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const blacklistTokenModel = require('../models/blacklistToken.model');

module.exports.authUser = async (req,res,next)=>{
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }
    const isBlackListed= await userModel.findOne({token:token})

    if(isBlackListed){
        return res.status(401).json({message: 'Unauthorized'})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await userModel.findById(decoded._id).select('-password')

        req.user = user
        return next()


    }catch(err){
       console.log(err)
        return res.status(401).json({message: 'Unauthorized'})
    }
}


module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || (req.headers.authorization && req.headers.authorization.split(' ')[1]);

    if(!token){
        return res.status(401).json({message: 'Unauthorized'})
    }
    const isBlackListed= await blacklistTokenModel.findOne({token:token})

    if(isBlackListed){
        return res.status(401).json({message: 'Unauthorized'})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const captain = await captainModel.findById(decoded._id).select('-password')

        req.captain = captain
        return next()


    }catch(err){
        console.log(err)
        return res.status(401).json({message: 'Unauthorized'})
    }
}
