const functions = require("firebase-functions");
const express = require("express");

const server = require("./__sapper__/build/server/server");
const middleware = express().use(server.middleware());

exports.server = functions.https.onRequest((req, res) => {
  req.baseUrl = "";
  middleware(req, res);
});
