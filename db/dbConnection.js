require('dotenv').config();
const mongoose=require('mongoose');

exports.init=()=>{
    mongoose.connect(process.env.dbLocal,
        { useCreateIndex: true,
            useFindAndModify: false, 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
           }).then(()=>{
               console.log("connected")
           }).catch(()=>{
               console.log("not connected")
           })
}