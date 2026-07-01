const { verify } = require('jsonwebtoken');
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"username already taken"],
        required:[true,"The username is required"]
    },
    email:{
        type:String,
        unique:[true,"This Email already exists"],
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true, "Password is required"]
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:"user"
    },
    verified:{
        type:Boolean,
        default:false,
    }
});


const userModel = mongoose.model('user',userSchema);


module.exports = userModel;


