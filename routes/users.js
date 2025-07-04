const express = require("express");
const User = require("../models/user");
const { updateUserProfile, updateUserAvatar } = require("../controllers/user");

const router = express.Router();

// Route to get all users
router.get("/", (req, res, next) => {
  User.find({})
    .then((users) => res.json(users))
    .catch(next);
});

// Route to get a user by ID
router.get("/:id", (req, res, next) => {
  User.findById(req.params.id)
    .orFail(() => {
      const error = new Error("No user found with that id");
      error.statusCode = 404;
      throw error;
    })
    .then((user) => res.json(user))
    .catch((err) => {
      if (err.name === "DocumentNotFoundError") {
        return res.status(404).json({ message: "User not found" });
      }
      if (err.name === "CastError") {
        return res.status(400).json({ message: "Invalid user ID" });
      }
      return next(err);
    });
});

// Route to create a user
router.post("/", (req, res, next) => {
  const { name, about, avatar } = req.body;
  User.create({ name, about, avatar })
    .then((user) => res.status(201).json(user))
    .catch((err) => {
      if (err.name === "ValidationError") {
        return res.status(400).json({ message: "Invalid user data" });
      }
      return next(err);
    });
});

router.patch("/me", updateUserProfile);
router.patch("/me/avatar", updateUserAvatar);

module.exports = router;
