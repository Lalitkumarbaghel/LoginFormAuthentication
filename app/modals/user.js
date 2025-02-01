const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        fst_name:{
            type:String,
            required:true
        },
        lst_name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        mobile_n:{
            type:Number,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    }
)

module.exports = new mongoose.model('User', userSchema)