const express = require('express');
const router = express.Router();
const Student=require('../models/Student');

//1.Fetch all students[GET]
router.get('/',async(req,res)=>{
    try{
        const students=await Student.find();
        res.status(200).json(students);
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//Add a new student[POST]
router.post('/',async(req,res)=>{
    const{studentId,name,gender,dob,mobileNumber,courseTitle,city,state}=req.body;

    const newStudent = new Student({
        studentId,
        name,
        gender,
        dob,
        mobileNumber,
        courseTitle,
        city,
        state
    });
    try{
        await newStudent.save();
        res.status(201).json(newStudent);
    }catch(err){
        res.status(400).json({message:err.message});
    }
});

module.exports=router;