require('dotenv').config();
const mongoose=require('mongoose');

exports.init=()=>{
    mongoose.connect("mongodb+srv://haseeb-ashiq:j1A6L5ls8IsK7d29@cluster0.6dnqg.mongodb.net/taxibooking?retryWrites=true&w=majority",
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