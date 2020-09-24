const db=require('../db/config');
class Teachers{
    constructor({id,first_name,last_name,major,user_id}){
        this.id=id || null;
        this.first_name=first_name;
        this.last_name=last_name;
        this.major=major;
        this.user_id=user_id ||null;

    }

    static getAll() {
        return db
          .manyOrNone('SELECT * FROM teachers ORDER BY id ASC')
          .then((teachers) => teachers.map((teacher) => new this(teacher)));
      }

    
    static getById(id){
    return db
    .oneOrNone(`SELECT * FROM teachers WHERE id=$1`,id)
    .then((teacher) => {
    if (teacher) return new this(teacher);
    throw new Error('teacher not found');
    });
}

save() {
    return db
      .one(
        `
      INSERT INTO teachers (first_name,last_name,major,user_id)
      VALUES ($/first_name/, $/last_name/, $/major/,$/user_id/)
      RETURNING *`,
        this
      )
      .then((teacher) => {
        return Object.assign(this, teacher);
      });
  }

  delete(){
    return db.oneOrNone(`DELETE FROM teachers WHERE id = $1`, this.id);
}
   update(changes){
        Object.assign(this,changes);
        return db.oneOrNone(
           `UPDATE teachers SET
            first_name = $/first_name/,
            last_name = $/last_name/,
            major = $/major/
            WHERE id = $/id/
            RETURNING * `, this )
            .then((teacher)=>Object.assign (this,teacher))          
        }


}

module.exports=Teachers;