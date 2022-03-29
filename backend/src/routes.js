const express = require("express");
const routes = express.Router();

const AnnotetionController = require("./controllers/AnnotetionController");

routes.get("/", AnnotetionController.test);
routes.get("/annotations", AnnotetionController.create);

module.exports = routes;
