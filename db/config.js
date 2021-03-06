const DB_NAME='schoolizer';
require('dotenv').config();
const options = {
  query: (e) => {
    console.log(e.query);
  },
};

const pgp = require('pg-promise')(options);


function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
      return pgp({
          database: DB_NAME,
          port: 5432,
          host: 'localhost',
          user:process.env.NAME,
          password:process.env.PASSWORD
      });
  } else if (process.env.NODE_ENV === 'production') {
      return pgp(process.env.DATABASE_URL);
  };
};
module.exports = setDatabase();