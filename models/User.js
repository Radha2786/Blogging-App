const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        trim:true,
        required:true
    }
})


userSchema.plugin(passportLocalMongoose);   // passport local mongoose jitne bhi tareeke/strategies provide kar rha hai un sabko use krne k liye we are using this line

let User = mongoose.model('User' , userSchema);
module.exports = User;
