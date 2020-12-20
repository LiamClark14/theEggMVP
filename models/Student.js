const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
  university: {
    type: String,
    required: false
  },
  interests: {
    type: String,
    required: true
  },
  projectType: {
    type: String,
    required: true
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;