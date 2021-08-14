const mongoose=require('mongoose');

const driverModel = new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    username:{type:String,required:true},
    fathername:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String},
    contactNumber:{type:String,unique:true,required:true},
    picture:{type:String}
});

module.exports = mongoose.model('Drivers',driverModel);