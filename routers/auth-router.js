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

router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).json({
          message: `Welcome ${user.username}`
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
