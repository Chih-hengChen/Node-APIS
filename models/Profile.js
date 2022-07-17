const mongoose = require('mongoose');  // 引入mongoose
const Schema = mongoose.Schema;  // 实例化Schema

// 创建数据库表格式
const ProfileSchema = new Schema({
    type:{
        type:String,
    },
    description:{
        type:String,
    },
    income:{
        type:String,
        required: true,
    },
    expense:{
        type:String,
        required: true,
    },
    cash:{
        type:String,
        required: true,
    },
    remark:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now(),
    },
})
Profile = mongoose.model("profile", ProfileSchema);
module.exports = Profile;