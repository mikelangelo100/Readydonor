const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {bloodGroupSchema} = require('./bloodGroup');

// Create Schema
const ProfileSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 40
  },
  gender: {
    type: [String],
    required: true
  },
  age:{
    type: String,
    required: true
  },
  phonenumber:{
    type: String,
    required : true
  },
  bloodGroup: {
    type: [String],
    required: true
  },
  city: {
    type: String
  },
  avatar: {
    type: String
  },
  contact: {
    type: String,
    required: true
  },
  bio: {
    type: String
  },
  profileImg: {
    type: String
  },
  accountType : [
    {
    selectAccount: {
      type: String,
      required: true
    }}
  ],
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ],
  account: [
    {
      type: [String]
    }
  ],

  social: {
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    }
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
