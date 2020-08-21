const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
	symptomName:String,
	id:mongoose.Schema.ObjectId,
    medication:String,
    
});

const Treatment = mongoose.model('Donation',donationSchema);

module.exports = Treatment; 