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

    static getById(id){
    return db
    .oneOrNone(`SELECT * FROM courses WHERE id=$1`,id)
    .then((course) => {
    if (course) return new this(course);
    throw new Error('course not found');
    });
    }

    save() {
        return db
          .one(
            `
          INSERT INTO courses (course_name,description,teacher_id)
          VALUES ($/course_name/, $/description/, $/teacher_id/)
          RETURNING *`,
            this
          )
          .then((course) => {
            return Object.assign(this, course);
          });
      }

      delete(){
        return db.oneOrNone(`DELETE FROM courses WHERE id = $1`, this.id);
    }

    update(changes){
        Object.assign(this,changes);
        return db.oneOrNone(
            `UPDATE courses SET
             course_name = $/course_name/,
             description = $/description/,
             teacher_id = $/teacher_id/
             WHERE id = $/id/
             RETURNING * `, this )
             .then((course)=>Object.assign (this,course))          
        }
}

module.exports=Courses;