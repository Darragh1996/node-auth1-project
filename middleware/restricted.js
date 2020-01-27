const Users = require("../models/users-model");
const bcrypt = require("bcryptjs");

function restricted(req, res, next) {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.user = user;
        next();
      } else {
        return res.status(404).json({ message: "user not found" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
}

module.exports = restricted;
