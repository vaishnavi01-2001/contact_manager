// const express = require('express');
// const router = express.Router();
// const User = require('../models/User.js');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Register user
// router.post('/register', async (req, res) => {
//   const { username, password } = req.body;
//   User.create(username, password, (err) => {
//     if (err) return res.status(500).send('Error creating user');
//     res.status(201).send('User registered successfully');
//   });
// });

// // Login user
// router.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   User.findByUsername(username, async (err, results) => {
//     if (err || results.length === 0) return res.status(401).send('Invalid credentials');
//     const user = results[0];
//     const isValid = await bcrypt.compare(password, user.password);
//     if (!isValid) return res.status(401).send('Invalid credentials');
//     const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
//     res.json({ token });
//   });
// });

// module.exports = router;
import express from 'express';
import User from '../models/User.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

// Register user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  User.create(username, password, (err) => {
    if (err) return res.status(500).send('Error creating user');
    res.status(201).send('User registered successfully');
  });
});

// Login user
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  User.findByUsername(username, async (err, results) => {
    if (err || results.length === 0) return res.status(401).send('Invalid credentials');
    const user = results[0];
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).send('Invalid credentials');
    const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });
    res.json({ token });
  });
});

export default router;