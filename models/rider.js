const mongoose=require('mongoose');

const riderModel = new mongoose.Schema({
    fname:{type:String,required:true},
    lname:{type:String,required:true},
    username:{type:String,required:true},
    fathername:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    contactNumber:{type:String,unique:true,required:true},
    picture:{type:String,required:false},
    active:{type:Boolean},
})
module.exports = mongoose.model('Riders',riderModel);