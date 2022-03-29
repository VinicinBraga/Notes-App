const { request } = require("express");
const Annotation = require("../models/AnnotationData");

module.exports = {
  create(req, res) {
    const { title, notes, priority } = request.body;
    console.log(title);
    console.log(notes);
    console.log(priority);
  },

  test(req, res) {
    res.send("Ta dando certo filhão");
  },
};
