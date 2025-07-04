const User = require('../models/user');

module.exports.getUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.json(users))
    .catch(next);
};

module.exports.getUserById = (req, res, next) => {
  User.findById(req.params.userId)
    .orFail()
    .then((user) => res.json(user))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).json({ message: 'User not found' });
      }
      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid user ID' });
      }
      return next(err);
    });
};

module.exports.createUser = (req, res, next) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(201).json(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Invalid user data' });
      }
      return next(err);
    });
};