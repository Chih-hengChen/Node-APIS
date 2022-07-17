const mongoose = require('mongoose');  // 引入mongoose
const Schema = mongoose.Schema;  // 实例化Schema

// 创建数据库表格式
const UserSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
    },
    identity:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now(),
    },
})
User = mongoose.model("users", UserSchema);
module.exports = User;