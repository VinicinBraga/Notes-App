const express = require("express");
const routes = express.Router();

const AnnotetionController = require("./controllers/AnnotetionController");
const PriorityController = require("./controllers/PriorityController");
const ContentController = require("./controllers/ContentController");

routes.post("/annotations", AnnotetionController.create);
routes.get("/annotations", AnnotetionController.read);
routes.delete("/annotations/:id", AnnotetionController.delete);

routes.get("/priorities", PriorityController.read);
routes.post("/priorities/:id", PriorityController.update);

routes.post("/contents/:id", ContentController.update);

module.exports = routes;
