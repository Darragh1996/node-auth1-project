const Users = require("../models/users-model");
const bcrypt = require("bcryptjs");

function restricted(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res
      .status(400)
      .json({
        message: "no cookie, or cookie without a valid session id in the monkey"
      });
  }
}

module.exports = restricted;
