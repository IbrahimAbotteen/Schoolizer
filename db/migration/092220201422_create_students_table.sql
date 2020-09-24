CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    grade_level INTEGER not NULL
    
);

alter table students
add column student_user_id INTEGER REFERENCES student_user(id);