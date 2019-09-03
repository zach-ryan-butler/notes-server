const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxlength: 50
  },
  body: {
    type: String,
    required: true,
    maxlength: 250
  }
});

module.exports = mongoose.model('Note', noteSchema);
