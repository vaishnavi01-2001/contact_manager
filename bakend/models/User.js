// const db = require('../config/db.js');
// const bcrypt = require('bcryptjs');

// const User = {
//   create: async (username, password, callback) => {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
//     db.query(query, [username, hashedPassword], callback);
//   },
//   findByUsername: (username, callback) => {
//     const query = 'SELECT * FROM users WHERE username = ?';
//     db.query(query, [username], callback);
//   }
// };

// module.exports = User;
import db from '../config/db.js'; // Import db using ES module syntax
import bcrypt from 'bcrypt';    // Import bcrypt using ES module syntax

const User = {
  create: async (username, password, callback) => {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
      db.query(query, [username, hashedPassword], callback);
    } catch (err) {
      callback(err);
    }
  },
  findByUsername: (username, callback) => {
    const query = 'SELECT * FROM users WHERE username = ?';
    db.query(query, [username], callback);
  }
};

export default User;