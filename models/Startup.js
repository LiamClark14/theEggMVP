const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
  name: {
    firstName: {
      type: String,
    },
    lastName: {
      type: String
    },
    required: true
  },
  email: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  companyUrl: {
    type: String,
    required: false
  },
  projectType: {
    type: String
  }
})

const Startup = mongoose.model('Startup', startupSchema);

module.exports = Startup;
