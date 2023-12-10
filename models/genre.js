const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GenreInstanceSchema = new Schema({
  name: { type: String, required: true, minLength: 3, maxLength: 100 },
});
GenreInstanceSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", GenreInstanceSchema);
