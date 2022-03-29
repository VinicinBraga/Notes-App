const mongoose = require("mongoose");

const dbConfig =
  "mongodb+srv://noteApplication:3484@daynote.fvg5s.mongodb.net/annotations?retryWrites=true&w=majority";

const connection = mongoose.connect(dbConfig, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
