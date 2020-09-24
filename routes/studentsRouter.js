const express=require('express');
const studentRouter=express.Router();
const studentController=require('../controller/students_controller');

studentRouter.get('/',studentController.index);

module.exports=studentRouter;