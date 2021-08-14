const mongoose=require('mongoose');

const vehicleModel = new mongoose.Schema({

    vehicleName:{type:String,required:true},
    vehicleType:{type:String,required:true},
    vehicleModel:{type:String,required:true},
    vehicleNumber:{type:String,required:true},
    active:{type:Boolean}
});

module.exports = mongoose.model('Vehicles',vehicleModel);