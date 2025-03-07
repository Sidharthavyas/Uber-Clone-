const { selectFields } = require('express-validator/lib/field-selection')
const mongoose =require('mongoose')
const rideSchema=new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    pickup:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    vehicleType:{
        type:String,
        enum:['bike','auto','car'],
        required:true
    },
    status:{
        type:String,
        enum:['pending','ongoing','completed','cancelled'],
        default:'pending'
    },
    captain:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Captain'
    },
    fare:{
        type:Number
    },
    duration:{
        type:Number //in seconds
    },
    distance:{
        type:Number //in metre
    },
    paymentID:{
        type:String
    },
    orderID:{
        type:String},
    signature:{
        type:String
    
    },
    otp:{
        type:String,
        select:false,
        required:true
    }
        
    
  

})

module.exports=mongoose.model('Ride',rideSchema)