var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  title: String,
  body: String
});

var note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = note;