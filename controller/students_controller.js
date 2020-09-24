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

studentController.create=(req,res,next)=>{
  new Students({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    grade_level: req.body.grade_level,
    user_id: req.body.user_id,
  })
  .save()
  .then((student) => {
    res.json({
      message: 'student added successfully!',
      data: { student},
    });
  })
  .catch(next);
}

studentController.update = (req, res, next) => {
  Students.getById(req.params.id)
    .then((student) =>
      student.update({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        grade_level: req.body.grade_level,
      })
    )
    .then((student) => {
      res.json({
        message: 'student updated successfully!',
        data: { student },
      });
    })
    .catch(next);
};

studentController.delete = (req, res, next) => {
  Students.getById(req.params.id)
    .then((student) => student.delete())
    .then(() => {
      res.json({
        message: 'student deleted successfully!',
      });
    })
    .catch(next);
};


module.exports=studentController;