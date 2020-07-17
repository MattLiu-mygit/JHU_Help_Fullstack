const mongoose = require('mongoose');

const MarylandAltSchema = new mongoose.Schema({
  main_title: {
    type: String,
  },
  main_content: {
    type: Array,
  },
});

module.exports = mongoose.model('maryland911alternatives', MarylandAltSchema);
