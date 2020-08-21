const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const HospitalSchema = new Schema({
  hospitalName: {
    type: String,
    required: true
  },
  hospitalEmail: {
    type: String,
    required: true
  },
  hospitalNumber: {
      type: Number,
      required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Hospital = mongoose.model('hospitals', HospitalSchema);
