const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    studentId:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    gender:{type:String,required:true},
    dob:{type:String},
    mobileNumber:{type:Number,required:true},
    courseTitle:{type:String,required:true},
    city:{type:String,required:true},
    state:{type:String,required:true},

});

module.exports=mongoose.model('Student',studentSchema);