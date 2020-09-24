const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

const studentRouter=require('./routes/studentsRouter');
const courseRouter=require('./routes/courseRouter');
const teacherRouter=require('./routes/teacherRouter');
const authRoutes = require('./routes/auth-routes');
const app =express();
require('dotenv').config();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    key: process.env.SECRET_KEY,
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/',(req,res)=>{
    res.send('hello World')
})

app.use('/student',studentRouter);
app.use('/course',courseRouter);
app.use('/teacher',teacherRouter)

 
 app.use('/api/auth', authRoutes);

app.use('*', (req, res) => {
    res.status(400).json({
      message: 'Not found!',
    });
  });
  
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
      error: err,
      message: err.message,
    });
  });