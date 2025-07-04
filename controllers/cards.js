const Card = require('../models/card');

module.exports.getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => res.json(cards))
    .catch(next);
};

module.exports.createCard = (req, res, next) => {
  const { name, link } = req.body;
  const owner = req.user._id;
  Card.create({ name, link, owner })
    .then((card) => res.status(201).json(card))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        return res.status(400).json({ message: 'Invalid card data' });
      }
      return next(err);
    });
};

module.exports.deleteCard = (req, res, next) => {
  Card.findByIdAndDelete(req.params.cardId)
    .orFail()
    .then((card) => res.json(card))
    .catch((err) => {
      if (err.name === 'DocumentNotFoundError') {
        return res.status(404).json({ message: 'Card not found' });
      }
      if (err.name === 'CastError') {
        return res.status(400).json({ message: 'Invalid card ID' });
      }
      return next(err);
    });
};