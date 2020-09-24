const db =require('../db/config');

class Students{
    constructor({id,first_name,last_name,grade_level,user_id}){
        this.id=id || null;
        this.first_name=first_name;
        this.last_name=last_name;
        this.grade_level=grade_level;
        this.user_id=user_id ||null;

    }

    static getAll() {
        return db
          .manyOrNone('SELECT * FROM students ORDER BY id ASC')
          .then((students) => students.map((student) => new this(student)));
      }

    static getByID(id){
        return db
        .oneOrNone('SELECT * FROM students WHERE id=$1',id)
        .then((student) => {
        if (student) return new this(student);
        throw new Error('student not found');
        });
    }

    save() {
        return db
          .one(
            `
          INSERT INTO students (first_name,last_name,grade_level,user_id)
          VALUES ($/first_name/, $/last_name/, $/grade_level/,$/user_id/)
          RETURNING *`,
            this
          )
          .then((student) => {
            return Object.assign(this, student);
          });
      }

    delete(){
        return db.oneOrNone(`DELETE FROM students WHERE id = $1`, this.id);
    }

    update(changes){
        Object.assign(this,changes);
        return db.oneOrNone(
            `UPDATE students SET
             first_name = $/first_name/,
             last_name = $/last_name/,
             grade_level = $/grade_level/
             WHERE id = $/id/
             RETURNING * `, this )
             .then((student)=>Object.assign (this,student))          
        }
}
module.exports=Students;