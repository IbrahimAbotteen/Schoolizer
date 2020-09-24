const express=require('express');
const teacherRouter=express.Router();
const teacherController=require('../controller/teacher_controller');

teacherRouter.get('/',teacherController.index);
teacherRouter.post('/',teacherController.create);
teacherRouter.get('/:id',teacherController.show);
teacherRouter.put('/:id',teacherController.update);
teacherRouter.delete('/:id',teacherController.delete); 



module.exports=teacherRouter;