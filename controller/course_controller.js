const Courses=require('../model/courses');

const courseController={};

courseController.index=(req,res,next)=>{
    Courses.getAll()
    .then((courses) => {
        res.json({
          message: 'ok',
          data: { courses },
        });
      })
      .catch(next);
}

courseController.show = (req, res, next) => {
    Courses.getById(req.params.id)
      .then((course) => {
        res.json({
          message: 'ok',
          data: { course },
        });
      })
      .catch(next);
  };

  courseController.create=(req,res,next)=>{
    new Courses({
      course_name: req.body.course_name,
      description: req.body.description,
      teacher_id: req.body.teacher_id
    })
    .save()
    .then((course) => {
      res.json({
        message: 'course added successfully!',
        data: { course},
      });
    })
    .catch(next);
  }

  courseController.delete = (req, res, next) => {
    Courses.getById(req.params.id)
      .then((course) => course.delete())
      .then(() => {
        res.json({
          message: 'course deleted successfully!',
        });
      })
      .catch(next);
  };

  courseController.update = (req, res, next) => {
    Courses.getById(req.params.id)
      .then((course) =>
        course.update({
          course_name: req.body.course_name,
          description: req.body.description,
          teacher_id: req.body.teacher_id,
        })
      )
      .then((course) => {
        res.json({
          message: 'course updated successfully!',
          data: { course },
        });
      })
      .catch(next);
  };

module.exports=courseController;