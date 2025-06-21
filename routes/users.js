const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/users.json')),
);

// Route to get all users
router.get('/', (req, res) => {
  res.json(users);
});

// Route to get a user by ID
router.get('/:id', (req, res) => {
  const user = users.find((u) => u._id === req.params.id);
  if (!user) {
    return res.status(404).json({ message: 'User ID not found' });
  }
  return res.json(user);
});

module.exports = router;
