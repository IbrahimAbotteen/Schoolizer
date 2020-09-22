CREATE TABLE IF NOT EXISTS courses (
    id SERIAL PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    teacher_id INT REFERENCES teachers(id)
    
);