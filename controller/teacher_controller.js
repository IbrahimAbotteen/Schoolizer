const Teachers=require('../model/teachers');
const teacherController={};

teacherController.index=(req,res,next)=>{
    Teachers.getAll()
    .then((teachers) => {
        res.json({
          message: 'ok',
          data: { teachers },
        });
      })
      .catch(next);
}

teacherController.show = (req, res, next) => {
    Teachers.getById(req.params.id)
      .then((teacher) => {
        res.json({
          message: 'ok',
          data: { teacher },
        });
      })
      .catch(next);
  }; 

  teacherController.create=(req,res,next)=>{
    new Teachers({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      major: req.body.major,
      user_id: req.body.user_id,
    })
    .save()
    .then((teacher) => {
      res.json({
        message: 'teacher added successfully!',
        data: { teacher},
      });
    })
    .catch(next);
  };

  teacherController.delete = (req, res, next) => {
    Teachers.getById(req.params.id)
      .then((teacher) => teacher.delete())
      .then(() => {
        res.json({
          message: 'teacher deleted successfully!',
        });
      })
      .catch(next);
  };

  teacherController.update = (req, res, next) => {
    Teachers.getById(req.params.id)
      .then((teacher) =>
        teacher.update({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          major: req.body.major,
        })
      )
      .then((teacher) => {
        res.json({
          message: 'teacher updated successfully!',
          data: { teacher },
        });
      })
      .catch(next);
  };


module.exports=teacherController;