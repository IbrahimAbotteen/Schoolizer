const express=require('express');
const courseRouter=express.Router();
const courseController=require('../controller/course_controller');

courseRouter.get('/',courseController.index);
courseRouter.post('/',courseController.create);
courseRouter.get('/:id',courseController.show);
//courseRouter.put('/:id',courseController.update);
//courseRouter.delete('/:id',courseController.delete); 



module.exports=courseRouter;