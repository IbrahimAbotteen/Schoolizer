const Students=require('../model/students');

const studentController={};

studentController.index=(req,res,next)=>{
    Students.getAll()
    .then((students) => {
        res.json({
          message: 'ok',
          data: { students },
        });
      })
      .catch(next);
}

module.exports=studentController;