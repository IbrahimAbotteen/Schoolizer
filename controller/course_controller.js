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

module.exports=courseController;