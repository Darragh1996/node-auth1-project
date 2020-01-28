const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const KnexSessionStore = require("connect-session-knex")(session);

module.exports = server => {
  server.use(helmet());
  server.use(express.json());
  server.use(cookieParser());
  server.use(cors());
  server.use(
    session({
      name: "monkey",
      secret: "a secret message that no one can know",
      cookie: {
        maxAge: 1000 * 60,
        secure: false,
        httpOnly: true
      },
      resave: false,
      saveUninitialized: false,
      store: new KnexSessionStore({
        knex: require("../database/dbConfig"),
        tablename: "sessions",
        sidfieldname: "sid",
        createtable: true,
        clearInterval: 1000 * 60 * 60
      })
    })
  );
};
