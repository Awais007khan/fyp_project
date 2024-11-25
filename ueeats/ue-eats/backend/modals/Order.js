const mongoose = require('mongoose')
const { Schema } = mongoose;
const OrderSchema = new Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true
    // },
    UserName:{
        type:String,
        required:true
    },
    ItemName: {
        type: String,
        required: true,
    },
    DepartmentName: {
        type: String,
        required: true
    },
    CurrentSemester: {
        type: String,
        required: true
    },
    RoomNumber: {
        type: String,
        required: true
    },


    date: {
        type: String,
        default: Date.now
    },
    // phonenumber:{
    //     type : String,
    //     required:true,
    // },
});
const Order = mongoose.model('order', OrderSchema)
// User.createIndexes()
module.exports = Order