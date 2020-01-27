const router = require("express").Router();

const Users = require("../models/users-model");

const bcrypt = require("bcryptjs");

const restricted = require("../middleware/restricted");

router.post("/register", (req, res) => {
  let user = req.body;
  const hashPass = bcrypt.hashSync(user.password, 12);
  user.password = hashPass;

  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/login", restricted, (req, res) => {
  res.status(200).json(req.user);
});

module.exports = router;
