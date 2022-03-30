const Annotations = require("../models/AnnotationData");

module.exports = {
  async create(req, res) {
    const { title, notes, priority } = req.body;
    if (!notes || !title) {
      return res.status(400).json({ error: "Title/Annotation Required" });
    }
    const annotationCreated = await Annotations.create({
      title,
      notes,
      priority,
    });
    return res.json(annotationCreated);
  },

  async read(req, res) {
    const annotationsList = await Annotations.find();

    return res.json(annotationsList);
  },

  async delete(req, res) {
    const { id } = req.params;

    const annotationsDeleted = await Annotations.findOneAndDelete({ _id: id });
    if (annotationsDeleted) {
      return res.json(`${annotationsDeleted._id} has been deleted.`);
    }
    return res.status(401).json({ error: "item not found." });
  },
};
