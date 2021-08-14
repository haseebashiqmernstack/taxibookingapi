const mongoose=require('mongoose');

const bookingModel=new mongoose.Schema({
    riderName:{type:String,required:true},
    bookingNumber:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    // person:{type:String},
    airport:{type:String},
    champagne:{
        question:{type:String},
        option:{type:String}
    },
flowerBouquet:{
    question:{type:String},
    option:{type:String}
},
    passengers:{type:Number,required:true},
    isConfirm:{type:Boolean}

},{
    timestamps:true
});

module.exports=mongoose.model('Bookings',bookingModel);