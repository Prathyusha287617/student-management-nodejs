const express=require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');

const app=express();
const PORT = process.env.PORT || 2080;

//Middleware
app.use(bodyParser.json());//data in what type we are sending

//MongoDB connection (use local mangodb uri )
mongoose.connect('mongodb://0.0.0.0:27017/studentManagement',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>console.log('MongoDB connected'))
.catch((err)=>console.log(err));

//Routes (starting part of the routes)
app.use('/api/v1/students',studentRoutes);

//start the server
app.listen(PORT,()=>{
    console.log(`Console is running on port ${PORT}`);
});