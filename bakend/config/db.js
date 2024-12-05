// const mysql = require('mysql2');

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password:'root',
//   database:'weja4'
// });

// db.connect((err) => {
//   if (err) throw err;
//   console.log('MySQL connected.');
// });

// module.exports = db;
import mysql from 'mysql2';

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'weja4',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected.');
});

export default db;