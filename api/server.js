const express = require("express");

const apiRouter = require("./api-router");

const configureMiddleware = require("./confugure-middleware");

const server = express();

configureMiddleware(server);

server.use("/api", apiRouter);

module.exports = server;
