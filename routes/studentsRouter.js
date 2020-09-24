const express=require('express');
const studentRouter=express.Router();
const studentController=require('../controller/students_controller');

studentRouter.get('/',studentController.index);
studentRouter.post('/',studentController.create);
studentRouter.get('/:id',studentController.show);
studentRouter.put('/:id',studentController.update);
studentRouter.delete('/:id',studentController.delete); 



module.exports=studentRouter;