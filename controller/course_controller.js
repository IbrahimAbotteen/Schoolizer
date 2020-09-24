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

module.exports=courseController;