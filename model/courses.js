const db =require('../db/config');

class Courses{
    constructor({id,course_name,description,teacher_id}){
        this.id=id || null;
        this.course_name=course_name;
        this.description=description;
        this.teacher_id=teacher_id ||null;
    }

    static getAll() {
        return db
          .manyOrNone('SELECT * FROM courses ORDER BY id ASC')
          .then((courses) => courses.map((course) => new this(course)));
      }
}

module.exports=Courses;