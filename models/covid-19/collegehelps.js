const mongoose = require('mongoose');

const CollegeHelpSchema = new mongoose.Schema({
  main_title: {
    type: String,
  },
  main_content: {
    type: String,
  },
});

module.exports = mongoose.model('collegehelps', CollegeHelpSchema);
