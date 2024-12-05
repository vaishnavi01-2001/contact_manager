// const express = require('express');
// const cors = require('cors');
// const userRoutes = require('./routes/userRoutes.js');

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use('/api/users', userRoutes);

// const PORT = 5000;
// app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));