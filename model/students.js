const db =require('../db/config');

class Students{
    constructor({id,first_name,last_name,grade_level,student_user_id}){
        this.id=id || null;
        this.first_name=first_name;
        this.last_name=last_name;
        this.grade_level=grade_level;
        this.student_user_id=student_user_id;

    }

    static getAll() {
        return db
          .manyOrNone('SELECT * FROM students ORDER BY id ASC')
          .then((students) => students.map((student) => new this(student)));
      }
}
module.exports=Students;