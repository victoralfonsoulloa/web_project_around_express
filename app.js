const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/aroundb');

// Import routes
const usersRouter = require('./routes/users');
const cardsRouter = require('./routes/cards');

// Use routes
app.use('/users', usersRouter);
app.use('/cards', cardsRouter);

// Middleware for non-existent routes
app.use((req, res) => {
  res.status(404).json({ message: 'Requested resource not found' });
});

// 500 error handler
app.use((err, req, res) => {
  res.status(500).json({ message: 'An error has occurred on the server' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
