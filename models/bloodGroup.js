const mongoose = require('mongoose');

const bloodGroupSchema = new mongoose.Schema({
  name: {
    type: [String],
    required: true,
  
  }
});

const BloodGroup = mongoose.model('BloodGroup', bloodGroupSchema);

exports.bloodGroupSchema = bloodGroupSchema;
exports.BloodGroup = BloodGroup; 
