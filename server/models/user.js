const { Schema, model } = require('mongoose');
const medlistSchema = require('./medlist')

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    username: {
      type: String, 
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    medList: [medlistSchema]
  }
);

const User = model('user', UserSchema);

module.exports = User;
